import { ArrowLeft, Book, Clock } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type CourseLayoutProps = {
  title: string;
  ects: number;
  semester: number;
  children: React.ReactNode;
};

export const CourseLayout = ({ title, ects, semester, children }: CourseLayoutProps) => (
  <div className="w-full relative overflow-hidden">
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#0A1109]/90 py-8 px-4">
      <header className="w-full max-w-7xl flex items-center justify-between mb-12">
        <Link
          href="/studys/informatik"
          className="text-lg text-[#A0A2A0] hover:scale-110 transition-transform p-4 flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft size={24} />
          <span>Back to Informatik</span>
        </Link>
        <h1 className="text-4xl text-center text-[#A0A2A0] font-bold">
          {title}
        </h1>
        <div className="w-[88px]" />
      </header>

      <div className="w-full max-w-4xl">
        <div className="flex gap-6 mb-8">
          <div className="flex items-center gap-2 text-[#A0A2A0]/80">
            <Clock size={20} />
            <span>{ects} ECTS</span>
          </div>
          <div className="flex items-center gap-2 text-[#A0A2A0]/80">
            <Book size={20} />
            <span>Semester {semester}</span>
          </div>
        </div>
        {children}
      </div>
    </main>
  </div>
); 