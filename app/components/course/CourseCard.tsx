import Link from 'next/link';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
  semester: number;
  isComplete?: boolean;
}

export function CourseCard({ course, semester, isComplete = true }: CourseCardProps) {
  const { name, ects, description } = course;
  const slug = name
    .toLowerCase()
    .replace(/[äöüß]/g, (char) => {
      const map: { [key: string]: string } = {
        ä: "ae",
        ö: "oe",
        ü: "ue",
        ß: "ss",
      };
      return map[char] || char;
    })
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <Link 
      href={isComplete ? `/studys/informatik/courses/${slug}` : '#'}
      className={`block border-t border-[#2A3828]/30 pt-4 first:border-0  
        hover:bg-[#1A2310] transition-colors duration-200 -mx-6 px-6 py-4 first:-mt-6 -mb-4 last:mb-[-1.5rem]
        group ${!isComplete ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-lg text-[#A0A2A0] font-bold group-hover:text-[#B0B2B0] transition-colors duration-200">
          {name}
          <span className="text-sm text-[#A0A2A0]/60 ml-2 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </h4>
        <span className="text-[#A0A2A0]/60">{ects} ECTS</span>
      </div>
      <p className="text-[#A0A2A0]/80 text-sm">{description}</p>
      {!isComplete && (
        <span className="text-[#A0A2A0]/60 text-sm mt-2 block">
          Coming soon
        </span>
      )}
    </Link>
  );
} 