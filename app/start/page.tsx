"use client";

import { Alien, Globe } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const vines = document.querySelectorAll(".vine");

      vines.forEach((vine) => {
        const vineElement = vine as HTMLElement;
        const vineRect = vineElement.getBoundingClientRect();
        const vineX = vineRect.left + vineRect.width / 2;
        const vineY = vineRect.top + vineRect.height / 2;

        const distanceX = mouseX - vineX;
        const distanceY = mouseY - vineY;
        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        const maxDistance = 150; // Reduced from 300
        const pushStrength = 200; // Reduced from 250

        const isEvenVine =
          vineElement.classList.contains("vine-2") ||
          vineElement.classList.contains("vine-4") ||
          vineElement.classList.contains("vine-6") ||
          vineElement.classList.contains("vine-8") ||
          vineElement.classList.contains("vine-10") ||
          vineElement.classList.contains("vine-12") ||
          vineElement.classList.contains("vine-14") ||
          vineElement.classList.contains("vine-16") ||
          vineElement.classList.contains("vine-18") ||
          vineElement.classList.contains("vine-20") ||
          vineElement.classList.contains("vine-22");

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * pushStrength;
          const moveX = (distanceX / distance) * -strength;
          const moveY = (distanceY / distance) * -strength;

          // Add extra push towards the nearest edge
          const extraPushX = vineX < window.innerWidth / 2 ? -50 : 50; // Reduced from 100

          vineElement.style.setProperty("--moveX", `${moveX + extraPushX}px`);
          vineElement.style.setProperty("--moveY", `${moveY}px`);
          vineElement.style.setProperty(
            "--rotation",
            `${(moveX / maxDistance) * 15}deg`
          );

          vineElement.style.transform = `
            translate3d(var(--moveX), var(--moveY), 0)
            ${isEvenVine ? "scaleX(-1)" : ""}
            rotate(var(--rotation))
          `;

          // More intense green hover effect
          vineElement.style.opacity = "0.9";
          vineElement.style.filter =
            "brightness(1) saturate(2) hue-rotate(-2deg)";
        } else {
          vineElement.style.removeProperty("--moveX");
          vineElement.style.removeProperty("--moveY");
          vineElement.style.removeProperty("--rotation");
          vineElement.style.transform = isEvenVine ? "scaleX(-1)" : "";
          vineElement.style.opacity = "0.5";
          vineElement.style.filter = "brightness(1) saturate(1)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      {/* Change pointer-events-none to pointer-events-auto */}
      <div className="fixed inset-0 z-0">
        <div className="vine vine-1"></div>
        <div className="vine vine-2"></div>
        <div className="vine vine-3"></div>
        <div className="vine vine-4"></div>
        <div className="vine vine-5"></div>
        <div className="vine vine-6"></div>
        <div className="vine vine-7"></div>
        <div className="vine vine-8"></div>
        <div className="vine vine-9"></div>
        <div className="vine vine-10"></div>
        <div className="vine vine-11"></div>
        <div className="vine vine-12"></div>
        <div className="vine vine-13"></div>
        <div className="vine vine-14"></div>
        <div className="vine vine-15"></div>
        <div className="vine vine-16"></div>
        <div className="vine vine-17"></div>
        <div className="vine vine-18"></div>
        <div className="vine vine-19"></div>
        <div className="vine vine-20"></div>
        <div className="vine vine-21"></div>
        <div className="vine vine-22"></div>
      </div>

      <main className="flex flex-col items-center justify-center sm:py-20 bg-[#0A1109]/90 min-h-[100vh] w-full relative z-10">
        <header className="flex w-full items-center justify-around top-5 absolute">
          <Link
            href="/pageOverview"
            className="text-lg text-[#A0A2A0] hover:scale-110 p-4"
          >
            <Globe size={32} />
          </Link>
          <h1 className="text-4xl text-center text-[#A0A2A0] font-bold">
            Level2025
          </h1>
          <Link href="/" className="text-lg text-[#A0A2A0] hover:scale-110 p-4">
            <Alien size={32} />
          </Link>
        </header>

        <main className="flex flex-col items-center justify-center min-h-[90vh] font-bold text-[#A0A2A0] text-start gap-2 w-full">
          <p>1: Computer Science Studys</p>
          <p>2: Self employment</p>
          <p>3: Open Source</p>
          <p>4: How to change the world for the better</p>
        </main>

        <div className="flex flex-col justify-center h-auto  items-center w-full mt-[5vh]"></div>

        <div id="projects" className="h-[5vh] w-[90vw] " />
        <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8 ">
            <Link
              href="/externalProjects"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">
                External Projects
              </h2>
            </Link>
            <Link
              href="https://analytics.google.com/analytics/web/?authuser=0#/p451197916/reports/intelligenthome"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">
                Website statistics
              </h2>
            </Link>
            <Link
              href="/ugGruendung"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">UG Gründung</h2>
            </Link>
            <Link
              href="/openSource"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">Open Source</h2>
            </Link>
            <Link
              href="/apiSite"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">API site</h2>
            </Link>
            <Link
              href="/gameProjects"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">
                Game Projects
              </h2>
            </Link>
            <Link
              href="/aiPowered"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#A0A2A0] font-bold ">AI powered</h2>
            </Link>
            <Link
              href="/toolsForDevelopers"
              target="_blank"
              className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[50px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
            >
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
