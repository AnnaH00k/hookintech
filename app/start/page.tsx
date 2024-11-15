'use client';

import Link from "next/link";

export default function Home() {
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
            
         
         
            
          </div>
        </div>

        
        
      </main>
    </div>
  );
}
