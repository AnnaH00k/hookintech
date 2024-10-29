'use client';

import { useState, useEffect } from "react";

export default function CodeJourney() {
  const [ideas, setIdeas] = useState([
    { day: "1", goal: "Setup overview page for 100 days of code", status: "complete" },
    // More days can be added here
  ]);



  return (
    <div className="min-h-[80vh] bg-[#070b0b] text-[#A0A2A0]">
      <main className="flex flex-col items-center min-h-[80vh] justify-center sm:p-20 py-5 w-full">
        <h1 className="text-3xl sm:text-5xl font-bold mt-[5vh] mb-10">100 Days of Code</h1>
        <p className="text-center mb-10">
          This is my guide and progress for the 100 days of code challenge. I will be updating this page daily with my goals and stats.
        </p>
        <div className="w-full flex justify-center items-center min-h-[20vh] p-4">
        <figure><embed className="h-[20vh] min-h-[200px] w-auto" src="https://wakatime.com/share/@hooked0ntech/2e93f1d8-d866-414e-9c10-eb0f395b141d.svg"></embed></figure>
        <figure><embed className="h-[20vh] min-h-[200px] w-auto" src="https://wakatime.com/share/@hooked0ntech/bce096f1-f745-44e9-bd3c-610bd08720eb.svg"></embed></figure>
        </div>
        
        <section className="w-full flex flex-col items-center">
          <table className="text-sm sm:text-lg w-[90vw] max-w-5xl">
            <thead>
              <tr>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Day</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Goal of the Day</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">Status</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea, index) => (
                <tr key={index}>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830] text-center">{idea.day}</td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 border border-[#303830]">{idea.goal}</td>
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

