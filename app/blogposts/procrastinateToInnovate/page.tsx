"use client"; // This ensures the component is rendered client-side

import { useState } from "react";
import MenuHeader from "../../components/headers/menuHeader";
import Footer from "../../components/footer";
import Script from "next/script";

export default function Home() {
  // State to control whether to show the PDF or the main content
  const [showPDF, setShowPDF] = useState(false);

  return (
    <>

      {/* Main Content */}
      <main className="flex flex-col items-center text-text justify-center sm:min-h-screen min-h-[85vh] sm:pt-[8vh] bg-[#0A1109] w-full text-center px-4">
        {/* Conditional Rendering */}
        {!showPDF ? (
          // Main Content Section
          <div className="flex flex-col items-center justify-center h-full max-w-3xl p-4">
            {/* Book Title and Subtitle */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">Procrastinate to Innovate</h1>
            <h2 className="text-xl sm:text-2xl  mb-4">Turning Time Wasting into Winning Strategies</h2>
             {/* Book Teaser */}
             <p className="text-sm sm:block sm:text-lg mb-4">
              {"In this book Chat GPT and I dive into the often-misunderstood concept of procrastination, presenting it as a potential asset rather than merely a bad habit. Introducing the idea of productive procrastination, where taking a step back from a task can lead to engaging in other activities that indirectly contribute to solving problems and generating new ideas. The book provides practical guidance on learning how to harness procrastination as a driving force for innovation and success."}
            </p>

            {/* Download Button */}
            <a
              href="/pdfs/ProcrastinateToInnovate.pdf"
              download
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Download Free PDF
            </a>

            {/* Read Online Button */}
            <button
              onClick={() => setShowPDF(true)}
              className="bg-green-500 mt-4 hover:bg-green-700 sm:block hidden text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Read Online
            </button>

           
          </div>
        ) : (
          // PDF Viewer Section
          <div className="flex justify-center items-center h-full w-full p-4">
            <iframe
              src="/pdfs/ProcrastinateToInnovate.pdf#page=4"
              width="80%"
              height="600"
              className="border-2 border-background shadow-lg h-[90vh] rounded"
              title="Procrastinate to Innovate PDF Reader"
            />
            <button
              onClick={() => setShowPDF(false)}
              className="absolute top-8 right-8 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </main>
    </>
  );
}
