"use client";

import { Alien, Globe } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useState, useEffect } from "react";

const MAIN_NAVIGATION_ITEMS = [
  { href: "/selfEmployment", title: "Self Employment" },
  { href: "/openSource", title: "Open Source" },
  { href: "/externalProjects", title: "External Projects" },

  {
    href: "https://analytics.google.com/analytics/web/?authuser=0#/p451197916/reports/intelligenthome",
    title: "Website Statistics",
  },
  { href: "/unrealisticPlans", title: "Unrealistic Plans" },

] as const;

const VINE_COUNT = 22;

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

const VineBackground = () => (
  <div className="fixed inset-0 z-0">
    {[...Array(VINE_COUNT)].map((_, i) => (
      <div key={i + 1} className={`vine vine-${i + 1}`} />
    ))}
  </div>
);

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

        const maxDistance = 150;
        const pushStrength = 200;

        const isEvenVine =
          Number(vineElement.className.split("-")[1]) % 2 === 0;

        if (distance < maxDistance) {
          const strength = (1 - distance / maxDistance) * pushStrength;
          const moveX = (distanceX / distance) * -strength;
          const moveY = (distanceY / distance) * -strength;
          const extraPushX = vineX < window.innerWidth / 2 ? -50 : 50;

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
          vineElement.style.opacity = "0.9";
          vineElement.style.filter = "brightness(1.2)";
        } else {
          vineElement.style.removeProperty("--moveX");
          vineElement.style.removeProperty("--moveY");
          vineElement.style.removeProperty("--rotation");
          vineElement.style.transform = isEvenVine ? "scaleX(-1)" : "";
          vineElement.style.opacity = "0.5";
          vineElement.style.filter = "brightness(1)";
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex w-full min-h-screen relative overflow-hidden  bg-[#0A1109]">
      <VineBackground />

      <main className="flex flex-col items-center justify-center sm:py-20 bg-[#0A1109]/50 min-h-[100vh] w-full pt-[10vh]    relative z-10">
        <header className="flex w-full  items-center justify-around pt-[7vh] top-5 absolute">
          <Link
            href="/pageOverview"
            className="text-lg text-[#A0A2A0] bg-background rounded-full hover:scale-110 p-4"
          >
            <Globe size={32} />
          </Link>
          <h1 className="text-4xl   text-center text-[#A0A2A0] font-bold">
            2025
          </h1>
          <Link href="/portfolio" className="text-lg bg-background rounded-full text-[#A0A2A0] hover:scale-110 p-4">
            <Alien size={32} />
          </Link>
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
