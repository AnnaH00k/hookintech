"use client";

import { useState } from "react";
import { BusinessIdea } from "../types";

interface IdeaFormProps {
  onSubmit: (idea: BusinessIdea) => void;
}

export function IdeaForm({ onSubmit }: IdeaFormProps) {
  const [newIdea, setNewIdea] = useState<Partial<BusinessIdea>>({
    priority: "medium",
  });
 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIdea.title || !newIdea.description) return;

    const idea: BusinessIdea = {
      id: Date.now().toString(),
      title: newIdea.title || "",
      description: newIdea.description || "",
      potentialRevenue: newIdea.potentialRevenue || 0,
      timeToMarket: newIdea.timeToMarket || "",
      priority: newIdea.priority || "medium",
  
    };

    onSubmit(idea);
  };



  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-[#1A2310] p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={newIdea.title || ""}
            onChange={(e) =>
              setNewIdea((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Potential Revenue (€)</label>
          <input
            type="number"
            value={newIdea.potentialRevenue || ""}
            onChange={(e) =>
              setNewIdea((prev) => ({
                ...prev,
                potentialRevenue: parseFloat(e.target.value),
              }))
            }
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-2">Description</label>
          <textarea
            value={newIdea.description || ""}
            onChange={(e) =>
              setNewIdea((prev) => ({ ...prev, description: e.target.value }))
            }
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0] h-24"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Time to Market</label>
          <input
            type="text"
            value={newIdea.timeToMarket || ""}
            onChange={(e) =>
              setNewIdea((prev) => ({ ...prev, timeToMarket: e.target.value }))
            }
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
            placeholder="e.g., 3 months"
          />
        </div>
        <div>
          <label className="block mb-2">Priority</label>
          <select
            value={newIdea.priority || "medium"}
            onChange={(e) =>
              setNewIdea((prev) => ({
                ...prev,
                priority: e.target.value as "high" | "medium" | "low",
              }))
            }
            className="w-full p-2 rounded bg-[#2A3828] text-[#A0A2A0]"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>

   
      <button
        type="submit"
        className="bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838] w-full"
      >
        Add Idea
      </button>
    </form>
  );
}
