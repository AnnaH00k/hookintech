'use client';

import { useState, useEffect } from "react";

export default function CodeJourney() {
  const [ideas, setIdeas] = useState([
    { day: "1", goal: "Setup overview page for 100 days of code", stats: "Pending", status: "pending" },
    // More days can be added here
  ]);



  return (
    <div className="min-h-[80vh] bg-[#070b0b] text-[#A0A2A0]">
      <main className="flex flex-col items-center min-h-[80vh] justify-center sm:p-20 py-5 w-full">
        <h1 className="text-3xl sm:text-5xl font-bold mt-[5vh] mb-10">100 Days of Code</h1>
        <p className="text-center mb-10">
          This is my guide and progress for the 100 days of code challenge. I will be updating this page daily with my goals and stats.
        </p>
        
        <section className="w-full flex flex-col items-center">
          <table className="text-sm sm:text-lg w-[90vw] max-w-5xl">
            <thead>
              <tr>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Day</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Goal of the Day</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Stats</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Status</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea, index) => (
                <tr key={index}>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830] text-center">{idea.day}</td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">{idea.goal}</td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">{idea.stats}</td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830] text-center">
                    {idea.status === "complete" && "✅"}
                    {idea.status === "incomplete" && "❌"}
                    {idea.status === "pending" && "⏳"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      <footer className="p-5 mt-10 text-center text-xs sm:text-sm bg-[#202c2c]">
        <p>Stay tuned for daily updates and coding progress!</p>
      </footer>
    </div>
  );
}

// Optional function for fetching stats (uncomment if using API integration)
// async function fetchStats() {
//   const response = await fetch("https://wakatime.com/api/...");
//   const data = await response.json();
//   return data.map((day, index) => ({
//     day: index + 1,
//     goal: day.description,
//     stats: day.time_spent,
//     status: day.is_complete ? "complete" : "incomplete"
//   }));
// }
