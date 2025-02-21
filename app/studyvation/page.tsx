"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Studyvation() {
  const [activeTab, setActiveTab] = useState<"overview" | "revenue">(
    "overview"
  );

  const revenueData = [
    {
      year: 1,
      users: 12000,
      adsRevenue: 77760,
      premiumRevenue: 24000,
      total: 101760,
    },
    {
      year: 2,
      users: 13800,
      adsRevenue: 89424,
      premiumRevenue: 27600,
      total: 117024,
    },
    {
      year: 3,
      users: 15870,
      adsRevenue: 102837,
      premiumRevenue: 31740,
      total: 134577,
    },
    {
      year: 4,
      users: 18250,
      adsRevenue: 118263,
      premiumRevenue: 36500,
      total: 154763,
    },
    {
      year: 5,
      users: 20988,
      adsRevenue: 136002,
      premiumRevenue: 41976,
      total: 177978,
    },
    {
      year: 6,
      users: 24136,
      adsRevenue: 156402,
      premiumRevenue: 48272,
      total: 204674,
    },
    {
      year: 7,
      users: 27756,
      adsRevenue: 179863,
      premiumRevenue: 55512,
      total: 235375,
    },
    {
      year: 8,
      users: 31919,
      adsRevenue: 206843,
      premiumRevenue: 63839,
      total: 270682,
    },
    {
      year: 9,
      users: 36707,
      adsRevenue: 237869,
      premiumRevenue: 73414,
      total: 311283,
    },
    {
      year: 10,
      users: 42213,
      adsRevenue: 273549,
      premiumRevenue: 84427,
      total: 357976,
    },
  ];

  return (
    <main className="flex flex-col items-center min-h-screen justify-center sm:p-20 sm:mt-0 py-5 text-[#A0A2A0] bg-[#070b0b] w-full">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-white mb-10">
          {"Azubee - Die Lern-App für Auszubildende"}
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          {
            "Eine umfassende Plattform für alle Ausbildungsberufe in Deutschland. Unterstützt Auszubildende und Ausbilder mit Lernmaterialien, Gamification und Motivationsinhalten."
          }
        </p>
      </section>

      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 rounded ${
            activeTab === "overview" ? "bg-[#2A3828]" : "bg-[#151C14]"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("revenue")}
          className={`px-4 py-2 rounded ${
            activeTab === "revenue" ? "bg-[#2A3828]" : "bg-[#151C14]"
          }`}
        >
          Revenue Projection
        </button>
      </div>

      {activeTab === "overview" ? (
        <>
          <section className="mt-12 max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative flex justify-center p-2">
                <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
                  <img
                    src="/images/berufsberatung.svg"
                    alt="Berufsberatung"
                    className="rounded-lg shadow-2xl max-w-xs"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-white font-semibold mb-4">
                  {"Marktpotenzial"}
                </h2>
                <p className="text-gray-300">
                  {"Marktgröße: 1,2 Millionen Azubis in Deutschland"}
                </p>
                <div className="mt-4 bg-[#151C14] p-4 rounded">
                  <h3 className="text-xl text-white mb-2">{"Preismodell"}</h3>
                  <ul className="list-disc ml-6 text-gray-300">
                    <li>{"Kostenlose Version mit Werbung"}</li>
                    <li>{"Premium für Einzelnutzer: 20€"}</li>
                    <li>{"Premium für Schulen/Ausbilder: 15€"}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative flex justify-center p-2">
                <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
                  <img
                    src="/images/lernmaterialien.svg"
                    alt="Lernmaterialien"
                    className="rounded-lg shadow-2xl max-w-xs"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-white font-semibold mb-6">
                  {"Features"}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-[#151C14] p-4 rounded">
                    <h3 className="text-xl text-white mb-3">{"Lernen"}</h3>
                    <ul className="list-disc ml-6 text-gray-300 space-y-2">
                      <li>{"Multiple-Choice-Tests"}</li>
                      <li>{"Personalisierte Karteikarten"}</li>
                      <li>{"Offene Fragen"}</li>
                      <li>{"Prüfungsvorbereitung"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative flex justify-center p-2">
                <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
                  <img
                    src="/images/motivation.svg"
                    alt="Motivation"
                    className="rounded-lg shadow-2xl max-w-xs"
                  />
                </div>
              </div>
              <div>
                <div className="bg-[#151C14] p-4 rounded">
                  <h3 className="text-xl text-white mb-3">{"Engagement"}</h3>
                  <ul className="list-disc ml-6 text-gray-300 space-y-2">
                    <li>{"Gamification & Abzeichen"}</li>
                    <li>{"Lern-Streaks"}</li>
                    <li>{"Wettkämpfe"}</li>
                    <li>{"Diskussionsforum"}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative flex justify-center p-2">
                <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
                  <img
                    src="/images/daten.svg"
                    alt="Daten"
                    className="rounded-lg shadow-2xl max-w-xs"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-white font-semibold mb-4">
                  {"Datenspeicherung"}
                </h2>
                <div className="bg-[#151C14] p-4 rounded">
                  <ul className="list-disc ml-6 text-gray-300 space-y-2">
                    <li>{"Offline und Online Speicherung verfügbar"}</li>
                    <li>{"Sichere Datenspeicherung nach DSGVO"}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative flex justify-center p-2">
                <div className="hover:scale-150 hover:bg-background hover:shadow-md hover:shadow-gray-600 hover:items-center left-0 right-0 mx-auto p-2 transition-all duration-300 ease-in-out">
                  <img
                    src="/images/ausbildungsWerkzeuge.svg"
                    alt="Ausbildungswerkzeuge"
                    className="rounded-lg shadow-2xl max-w-xs"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl text-white font-semibold mb-4">
                  {"Wettbewerb"}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "StudySmarter",
                    "Simpleclub",
                    "Prozubi",
                    "Novaheal",
                    "Azubi Navigator",
                    "Azubiwelt",
                    "Wörk",
                  ].map((competitor) => (
                    <div
                      key={competitor}
                      className="bg-[#151C14] p-3 rounded text-center"
                    >
                      {competitor}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="mt-12 max-w-5xl mx-auto w-full">
          <h2 className="text-3xl text-white font-semibold mb-6">
            {"Umsatzprognose"}
          </h2>
          <div className="bg-[#151C14] p-4 rounded mb-6">
            <h3 className="text-xl text-white mb-3">{"Prognose Highlights"}</h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>{`Jahr 1: €${revenueData[0].total.toLocaleString()} Umsatz mit ${revenueData[0].users.toLocaleString()} Nutzern`}</li>
              <li>{`Jahr 5: €${revenueData[4].total.toLocaleString()} Umsatz mit ${revenueData[4].users.toLocaleString()} Nutzern`}</li>
              <li>{`Jahr 10: €${revenueData[9].total.toLocaleString()} Umsatz mit ${revenueData[9].users.toLocaleString()} Nutzern`}</li>
              <li>{"Gesamtumsatz über 10 Jahre: €2.065.000"}</li>
            </ul>
          </div>

          <div className="h-[400px] w-full bg-[#151C14] p-6 rounded">
            <LineChart
              width={800}
              height={350}
              data={revenueData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="year"
                label={{ value: "Jahr", position: "bottom" }}
              />
              <YAxis label={{ value: "EUR", angle: -90, position: "left" }} />
              <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="total"
                name="Gesamtumsatz"
                stroke="#4ade80"
              />
              <Line
                type="monotone"
                dataKey="adsRevenue"
                name="Werbeumsatz"
                stroke="#22c55e"
              />
              <Line
                type="monotone"
                dataKey="premiumRevenue"
                name="Premium Umsatz"
                stroke="#15803d"
              />
            </LineChart>
          </div>
        </section>
      )}
    </main>
  );
}
