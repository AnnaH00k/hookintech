"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Scales,
  Heart,
  GraduationCap,
  Tree,
  Lightning,
  Carrot,
  Fish,
  Rocket,
} from "@phosphor-icons/react/dist/ssr";

interface Initiative {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
  startingPoints?: string[];
  relatedLink?: { text: string; href: string };
}

const INITIATIVES: Initiative[] = [
  {
    id: "politics",
    title: "Scientific Politics",
    description:
      "Transforming governance through evidence-based decision making and technological innovation.",
    icon: <Scales size={32} className="text-blue-500" />,
    startingPoints: [
      "Evidence-Based Policy Making",
      "Digital Democracy",
      "Transparent Governance",
      "Scientific Advisory Systems",
    ],
    relatedLink: {
      text: "Explore Hooked0nPolitics",
      href: "/hooked0npolitics",
    },
  },
  {
    id: "health",
    title: "Health & Wellbeing",
    description:
      "Advancing healthcare accessibility and promoting holistic wellness through technology.",
    icon: <Heart size={32} className="text-red-500" />,
    startingPoints: [
      "AI-Powered Healthcare",
      "Preventive Medicine",
      "Mental Health Support",
      "Universal Healthcare Access",
    ],
    relatedLink: { text: "Explore Hooked0nLife", href: "/hooked0nlife" },
  },
  {
    id: "knowledge",
    title: "Knowledge Access",
    description:
      "Making education and information freely accessible to everyone, everywhere.",
    icon: <GraduationCap size={32} className="text-purple-500" />,
    startingPoints: [
      "Open Education Resources",
      "Digital Libraries",
      "Skill-Sharing Platforms",
      "Global Learning Networks",
    ],
  },
  {
    id: "nature-living",
    title: "Natural Integration",
    description:
      "Creating sustainable living spaces that harmoniously blend with nature and promote independence.",
    icon: <Tree size={32} className="text-green-500" />,
    startingPoints: [
      "Eco-Housing Solutions",
      "Self-Sufficient Communities",
      "Urban Farming Integration",
      "Renewable Living Systems",
    ],
  },
  {
    id: "energy-revolution",
    title: "Energy Revolution",
    description:
      "Transforming global energy systems through renewable sources and innovative storage solutions.",
    icon: <Lightning size={32} className="text-yellow-500" />,
    startingPoints: [
      "Solar Infrastructure",
      "Wind Power Networks",
      "Energy Storage Tech",
      "Smart Grid Systems",
    ],
  },
  {
    id: "food-innovation",
    title: "Food Innovation",
    description:
      "Revolutionizing food production and distribution to ensure sustainable, healthy nutrition for all.",
    icon: <Carrot size={32} className="text-emerald-500" />,
    startingPoints: [
      "Vertical Farming",
      "Lab-Grown Proteins",
      "Smart Distribution",
      "Zero Waste Systems",
    ],
  },
  {
    id: "ocean-preservation",
    title: "Ocean Preservation",
    description:
      "Protecting and restoring ocean ecosystems through technology and innovation.",
    icon: <Fish size={32} className="text-blue-400" />,
    startingPoints: [
      "Plastic Cleanup Tech",
      "Marine Protection",
      "Sustainable Fishing",
      "Coral Restoration",
    ],
  },
  {
    id: "space-sustainability",
    title: "Space Sustainability",
    description:
      "Developing sustainable space exploration and utilizing space technology for Earth's benefit.",
    icon: <Rocket size={32} className="text-indigo-500" />,
    startingPoints: [
      "Debris Cleanup",
      "Green Propulsion",
      "Space Solar Power",
      "Earth Monitoring",
    ],
  },
];

export default function WorldChange() {
  return (
    <div className="min-h-screen bg-[#0A1109] text-[#A0A2A0]">
      <main className="container mx-auto px-4 py-8 relative">
        <div className="absolute top-8 left-4">
          <Link
            href="/start"
            className="inline-flex items-center px-4 py-2 rounded-lg
              bg-[#2A3828] text-[#A0A2A0]
              hover:bg-[#344332] transition-colors
              duration-300"
          >
            ← Back to Start
          </Link>
        </div>

        <header className="text-center mb-12 pt-16">
          <h1 className="text-4xl font-bold mb-4">
            Change the World for the Better
          </h1>
          <p className="text-xl opacity-80">
            Exploring ways to make a positive impact through technology and
            innovation
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {INITIATIVES.map((initiative) => (
            <div
              key={initiative.id}
              className={`
                p-6 rounded-lg
                bg-[#151C14] border border-[#2A3828]/30
                shadow-[0_4px_12px_rgba(15,25,12,0.5)]
                hover:shadow-[0_6px_16px_rgba(15,25,12,0.6)]
                hover:border-[#2A3828]/50
                transition-all duration-300
              `}
              onClick={() => {
                if (initiative.link) {
                  window.location.href = initiative.link;
                }
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                {initiative.icon}
                <h2 className="text-2xl font-semibold">{initiative.title}</h2>
              </div>

              <p className="text-[#A0A2A0]/80 mb-4">{initiative.description}</p>

              {initiative.startingPoints && (
                <div className="mt-4 p-4 bg-[#1A2310] rounded-lg">
                  <h3 className="font-semibold mb-2">Starting Points:</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {initiative.startingPoints.map((point, index) => (
                      <div
                        key={index}
                        className="p-2 bg-[#2A3828]/20 rounded text-sm hover:bg-[#2A3828]/30 transition-colors"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {initiative.relatedLink && (
                <div className="mt-4 text-center">
                  <Link
                    href={initiative.relatedLink.href}
                    className="inline-block px-4 py-2 rounded-lg
                      bg-[#2A3828]/40 text-[#A0A2A0] 
                      hover:bg-[#2A3828]/60 hover:text-white
                      transition-all duration-300"
                  >
                    {initiative.relatedLink.text} →
                  </Link>
                </div>
              )}

              {initiative.link && (
                <div className="mt-4">
                  <Link
                    href={initiative.link}
                    className="text-[#A0A2A0]/70 hover:text-[#A0A2A0] transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
