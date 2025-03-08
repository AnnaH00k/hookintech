"use client";

import {
  ArrowLeft,
  Star,
  Buildings,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CourseCard } from "../../components/course/CourseCard";

const TOP_UNIVERSITIES = [
  {
    name: "MIT",
    ranking: "1st Worldwide (QS Ranking)",
    strengths: ["AI & Machine Learning", "Robotics", "Computer Systems"],
    uniqueCourses: ["Advanced Machine Learning", "Quantum Computing Lab"],
    website: "https://www.eecs.mit.edu/",
  },
  {
    name: "Stanford University",
    ranking: "2nd Worldwide (QS Ranking)",
    strengths: ["AI Research", "Software Engineering", "Theory of Computation"],
    uniqueCourses: ["CS + Entrepreneurship", "Advanced AI Applications"],
    website: "https://cs.stanford.edu/",
  },
  {
    name: "ETH Zürich",
    ranking: "1st in Europe (THE Ranking)",
    strengths: ["Systems Engineering", "Security", "Distributed Systems"],
    uniqueCourses: ["Advanced Systems Architecture", "Secure Computing Lab"],
    website: "https://inf.ethz.ch/",
  },
  {
    name: "TU München",
    ranking: "Top 50 Worldwide",
    strengths: ["Robotics", "AI Applications", "Software Engineering"],
    uniqueCourses: ["Practical Robotics", "Industry Collaboration Projects"],
    website: "https://www.in.tum.de/",
  },
] as const;

const SEMESTERS = [
  {
    semester: 1,
    isComplete: true,
    courses: [
      {
        name: "Einführung in die Programmierung",
        ects: 8,
        description: "Introduction to programming concepts and practices",
      },
      {
        name: "Mathematik für Informatiker I",
        ects: 8,
        description: "Essential mathematics for computer science",
      },
      {
        name: "Algorithmen und Datenstrukturen",
        ects: 8,
        description: "Fundamental algorithms and data structures",
      },
      {
        name: "Digitaltechnik",
        ects: 6,
        description: "Digital logic and computer architecture",
      },
    ],
  },
  {
    semester: 2,
    isComplete: true,
    courses: [
      {
        name: "Mathematik für Informatiker II",
        ects: 8,
        description: "Advanced mathematics for computer science",
      },
      {
        name: "Theoretische Informatik",
        ects: 6,
        description: "Theoretical computer science foundations",
      },
      {
        name: "Softwaretechnik",
        ects: 6,
        description: "Software engineering principles and practices",
      },
      {
        name: "Systemprogrammierung",
        ects: 6,
        description: "Systems programming and low-level development",
      },
    ],
  },
  {
    semester: 3,
    isComplete: true,
    courses: [
      {
        name: "Datenbanksysteme",
        ects: 6,
        description: "Database design, SQL, and data management systems",
      },
      {
        name: "Computer Networks",
        ects: 6,
        description: "Network protocols, architecture, and security",
      },
      {
        name: "Machine Learning Foundations",
        ects: 8,
        description: "Basic concepts of ML, neural networks, and data analysis",
      },
      {
        name: "Software Project Lab",
        ects: 8,
        description: "Team-based software development project",
      },
    ],
  },
  {
    semester: 4,
    isComplete: false,
    courses: [
      {
        name: "Artificial Intelligence",
        ects: 6,
        description:
          "AI principles, search algorithms, and knowledge representation",
      },
      {
        name: "Computer Graphics",
        ects: 6,
        description: "3D graphics, rendering, and visualization",
      },
      {
        name: "Operating Systems",
        ects: 8,
        description: "OS design, processes, memory management",
      },
      {
        name: "Web Development",
        ects: 8,
        description: "Modern web technologies and frameworks",
      },
    ],
  },
  {
    semester: 5,
    isComplete: false,
    courses: [
      {
        name: "Distributed Systems",
        ects: 6,
        description: "Distributed computing and system design",
      },
      {
        name: "Information Security",
        ects: 6,
        description: "Security principles and cryptography",
      },
      {
        name: "Cloud Computing",
        ects: 8,
        description: "Cloud architectures and services",
      },
      {
        name: "Software Testing",
        ects: 8,
        description: "Testing methodologies and quality assurance",
      },
    ],
  },
  {
    semester: 6,
    isComplete: false,
    courses: [
      {
        name: "Bachelor Thesis",
        ects: 12,
        description: "Independent research project",
      },
      {
        name: "Ethics in Computing",
        ects: 6,
        description: "Ethical considerations in technology",
      },
      {
        name: "Advanced Algorithms",
        ects: 6,
        description: "Complex algorithmic problems and solutions",
      },
      {
        name: "Technical Communication",
        ects: 6,
        description: "Professional communication skills",
      },
    ],
  },
];

