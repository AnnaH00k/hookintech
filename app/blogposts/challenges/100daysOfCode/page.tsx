'use client';

import { useState } from "react";

export default function CodeJourney() {
  const [ideas, setIdeas] = useState([
    { day: "1", goal: "Setup overview page for 100 days of code", status: "complete" },
    { day: "2", goal: "Start with new code stack for university case study, Learning about Java Beans and Java Server Faces", status: "complete" },
    { day: "3", goal: "Programming some frontend stuff for work", status: "complete" },
    { day: "4", goal: "Begin coding for case study (Programming an industrial Information System with Java EE)", status: "complete" },
    { day: "5", goal: "Designing landing page Ideas while relaxing", status: "complete" },
    { day: "6", goal: "Automated overview for all hooked0n.tech Pages", status: "complete" },
    { day: "7", goal: "", status: "pending" },
    { day: "8", goal: "", status: "pending" },
    { day: "9", goal: "", status: "pending" },
    { day: "10", goal: "", status: "pending" },
    { day: "11", goal: "", status: "pending" },
    { day: "12", goal: "", status: "pending" },
    { day: "13", goal: "", status: "pending" },
    { day: "14", goal: "", status: "pending" },
    { day: "15", goal: "", status: "pending" },
    { day: "16", goal: "", status: "pending" },
    { day: "17", goal: "", status: "pending" },
    { day: "18", goal: "", status: "pending" },
    { day: "19", goal: "", status: "pending" },
    { day: "20", goal: "", status: "pending" },
    { day: "21", goal: "", status: "pending" },
    { day: "22", goal: "", status: "pending" },
    { day: "23", goal: "", status: "pending" },
    { day: "24", goal: "", status: "pending" },
    { day: "25", goal: "", status: "pending" },
    { day: "26", goal: "", status: "pending" },
    { day: "27", goal: "", status: "pending" },
    { day: "28", goal: "", status: "pending" },
    { day: "29", goal: "", status: "pending" },
    { day: "30", goal: "", status: "pending" },
    { day: "31", goal: "", status: "pending" },
    { day: "32", goal: "", status: "pending" },
    { day: "33", goal: "", status: "pending" },
    { day: "34", goal: "", status: "pending" },
    { day: "35", goal: "", status: "pending" },
    { day: "36", goal: "", status: "pending" },
    { day: "37", goal: "", status: "pending" },
    { day: "38", goal: "", status: "pending" },
    { day: "39", goal: "", status: "pending" },
    { day: "40", goal: "", status: "pending" },
    { day: "41", goal: "", status: "pending" },
    { day: "42", goal: "", status: "pending" },
    { day: "43", goal: "", status: "pending" },
    { day: "44", goal: "", status: "pending" },
    { day: "45", goal: "", status: "pending" },
    { day: "46", goal: "", status: "pending" },
    { day: "47", goal: "", status: "pending" },
    { day: "48", goal: "", status: "pending" },
    { day: "49", goal: "", status: "pending" },
    { day: "50", goal: "", status: "pending" },
    { day: "51", goal: "", status: "pending" },
    { day: "52", goal: "", status: "pending" },
    { day: "53", goal: "", status: "pending" },
    { day: "54", goal: "", status: "pending" },
    { day: "55", goal: "", status: "pending" },
    { day: "56", goal: "", status: "pending" },
    { day: "57", goal: "", status: "pending" },
    { day: "58", goal: "", status: "pending" },
    { day: "59", goal: "", status: "pending" },
    { day: "60", goal: "", status: "pending" },
    { day: "61", goal: "", status: "pending" },
    { day: "62", goal: "", status: "pending" },
    { day: "63", goal: "", status: "pending" },
    { day: "64", goal: "", status: "pending" },
    { day: "65", goal: "", status: "pending" },
    { day: "66", goal: "", status: "pending" },
    { day: "67", goal: "", status: "pending" },
    { day: "68", goal: "", status: "pending" },
    { day: "69", goal: "", status: "pending" },
    { day: "70", goal: "", status: "pending" },
    { day: "71", goal: "", status: "pending" },
    { day: "72", goal: "", status: "pending" },
    { day: "73", goal: "", status: "pending" },
    { day: "74", goal: "", status: "pending" },
    { day: "75", goal: "", status: "pending" },
    { day: "76", goal: "", status: "pending" },
    { day: "77", goal: "", status: "pending" },
    { day: "78", goal: "", status: "pending" },
    { day: "79", goal: "", status: "pending" },
    { day: "80", goal: "", status: "pending" },
    { day: "81", goal: "", status: "pending" },
    { day: "82", goal: "", status: "pending" },
    { day: "83", goal: "", status: "pending" },
    { day: "84", goal: "", status: "pending" },
    { day: "85", goal: "", status: "pending" },
    { day: "86", goal: "", status: "pending" },
    { day: "87", goal: "", status: "pending" },
    { day: "88", goal: "", status: "pending" },
    { day: "89", goal: "", status: "pending" },
    { day: "90", goal: "", status: "pending" },
    { day: "91", goal: "", status: "pending" },
    { day: "92", goal: "", status: "pending" },
    { day: "93", goal: "", status: "pending" },
    { day: "94", goal: "", status: "pending" },
    { day: "95", goal: "", status: "pending" },
    { day: "96", goal: "", status: "pending" },
    { day: "97", goal: "", status: "pending" },
    { day: "98", goal: "", status: "pending" },
    { day: "99", goal: "", status: "pending" },
    { day: "100", goal: "", status: "pending" },
  ]);

  // State to manage the visibility of pending goals
  const [showPending, setShowPending] = useState(false);

  const togglePending = () => {
    setShowPending(!showPending);
  };

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
          <span className="font-bold">Goal:</span> at least 20 min. of coding daily
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

        {/* Goals Table */}
        <div className="overflow-x-auto w-full mt-10">
          <table className="w-full table-auto text-left border-collapse border border-gray-700">
            <thead>
              <tr>
                <th className="p-3 border-b border-gray-700">Day</th>
                <th className="p-3 border-b border-gray-700">Goal</th>
                <th className="p-3 border-b border-gray-700">Status</th> {/* Added Status Column */}
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea) => {
                // Determine if the goal is complete, incomplete, or pending
                const isPending = idea.status === "pending";
                const isVisible = !isPending || showPending;

                return (
                  isVisible && (
                    <tr key={idea.day} className={isPending ? "opacity-50" : ""}>
                      <td className="p-3 border-b border-gray-700">{idea.day}</td>
                      <td className="p-3 border-b border-gray-700">{idea.goal || "No goal set"}</td>
                      <td className="p-3 border-b border-gray-700">
                        {idea.status === "complete" && "✅"}
                        {idea.status === "incomplete" && "❌"}
                        {idea.status === "pending" && "⏳"}
                      </td> {/* Displaying Status */}
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
        
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

        {/* Show More Button */}
        {ideas.some(idea => idea.status === "pending") && (
          <button onClick={togglePending} className="mt-4 px-4 py-2 bg-secondary text-text rounded">
            {showPending ? "Show Less" : "Show planned days"}
          </button>
        )}
      </main>
    </div>
  );
}
