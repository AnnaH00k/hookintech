"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const DAYS = [
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];
const DAILY_GOAL = 1350;

interface DayData {
  eaten: number;
  burned: number;
}

const initialWeek: DayData[] = DAYS.map(() => ({ eaten: 0, burned: 0 }));

function calculateWeeklyStats(week: DayData[], weeklyCarryOver = 0) {
  // Spread any weekly carry-over (from previous week) evenly across all 7 days,
  // rounded to whole calories per day.
  const perDayAdjustment = Math.round(weeklyCarryOver / 7);
  let carryOver = 0;
  let carryOver2000 = 0;
  const dayStats = week.map((day, idx) => {
    const net = day.eaten - day.burned;

    const allowed = DAILY_GOAL + perDayAdjustment + carryOver;
    const remaining = allowed - net;
    carryOver = remaining;

    const allowed2000 = 2000 + carryOver2000;
    const remaining2000 = allowed2000 - net;
    carryOver2000 = remaining2000;

    return {
      ...day,
      net,
      allowed,
      remaining,
      remaining2000,
      predictedWeightChangeKg: (net - 2000) / 7700,
    };
  });
  const totalEaten = week.reduce((sum, d) => sum + d.eaten, 0);
  const totalBurned = week.reduce((sum, d) => sum + d.burned, 0);
  const totalNet = totalEaten - totalBurned;
  const totalAllowed = DAILY_GOAL * 7 + weeklyCarryOver;
  const totalRemaining = dayStats[6]?.remaining ?? 0;
  const totalAllowed2000 = 2000 * 7;
  const totalRemaining2000 = dayStats[6]?.remaining2000 ?? 0;

  // 2000 kcal/day assumed as maintenance.
  // Approx. 7700 kcal per 1 kg of body weight change.
  const weeklyMaintenance = 2000 * 7;
  const weeklySurplus = totalNet - weeklyMaintenance;
  const predictedWeightChangeKg = weeklySurplus / 7700;
  return {
    dayStats,
    totalEaten,
    totalBurned,
    totalNet,
    totalAllowed,
    totalRemaining,
    totalAllowed2000,
    totalRemaining2000,
    predictedWeightChangeKg,
  };
}

