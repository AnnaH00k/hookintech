"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Pencil, FloppyDisk } from "@phosphor-icons/react";

interface BusinessIdea {
  id: string;
  title: string;
  description: string;
  potentialRevenue: number;
  timeToMarket: string;
  priority: "high" | "medium" | "low";
  documentation?: string;
}

export default function IdeaPage() {
  const params = useParams();
  const router = useRouter();
  const [idea, setIdea] = useState<BusinessIdea | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [documentation, setDocumentation] = useState("");

  useEffect(() => {
    // Load idea from localStorage or API
    const savedIdeas = JSON.parse(
      localStorage.getItem("businessIdeas") || "[]"
    );
    const currentIdea = savedIdeas.find(
      (i: BusinessIdea) => i.id === params.id
    );
    if (currentIdea) {
      setIdea(currentIdea);
      setDocumentation(currentIdea.documentation || "");
    }
  }, [params.id]);

  const handleSave = () => {
    if (!idea) return;

    const updatedIdea = { ...idea, documentation };
    const savedIdeas = JSON.parse(
      localStorage.getItem("businessIdeas") || "[]"
    );
    const updatedIdeas = savedIdeas.map((i: BusinessIdea) =>
      i.id === idea.id ? updatedIdea : i
    );

    localStorage.setItem("businessIdeas", JSON.stringify(updatedIdeas));
    setIsEditing(false);
  };

  if (!idea) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0A1109] text-[#A0A2A0] p-8">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-[#A0A2A0] mb-8 hover:text-white"
      >
        <ArrowLeft size={24} /> Back
      </button>

      <div className="bg-[#151C14] p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">{idea.title}</h1>
          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            className="flex items-center gap-2 bg-[#2A3828] px-4 py-2 rounded hover:bg-[#3A4838]"
          >
            {isEditing ? (
              <>
                <FloppyDisk size={20} /> Save
              </>
            ) : (
              <>
                <Pencil size={20} /> Edit
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-bold mb-2">Potential Revenue</h3>
            <p>€{idea.potentialRevenue}</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Time to Market</h3>
            <p>{idea.timeToMarket}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-bold mb-2">Description</h3>
            <p>{idea.description}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Documentation</h2>
          {isEditing ? (
            <textarea
              value={documentation}
              onChange={(e) => setDocumentation(e.target.value)}
              className="w-full h-96 p-4 rounded bg-[#2A3828] text-[#A0A2A0]"
              placeholder="Document your idea here..."
            />
          ) : (
            <div className="prose prose-invert max-w-none">
              {documentation ? (
                <div className="whitespace-pre-wrap">{documentation}</div>
              ) : (
                <p className="text-gray-500">No documentation yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
