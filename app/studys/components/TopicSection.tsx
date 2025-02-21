import { Function } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CourseTopic } from "../types/course";

export const TopicSection = ({ topic }: { topic: CourseTopic }) => (
  <section className="bg-[#151C14] border border-[#2A3828]/30 rounded-lg p-8 mb-8 cursor-default">
    <div className="flex items-center gap-3 mb-6">
      <Function size={24} className="text-[#A0A2A0]" />
      <h2 className="text-2xl text-[#A0A2A0] font-bold">{topic.title}</h2>
    </div>

    <div className="space-y-8 cursor-default">
      {/* Overview */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">Overview</h3>
        <p className="text-[#A0A2A0]/80">{topic.description}</p>
      </div>

      {/* Learning Objectives */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">
          Learning Objectives
        </h3>
        <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
          {topic.learningObjectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-3">
          Learning Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {topic.resources.map((resource) => (
            <Link
              key={resource.url}
              href={resource.url}
              target="_blank"
              className="block p-4 border border-[#2A3828]/30 rounded-lg hover:bg-[#1A2310] transition-colors duration-200 cursor-pointer"
            >
              <h4 className="text-[#A0A2A0] font-bold text-sm">
                {resource.title}
              </h4>
              <p className="text-[#A0A2A0]/80 text-xs mt-1">
                {resource.description}
              </p>
              <p className="text-[#A0A2A0]/60 text-xs mt-1">
                {resource.platform}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-3">
          Practical Applications
        </h3>
        <div className="space-y-4">
          {topic.practicalApplications.map((app) => (
            <div
              key={app.field}
              className="border-t border-[#2A3828]/30 pt-3 first:border-0 first:pt-0"
            >
              <h4 className="text-[#A0A2A0] font-bold">{app.field}</h4>
              <p className="text-[#A0A2A0]/80 text-sm mt-1">
                {app.description}
              </p>
              <p className="text-[#A0A2A0]/60 text-sm mt-1 italic">
                Example: {app.example}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Problems */}
      <div>
        <h3 className="text-lg text-[#A0A2A0] font-bold mb-2">
          Practice Problems
        </h3>
        <ul className="list-disc list-inside text-[#A0A2A0]/80 space-y-1">
          {topic.problems.map((problem) => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
