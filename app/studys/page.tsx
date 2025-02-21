"use client";

import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const STUDY_PROGRAMS = [
  {
    title: "Informatik",
    impact: "Foundation for digital innovation and automation",
    universities: ["TU Berlin", "RWTH Aachen", "TU München"],
  },
  {
    title: "Physik (B.Sc.)",
    impact: "Fundamental research and energy solutions",
    universities: ["TU München", "RWTH Aachen", "KIT"],
  },
  {
    title: "Biotechnologie (B.Sc.)",
    impact: "Biological solutions for global challenges",
    universities: ["TU München", "Uni Hohenheim", "RWTH Aachen"],
  },
  {
    title: "Astronomie/Astrophysik (B.Sc.)",
    impact: "Space exploration and universal understanding",
    universities: ["Uni Heidelberg", "LMU München", "Uni Bonn"],
  },
  {
    title: "Medizinische Informatik (M.Sc.)",
    impact: "Digital healthcare solutions",
    universities: ["Uni Heidelberg", "TU Braunschweig", "Uni Lübeck"],
  },
  {
    title: "Umweltwissenschaften (B.Sc.)",
    impact: "Environmental protection and sustainability",
    universities: ["Uni Freiburg", "Uni Göttingen", "TU Dresden"],
  },
  {
    title: "Artificial Intelligence (M.Sc.)",
    impact: "Advanced AI solutions for societal challenges",
    universities: ["KIT", "TU Berlin", "Uni Freiburg"],
  },
  {
    title: "Biologie (B.Sc.)",
    impact: "Understanding life systems and medical foundations",
    universities: ["Uni Heidelberg", "LMU München", "Uni Freiburg"],
  },
  {
    title: "Quantentechnologie (M.Sc.)",
    impact: "Next-generation computing and sensing",
    universities: ["TU München", "RWTH Aachen", "Uni Stuttgart"],
  },
  {
    title: "Medizin (Staatsexamen)",
    impact: "Direct healthcare and medical innovation",
    universities: ["Charité Berlin", "LMU München", "Uni Heidelberg"],
  },
  {
    title: "Neurowissenschaften (M.Sc.)",
    impact: "Understanding brain function and consciousness",
    universities: ["Charité Berlin", "Uni Tübingen", "LMU München"],
  },
] as const;

// Update the prop type to accept readonly arrays
type StudyCardProps = {
  title: string;
  impact: string;
  universities: readonly string[]; // Changed from string[]
  index: number;
};

const RoadmapNode = ({
  title,
  impact,
  universities,
  index,
}: StudyCardProps) => {
  // Create URL-friendly slug from title
  const slug = title
    .toLowerCase()
    .replace(/[()]/g, "") // Remove parentheses
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[äöüß]/g, (char) => {
      // Handle German characters
      const map: { [key: string]: string } = {
        ä: "ae",
        ö: "oe",
        ü: "ue",
        ß: "ss",
      };
      return map[char] || char;
    });

  return (
    <div
      className={`relative flex ${
        index % 2 === 0 ? "justify-end pr-8" : "justify-start pl-8"
      } w-1/2 ml-auto ${index % 2 === 0 ? "mr-[50%]" : "ml-[50%]"}`}
    >
      <div
        className={`absolute top-1/2 w-8 h-[2px] bg-[#2A3828] 
        ${index % 2 === 0 ? "right-0" : "left-0"}`}
      />
      <Link
        href={`/studys/${slug}`}
        className="w-[400px] bg-[#151C14] border border-[#2A3828]/30 rounded-lg p-6
          shadow-[0_4px_12px_rgba(15,25,12,0.5)]
          hover:shadow-[0_6px_16px_rgba(15,25,12,0.6)]
          hover:border-[#2A3828]/50
          hover:scale-102 
          transition-all duration-300
          relative
          group"
      >
        <div
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 
          bg-[#2A3828] rounded-full border-4 border-[#151C14]
          group-hover:bg-[#3A4838] transition-colors duration-300"
        />
        <h3 className="text-xl text-[#A0A2A0] font-bold group-hover:text-[#B0B2B0] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#A0A2A0]/80 mt-3 group-hover:text-[#A0A2A0] transition-colors duration-300">
          {impact}
        </p>
        <div className="mt-4 pt-3 border-t border-[#2A3828]/30">
          <p className="text-xs text-[#A0A2A0]/60">Top Universities:</p>
          <p className="text-sm text-[#A0A2A0]/80">
            {universities.join(" • ")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default function Studies() {
  return (
    <div className="w-full relative overflow-hidden">
      <main className="flex flex-col items-center justify-start min-h-screen bg-[#0A1109]/90 py-8 px-4">
        <header className="w-full max-w-7xl flex items-center justify-between mb-12">
          <Link
            href="/start"
            className="text-lg text-[#A0A2A0] hover:scale-110 transition-transform p-4 flex items-center gap-2"
          >
            <ArrowLeft size={24} />
            <span>Back</span>
          </Link>
          <div className="text-center">
            <h1 className="text-4xl text-[#A0A2A0] font-bold mb-2">
              Path to Innovation
            </h1>
            <p className="text-[#A0A2A0]/80 max-w-xl">
              Interdisciplinary Studies for Global Impact
            </p>
          </div>
          <div className="w-[88px]" />
        </header>

        <div className="w-full max-w-7xl relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#2A3828]" />
          <div className="relative py-8">
            {STUDY_PROGRAMS.map((program, index) => (
              <div key={program.title} className="mb-16">
                <RoadmapNode
                  title={program.title}
                  impact={program.impact}
                  universities={program.universities}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="w-full max-w-2xl text-center mt-12 mb-8">
          <p className="text-[#A0A2A0]/80 italic">
            Every field of study contributes to human knowledge and progress.
            The most innovative solutions often emerge at the intersection of
            different disciplines.
          </p>
        </footer>
      </main>
    </div>
  );
}
