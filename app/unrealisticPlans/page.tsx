"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const MAIN_NAVIGATION_ITEMS = [
  { href: "/studys", title: "Studies" },
  { href: "/worldChange", title: "Change the World for the Better" },
  { href: "/start", title: "Go back" },

] as const;


const NavigationButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] 
      text-center items-center justify-center 
      bg-[#151C14] border border-[#2A3828]/30
      shadow-[0_4px_12px_rgba(15,25,12,0.5)]
      hover:shadow-[0_6px_16px_rgba(15,25,12,0.6)]
      hover:border-[#2A3828]/50
      sm:hover:bg-[#1A2310] sm:hover:scale-102 
      transition-all duration-300 p-4"
  >
    <h2 className="text-lg text-[#A0A2A0] font-bold">{children}</h2>
  </Link>
);

const ProjectButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    target="_blank"
    className="flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] 
      text-center items-center justify-center gap-2 
      bg-[#151C14] border border-[#2A3828]/30
      shadow-[0_4px_12px_rgba(15,25,12,0.5)]
      hover:shadow-[0_6px_16px_rgba(15,25,12,0.6)]
      hover:border-[#2A3828]/50
      sm:hover:bg-[#1A2310] sm:hover:scale-102 
      transition-all duration-300 p-4"
  >
    <h2 className="text-lg text-[#A0A2A0] font-bold">{children}</h2>
  </Link>
);



export default function Home() {

  

  return (
    <div className="flex w-full min-h-screen relative overflow-hidden  bg-[#0A1109]">

      <main className="flex flex-col items-center justify-center sm:py-20 bg-[#0A1109]/50 min-h-[100vh] w-full pt-[10vh]    relative z-10">
        <header className="flex w-full  items-center justify-around pt-[7vh] top-5 absolute">
        
          <h1 className="text-4xl   text-center text-[#A0A2A0] font-bold">
            Unrealistic Plans
          </h1>
      
        </header>

        <nav className="flex flex-col items-center justify-center min-h-[90vh] gap-4 w-full">
          {MAIN_NAVIGATION_ITEMS.map(({ href, title }) => (
            <NavigationButton key={href} href={href}>
              {title}
            </NavigationButton>
          ))}
        </nav>
      </main>
    </div>
  );
}
