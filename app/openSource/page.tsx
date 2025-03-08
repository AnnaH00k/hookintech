'use client';

import Link from "next/link";

export default function Home() {

  return (
    <div className="w-full ">
      <main className="flex flex-col items-center justify-center sm:py-20 pb-[10vh]  bg-[#0A1109] min-h-[100vh] w-full">
        <div className="flex flex-col justify-center h-auto  items-center w-full mt-[5vh]">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            Open Source
          </h1>
          <p className="text-text ">Here are all open source projects with things I wished I had for free.</p>
          <div className="gap-2 flex flex-col mt-6">
            <Link  href="/" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                  <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    Nice to have icons          
                  </h2>
              </Link>

              <Link  href="/" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                  <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    Stockphotos I wish I had         
                  </h2>
              </Link>

              <Link  href="/" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
                  <h2 className="text-lg text-[#A0A2A0] font-bold ">
                    {"Button designs to copy (Tailwind)"}        
                  </h2>
              </Link>
          </div>


        </div>
      </main>
    </div>
  );
}