const WeeklyConingentPage = () => {
  const [week, setWeek] = useState<DayData[]>(initialWeek);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [initialCarryOver, setInitialCarryOver] = useState(0);

  // Load from cookies after mount (client-side only)
  useEffect(() => {
    const saved = Cookies.get("weeklyContingent");
    const savedCarryOver = Cookies.get("weeklyContingentCarryOver");
    if (saved) {
      try {
        setWeek(JSON.parse(saved));
      } catch {
        // ignore parse error, keep initialWeek
      }
    }
    if (savedCarryOver) {
      const parsed = Number(savedCarryOver);
      if (!Number.isNaN(parsed)) {
        setInitialCarryOver(parsed);
      }
    }
    setHasLoaded(true);
  }, []);

  // Save week to cookies whenever it changes, but only after initial load
  useEffect(() => {
    if (hasLoaded) {
      Cookies.set("weeklyContingent", JSON.stringify(week), { expires: 14 });
      Cookies.set("weeklyContingentCarryOver", String(initialCarryOver), {
        expires: 14,
      });
    }
  }, [week, initialCarryOver, hasLoaded]);

  const handleChange = (idx: number, field: keyof DayData, value: string) => {
    const newWeek = week.map((day, i) =>
      i === idx ? { ...day, [field]: Number(value) } : day
    );
    setWeek(newWeek);
  };

  const handleReset = () => {
    setWeek(initialWeek);
    setInitialCarryOver(0);
    Cookies.remove("weeklyContingent");
    Cookies.remove("weeklyContingentCarryOver");
  };

  const handleResetWithDebt = () => {
    // Use the current week's final remaining (1350 column) as carry-over for the next week
    const debt = totalRemaining;
    setWeek(initialWeek);
    setInitialCarryOver(debt);
    Cookies.set("weeklyContingentCarryOver", String(debt), { expires: 14 });
    Cookies.remove("weeklyContingent");
  };

  const {
    dayStats,
    totalEaten,
    totalBurned,
    totalNet,
    totalAllowed,
    totalRemaining,
    totalAllowed2000,
    totalRemaining2000,
    predictedWeightChangeKg,
  } = calculateWeeklyStats(week, initialCarryOver);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900/30 via-black to-green-900/30 text-slate-50 px-4 py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-400/80">
            Health · Energy · Balance
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Weekly calorie overview
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-300">
            Keep your week in view with a simple, fluid overview. Enter what you
            eat and burn each day, and we&apos;ll show you how it adds up
            against your goal and maintenance level.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-green-400/90">
                Weekly summary
              </h2>
              <p className="mt-1 text-xs text-slate-300">
                Based on a daily goal of <span className="font-semibold">1350 kcal</span> and
                a maintenance estimate of <span className="font-semibold">2000 kcal</span>.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                className="inline-flex items-center justify-center rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-200 transition hover:border-red-400 hover:bg-red-500/20"
                onClick={handleReset}
                type="button"
              >
                Reset week
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full border border-amber-400/50 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-100 transition hover:border-amber-400 hover:bg-amber-500/20"
                onClick={handleResetWithDebt}
                type="button"
              >
                <span className="mr-1">Reset week with debt</span>
                <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-semibold text-amber-100">
                  {totalRemaining.toLocaleString()} kcal
                </span>
              </button>
            </div>
          </div>

          <dl className="grid gap-3 text-sm sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
              <dt className="text-[11px] font-medium text-slate-300">
                Weekly goal (1350 kcal)
              </dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums">
                {totalAllowed.toLocaleString()}{" "}
                <span className="text-xs font-normal text-slate-400">kcal</span>
              </dd>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-900/10 px-3 py-3">
              <dt className="text-[11px] font-medium text-emerald-100">
                Remaining (goal 1350 kcal)
              </dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums text-emerald-100">
                {totalRemaining.toLocaleString()}{" "}
                <span className="text-xs font-normal text-emerald-100/80">
                  kcal
                </span>
              </dd>
            </div>

            <div className="rounded-2xl border border-blue-500/40 bg-blue-900/20 px-3 py-3">
              <dt className="text-[11px] font-medium text-emerald-100">
                Remaining (maintenance 2000 kcal)
              </dt>
              <dd className="mt-1 text-lg font-semibold tabular-nums text-emerald-100">
                {totalRemaining2000.toLocaleString()}{" "}
                <span className="text-xs font-normal text-emerald-100/80">kcal</span>
              </dd>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 md:col-span-2">
              <dt className="text-[11px] font-medium text-slate-200">
                Predicted weight change this week
              </dt>
              <dd className="mt-1 flex items-baseline gap-1 text-lg font-semibold tabular-nums">
                <span
                  className={
                    predictedWeightChangeKg < 0
                      ? "text-green-400"
                      : predictedWeightChangeKg > 0
                      ? "text-red-400"
                      : "text-slate-300"
                  }
                >
                  {predictedWeightChangeKg > 0 ? "+" : ""}
                  {predictedWeightChangeKg.toFixed(2)}{" "}
                </span>
                <span className="text-xs font-normal text-slate-300">kg</span>
              </dd>
              <p className="mt-1 text-[11px] text-slate-400">
                Target for the week:{" "}
                <span className="font-semibold text-green-400">-0.6 kg</span>
                .
              </p>
            </div>
          </dl>

          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                Daily details
              </h3>
              <p className="text-xs text-slate-300">
                Adjust the values below; everything updates instantly.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <div className="max-h-[520px] overflow-auto">
                <table className="min-w-full text-left text-xs sm:text-sm">
                  <thead className="sticky top-0 z-10 bg-green-950/95 backdrop-blur">
                    <tr>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Day
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Eaten
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (kcal)
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Burned
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (kcal)
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Allowed
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (kcal)
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Net
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (kcal)
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Remaining
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (1350)
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Remaining
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (2000)
                        </span>
                      </th>
                      <th className="px-4 py-3 font-medium text-slate-100">
                        Weight
                        <span className="ml-1 text-[11px] font-normal text-slate-300">
                          (kg)
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dayStats.map((day, idx) => (
                      <tr
                        key={DAYS[idx]}
                        className="border-t border-white/5 bg-black/40 hover:bg-green-950/50"
                      >
                        <td className="whitespace-nowrap px-4 py-3 text-xs font-medium text-slate-100 sm:text-sm">
                          {DAYS[idx]}
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            className="w-24 rounded-full border border-green-500/40 bg-green-900/40 px-3 py-1.5 text-xs text-slate-50 outline-none transition focus:border-emerald-300 focus:bg-slate-950 focus:ring-2 focus:ring-emerald-500/60 sm:w-28 sm:text-sm"
                            value={week[idx].eaten}
                            onChange={(e) =>
                              handleChange(idx, "eaten", e.target.value)
                            }
                            aria-label={`Calories eaten on ${DAYS[idx]}`}
                            placeholder="0"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            className="w-24 rounded-full border border-green-500/40 bg-green-900/40 px-3 py-1.5 text-xs text-slate-50 outline-none transition focus:border-emerald-300 focus:bg-slate-950 focus:ring-2 focus:ring-emerald-500/60 sm:w-28 sm:text-sm"
                            value={week[idx].burned}
                            onChange={(e) =>
                              handleChange(idx, "burned", e.target.value)
                            }
                            aria-label={`Calories burned on ${DAYS[idx]}`}
                            placeholder="0"
                          />
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-xs tabular-nums text-slate-100 sm:text-sm">
                          {day.allowed}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-xs tabular-nums text-slate-100 sm:text-sm">
                          {day.net}
                        </td>
                        <td
                          className={`whitespace-nowrap px-4 py-3 text-xs tabular-nums sm:text-sm ${
                            day.remaining < 0
                              ? "text-red-300"
                              : "text-emerald-300"
                          }`}
                        >
                          {day.remaining}
                        </td>
                        <td
                          className={`whitespace-nowrap px-4 py-3 text-xs tabular-nums sm:text-sm ${
                            day.remaining2000 < 0
                              ? "text-red-300"
                              : "text-emerald-300"
                          }`}
                        >
                          {day.remaining2000}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-xs tabular-nums text-slate-100 sm:text-sm">
                          {day.predictedWeightChangeKg > 0 ? "+" : ""}
                          {day.predictedWeightChangeKg.toFixed(2)} kg
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[11px] leading-relaxed text-slate-400">
            If you eat less than <span className="font-semibold">1350 kcal</span> on a day,
            the difference is carried over and added to the next day. If you eat
            more, the excess is subtracted from the next day. Maintenance is
            estimated at <span className="font-semibold">2000 kcal/day</span>, which is used to
            approximate weight change across the week.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WeeklyConingentPage;
