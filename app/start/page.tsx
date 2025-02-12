'use client';

import { Alien, Globe } from "@phosphor-icons/react/dist/ssr";
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
      <main className="flex flex-col items-center justify-center sm:py-20  bg-[#0A1109] min-h-[100vh] w-full">

        <header className="flex w-full items-center justify-around top-5 absolute">
          <Link  href="/pageOverview" className="text-lg text-[#A0A2A0] hover:scale-110 p-4">
            <Globe size={32} />
          </Link>
          <h1 className="text-4xl text-center text-[#A0A2A0] font-bold">
            Level2025
          </h1>
          <Link  href="/" className="text-lg text-[#A0A2A0] hover:scale-110 p-4">
            <Alien size={32} />
          </Link>

        </header>




        <main className="flex flex-col items-center justify-center min-h-[90vh] font-bold text-[#A0A2A0] text-start gap-2 w-full">
            <p>
              1: Computer Science Studys
            </p>
            <p>
              2: Self employment
            </p>
            <p>
             3: Open Source
            </p>
            <p>
              4: How to change the world for the better
            </p>



        




        </main>
          


        <div className="flex flex-col justify-center h-auto  items-center w-full mt-[5vh]">
        

        </div>

        <div id="projects" className="h-[5vh] w-[90vw] " />
        <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8 ">
          
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
            <Link  href="/ugGruendung" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  UG Gründung        
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

          
         
         
            
          </div>
        </div>

        
        
      </main>
    </div>
  );
}
