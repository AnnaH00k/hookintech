'use client';

import { useState } from "react";

export default function CodeJourney() {
  const [ideas, setIdeas] = useState([
    { day: "1", goal: "Setup overview page for 100 days of code", status: "complete" },
    { day: "2", goal: "Start with new code stack for university case study, Learning about Java Beans and Java Server Faces", status: "complete" },
    
    // More days can be added here
  ]);
  const [fullscreenEmbed, setFullscreenEmbed] = useState<string | null>(null);

  const openFullscreen = (embedSrc: string) => {
    console.log("Fullscreen opened for:", embedSrc); // Debugging statement
    setFullscreenEmbed(embedSrc);
  };

  const closeFullscreen = () => {
    console.log("Closing fullscreen"); // Debugging statement
    setFullscreenEmbed(null);
  };

  return (
    <div className="min-h-[80vh] bg-[#070b0b] text-[#A0A2A0] relative">
      <main className="flex flex-col items-center min-h-[80vh] justify-center sm:p-20 py-5 w-full">
        <h1 className="text-3xl sm:text-5xl font-bold mt-[5vh] mb-10">100 Days of Code</h1>
        <p className="text-center w-[90vw]">
          I will be updating this page daily with my goals and stats.
        </p>
        <p className="text-center mb-10 w-[90vw]">
         <span className="font-bold">Goal:</span> at least  20 min. of coding daily
        </p>
        
        {/* Clickable Wrapper around embed elements */}
        <div className="w-full flex justify-center sm:flex-row flex-col items-center min-h-[20vh] p-4">
          <div
            onClick={() => openFullscreen("https://wakatime.com/share/@hooked0ntech/bce096f1-f745-44e9-bd3c-610bd08720eb.svg")}
            className="cursor-pointer sm:hover:scale-[105%] p-1"
          >
            <figure>
              <embed
                className="h-[20vh] min-h-[200px] w-auto max-w-[500px] rounded-xl pointer-events-none"
                src="https://wakatime.com/share/@hooked0ntech/bce096f1-f745-44e9-bd3c-610bd08720eb.svg"
              ></embed>
            </figure>
          </div>
          
          <div
            onClick={() => openFullscreen("https://wakatime.com/share/@hooked0ntech/a3093e73-b600-43f6-aa44-83e7cae41064.svg")}
            className="cursor-pointer sm:hover:scale-[105%] p-1"
          >
            <figure>
              <embed
                className="h-[20vh] min-h-[200px] w-auto max-w-[500px] rounded-xl pointer-events-none"
                src="https://wakatime.com/share/@hooked0ntech/a3093e73-b600-43f6-aa44-83e7cae41064.svg"
              ></embed>
            </figure>
          </div>
        </div>

        {/* Table Section */}
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

      {/* Fullscreen Embed Overlay */}
      {fullscreenEmbed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-[90vw] h-[90vh] max-w-3xl">
            <button
              onClick={closeFullscreen}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <embed className="w-full h-full rounded-lg" src={fullscreenEmbed}></embed>
          </div>
        </div>
      )}
    </div>
  );
}