type CourseType = {
  name: string;
  ects: number;
  description: string;
};

const UniversityCard = ({
  uni,
}: {
  uni: {
    name: string;
    ranking: string;
    strengths: readonly string[];
    uniqueCourses: readonly string[];
    website: string;
  };
}) => (
  <div className="bg-[#151C14] border border-[#2A3828]/30 rounded-lg p-6 mb-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <Buildings size={24} className="text-[#A0A2A0]" />
        <h3 className="text-xl text-[#A0A2A0] font-bold">{uni.name}</h3>
      </div>
      <Link
        href={uni.website}
        target="_blank"
        className="text-sm text-[#A0A2A0]/80 hover:text-[#A0A2A0] transition-colors duration-200 underline"
      >
        Visit Website →
      </Link>
    </div>
    <p className="text-[#A0A2A0]/80 mb-3">{uni.ranking}</p>
    <div className="mb-3">
      <p className="text-sm text-[#A0A2A0]/60 mb-2">Core Strengths:</p>
      <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
        {uni.strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
    </div>
    <div>
      <p className="text-sm text-[#A0A2A0]/60 mb-2">Unique Offerings:</p>
      <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
        {uni.uniqueCourses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </div>
  </div>
);



const SemesterBlock = ({
  semester,
}: {
  semester: {
    semester: number;
    isComplete: boolean;
    courses: readonly {
      name: string;
      ects: number;
      description: string;
    }[];
  };
}) => (
  <div className="bg-[#151C14] border border-[#2A3828]/30 rounded-lg p-6 mb-6 overflow-hidden">
    <div className="flex items-center gap-3 pb-4 mb-6">
      <Brain size={24} className="text-[#A0A2A0]" />
      <h3 className="text-xl text-[#A0A2A0] font-bold">
        Semester {semester.semester}
        {!semester.isComplete && (
          <span className="ml-2 text-gray-500 text-sm">(Coming soon)</span>
        )}
      </h3>
    </div>
    <div className="space-y-4 ">
      {semester.courses.map((course) => (
        <CourseCard
          key={course.name}
          course={course}
          semester={semester.semester}
          isComplete={semester.isComplete}
        />
      ))}
    </div>
  </div>
);

export default function InformatikPage() {
  return (
    <div className="w-full relative overflow-hidden">
      <main className="flex flex-col items-center justify-start min-h-screen bg-[#0A1109]/90 py-8 px-4">
        <header className="w-full max-w-7xl flex items-center justify-between mb-12">
          <Link
            href="/studys"
            className="text-lg text-[#A0A2A0] hover:scale-110 transition-transform p-4 flex items-center gap-2"
          >
            <ArrowLeft size={24} />
            <span>Back to Studies</span>
          </Link>
          <h1 className="text-4xl text-center text-[#A0A2A0] font-bold">
            Informatik (B.Sc.)
          </h1>
          <div className="w-[88px]" />
        </header>

        <div className="w-full max-w-6xl">
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Star size={24} className="text-[#A0A2A0]" />
              <h2 className="text-2xl text-[#A0A2A0] font-bold">
                Top Universities Analysis
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {TOP_UNIVERSITIES.map((uni) => (
                <UniversityCard key={uni.name} uni={uni} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Star size={24} className="text-[#A0A2A0]" />
              <h2 className="text-2xl text-[#A0A2A0] font-bold">
                Ultimate Curriculum
              </h2>
            </div>
            <p className="text-[#A0A2A0]/80 mb-8">
              This curriculum combines the strongest elements from the worlds
              top Computer Science programs, creating an optimal learning path
              for future innovators.
            </p>
            {SEMESTERS.map((semester) => (
              <SemesterBlock key={semester.semester} semester={semester} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
