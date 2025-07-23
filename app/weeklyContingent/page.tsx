"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const DAILY_GOAL = 1200;

interface DayData {
  eaten: number;
  burned: number;
}

const initialWeek: DayData[] = DAYS.map(() => ({ eaten: 0, burned: 0 }));

function calculateWeeklyStats(week: DayData[]) {
  let carryOver = 0;
  const dayStats = week.map((day, idx) => {
    const net = day.eaten - day.burned;
    const allowed = DAILY_GOAL + carryOver;
    const remaining = allowed - net;
    carryOver = remaining;
    return {
      ...day,
      net,
      allowed,
      remaining,
    };
  });
  const totalEaten = week.reduce((sum, d) => sum + d.eaten, 0);
  const totalBurned = week.reduce((sum, d) => sum + d.burned, 0);
  const totalNet = totalEaten - totalBurned;
  const totalAllowed = DAILY_GOAL * 7;
  const totalRemaining = dayStats[6]?.remaining ?? 0;
  return {
    dayStats,
    totalEaten,
    totalBurned,
    totalNet,
    totalAllowed,
    totalRemaining,
  };
}

const WeeklyConingentPage = () => {
  const [week, setWeek] = useState<DayData[]>(initialWeek);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load from cookies after mount (client-side only)
  useEffect(() => {
    const saved = Cookies.get("weeklyContingent");
    if (saved) {
      try {
        setWeek(JSON.parse(saved));
      } catch {
        // ignore parse error, keep initialWeek
      }
    }
    setHasLoaded(true);
  }, []);

  // Save week to cookies whenever it changes, but only after initial load
  useEffect(() => {
    if (hasLoaded) {
      Cookies.set("weeklyContingent", JSON.stringify(week), { expires: 14 });
    }
  }, [week, hasLoaded]);

  const handleChange = (idx: number, field: keyof DayData, value: string) => {
    const newWeek = week.map((day, i) =>
      i === idx ? { ...day, [field]: Number(value) } : day
    );
    setWeek(newWeek);
  };

  const handleReset = () => {
    setWeek(initialWeek);
    Cookies.remove("weeklyContingent");
  };

  const {
    dayStats,
    totalEaten,
    totalBurned,
    totalNet,
    totalAllowed,
    totalRemaining,
  } = calculateWeeklyStats(week);

  return (
    <div className="max-w-2xl mx-auto p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Weekly Calorie Tracker</h1>
      <button
        className="mb-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800"
        onClick={handleReset}
        type="button"
      >
        Reset Week
      </button>
      <div className="mb-6 p-4 bg-green-900 rounded">
        <h2 className="font-semibold mb-2">Weekly Summary</h2>
        <div>
          Total Eaten: <b>{totalEaten}</b> kcal
        </div>
        <div>
          Total Burned: <b>{totalBurned}</b> kcal
        </div>
        <div>
          Total Net: <b>{totalNet}</b> kcal
        </div>
        <div>
          Weekly Goal: <b>{totalAllowed}</b> kcal
        </div>
        <div>
          Remaining for week: <b>{totalRemaining}</b> kcal
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-900">
            <th className="p-2">Day</th>
            <th className="p-2">Eaten (kcal)</th>
            <th className="p-2">Burned (kcal)</th>
            <th className="p-2">Allowed (kcal)</th>
            <th className="p-2">Net (kcal)</th>
            <th className="p-2">Remaining (kcal)</th>
          </tr>
        </thead>
        <tbody>
          {dayStats.map((day, idx) => (
            <tr key={DAYS[idx]} className="text-center border-b">
              <td className="p-2 font-semibold">{DAYS[idx]}</td>
              <td className="p-2">
                <input
                  type="number"
                  min="0"
                  className="w-20 p-1 border rounded bg-inherit"
                  value={week[idx].eaten}
                  onChange={(e) => handleChange(idx, "eaten", e.target.value)}
                  aria-label={`Calories eaten on ${DAYS[idx]}`}
                  placeholder="Eaten"
                />
              </td>
              <td className="p-2">
                <input
                  type="number"
                  min="0"
                  className="w-20 p-1 border rounded bg-inherit"
                  value={week[idx].burned}
                  onChange={(e) => handleChange(idx, "burned", e.target.value)}
                  aria-label={`Calories burned on ${DAYS[idx]}`}
                  placeholder="Burned"
                />
              </td>
              <td className="p-2">{day.allowed}</td>
              <td className="p-2">{day.net}</td>
              <td
                className={`p-2 ${
                  day.remaining < 0 ? "text-red-600" : "text-green-700"
                }`}
              >
                {day.remaining}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-4 text-sm text-gray-500">
        If you eat less than 1200 kcal on a day, the difference is added to the
        next day. If you eat more, the excess is subtracted from the next day.
      </p>
    </div>
  );
};

export default WeeklyConingentPage;
