"use client";

import { BusinessIdea } from "../types";

interface IdeaCardProps {
  idea: BusinessIdea;
  onClick: () => void;
}

export function IdeaCard({ idea, onClick }: IdeaCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-[#1A2310] p-4 rounded-lg cursor-pointer hover:bg-[#2A3828] transition-colors"
    >
      <h3 className="text-xl font-bold">{idea.title}</h3>
      <p className="text-sm mb-2 line-clamp-2">{idea.description}</p>
      <p>Potential Revenue: €{idea.potentialRevenue.toLocaleString()}</p>
      <p>Time to Market: {idea.timeToMarket}</p>

      <div className="flex gap-2 mt-2 mb-2">
        {idea.links && idea.links.length > 0 && (
          <span className="text-sm text-blue-400">
            {idea.links.length} link{idea.links.length !== 1 ? "s" : ""}
          </span>
        )}
        {idea.documents && idea.documents.length > 0 && (
          <span className="text-sm text-blue-400">
            {idea.documents.length} document{idea.documents.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div
        className={`mt-2 px-2 py-1 rounded text-sm inline-block
        ${
          idea.priority === "high"
            ? "bg-red-900"
            : idea.priority === "medium"
            ? "bg-yellow-900"
            : "bg-green-900"
        }`}
      >
        {idea.priority} priority
      </div>
    </div>
  );
} 