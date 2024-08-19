"use client";
import { useState } from 'react';
import { BatteryCharging, CheckSquare, LinkSimple, Robot, ShieldChevron, Timer } from "@phosphor-icons/react";
import Link from "next/link";

interface GeneratedText {
  instagram: string;
  youtube: string;
}

export default function TextGeneration() {
  const [categories, setCategories] = useState<string[]>([]);
  const [newCategory, setNewCategory] = useState<string>('');
  const [tasks, setTasks] = useState<{ [key: string]: string }>({});
  const [generatedText, setGeneratedText] = useState<GeneratedText | null>(null);

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleTaskInput = (category: string, task: string) => {
    setTasks({ ...tasks, [category]: task });
  };

  const generateText = () => {
    const instagramText = categories
      .map(category => tasks[category] ? `${category}: ${tasks[category]}` : '')
      .filter(Boolean)
      .join('\n');
    const youtubeText = instagramText.split('\n')[0] || '';
    setGeneratedText({ instagram: instagramText, youtube: youtubeText });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="flex flex-col items-center py-20 justify-center min-h-screen bg-[#0A1109] text-[#A0A2A0]">
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold text-white">Text Generation for Posts</h1>
        <p className="mt-4 text-lg">Create structured posts effortlessly with a dynamic text generation tool.</p>
      </header>

      <div className="w-full max-w-md">
        <div className="mb-6">
          <label htmlFor="newCategory" className="block text-sm font-medium text-white">New Category</label>
          <input
            id="newCategory"
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="w-full p-2 rounded-md bg-[#141a14] text-white"
            placeholder="Enter a new category"
          />
          <button
            onClick={handleAddCategory}
            className="mt-2 w-full py-2 bg-[#1e281e] rounded-md text-white"
          >
            Add Category
          </button>
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`task-${index}`} className="block text-sm font-medium text-white">{category}</label>
            <input
              id={`task-${index}`}
              type="text"
              className="w-full p-2 rounded-md bg-[#141a14] text-white"
              placeholder={`Enter task for ${category}`}
              onChange={(e) => handleTaskInput(category, e.target.value)}
            />
          </div>
        ))}

        <button
          onClick={generateText}
          className="mt-4 w-full py-2 bg-[#1e281e] rounded-md text-white"
        >
          Generate Text
        </button>

        {generatedText && (
          <div className="mt-6">
            <div className="mb-4">
              <h3 className="font-semibold">Instagram Post:</h3>
              <label htmlFor="instagramText" className="sr-only">Generated Instagram Text</label>
              <textarea
                id="instagramText"
                readOnly
                className="w-full p-2 rounded-md bg-[#141a14] text-white"
                value={generatedText.instagram}
              />
              <button
                onClick={() => copyToClipboard(generatedText.instagram)}
                className="mt-2 py-2 w-full bg-[#1e281e] rounded-md text-white"
              >
                Copy Instagram Text
              </button>
            </div>

            <div>
              <h3 className="font-semibold">YouTube Post:</h3>
              <label htmlFor="youtubeText" className="sr-only">Generated YouTube Text</label>
              <textarea
                id="youtubeText"
                readOnly
                className="w-full p-2 rounded-md bg-[#141a14] text-white"
                value={generatedText.youtube}
              />
              <button
                onClick={() => copyToClipboard(generatedText.youtube)}
                className="mt-2 py-2 w-full bg-[#1e281e] rounded-md text-white"
              >
                Copy YouTube Text
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
