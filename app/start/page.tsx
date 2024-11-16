'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {

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
    <div className="w-full ">
      <main className="flex flex-col items-center justify-center sm:py-20 pb-[10vh]  bg-[#0A1109] min-h-[90vh] w-full">
        <div className="flex flex-col justify-center h-auto  items-center w-full mt-[5vh]">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            Hooked0ntech
          </h1>
          <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-thin">
            Welcome to my Dashboard
          </h2>

        </div>

        <div id="projects" className="h-[5vh] w-[90vw] " />
        <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8 ">
            <Link  href="/pageOverview" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    All Pages              
                </h2>
            </Link>
            <Link  href="/externalProjects" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    External Projects                
                </h2>
            </Link>
            <Link  href="https://analytics.google.com/analytics/web/?authuser=0#/p451197916/reports/intelligenthome" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    Website statistics                
                </h2>
            </Link>
            <Link  href="/openSource" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    Open Source                
                </h2>
            </Link>
            <Link  href="/apiSite" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    API site               
                </h2>
            </Link>
            <Link  href="/gameProjects" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  Game Projects          
                </h2>
            </Link>
            <Link  href="/aiPowered" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  AI powered          
                </h2>
            </Link>
            <Link  href="/toolsForDevelopers" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  Tools for developers          
                </h2>
            </Link>

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
          
        
        </div>
         
         
            
          </div>
        </div>

        
        
      </main>
    </div>
  );
}
