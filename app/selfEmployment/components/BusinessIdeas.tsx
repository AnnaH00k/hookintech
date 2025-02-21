"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BusinessIdea } from "../types";
import { IdeaForm } from "./IdeaForm";
import { IdeaCard } from "./IdeaCard";

interface BusinessIdeasProps {
  ideas: BusinessIdea[];
  onAddIdea: (idea: BusinessIdea) => void;
}

export function BusinessIdeas({ ideas, onAddIdea }: BusinessIdeasProps) {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleIdeaClick = (idea: BusinessIdea) => {
    if (idea.links?.length && idea.links[0].startsWith("/")) {
      router.push(idea.links[0]);
    } else {
      router.push(`/selfEmployment/ideas/${idea.id}`);
    }
  };

  return (
    <section className="mb-12 bg-[#151C14] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Business Ideas</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838]"
        >
          {showForm ? "Cancel" : "Add New Idea"}
        </button>
      </div>

      {showForm && (
        <IdeaForm 
          onSubmit={(idea) => {
            onAddIdea(idea);
            setShowForm(false);
          }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ideas.map((idea) => (
          <IdeaCard 
            key={idea.id}
            idea={idea}
            onClick={() => handleIdeaClick(idea)}
          />
        ))}
      </div>
    </section>
  );
} 