import React from "react";

const SixMonthNovelPlan = () => {
  return (
    <div
      className="max-w-4xl mx-auto p-8 bg-cover bg-center text-[#E8D8C3] rounded-lg shadow-lg"
    >
      <h1 className="text-4xl font-serif font-bold text-center mb-8 text-[#D1BBA0] bg-opacity-70 bg-black rounded-lg p-4">
        Six Month Novel Writing Plan
      </h1>
      <div className="space-y-6">
        <div className="p-6 bg-[#4B3A3A] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-serif font-semibold border-b-2 border-[#A76D5D] pb-2">
            Month 1: Planning and Outlining
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>Define your novel's genre and target audience.</li>
            <li>Create character profiles for main characters.</li>
            <li>Outline the plot structure (beginning, middle, end).</li>
          </ul>
        </div>
        <div className="p-6 bg-[#4B3A3A] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-serif font-semibold border-b-2 border-[#A76D5D] pb-2">
            Month 2: Research
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>
              Conduct research relevant to your novel's setting and themes.
            </li>
            <li>Gather resources and references.</li>
          </ul>
        </div>
        <div className="p-6 bg-[#4B3A3A] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-serif font-semibold border-b-2 border-[#A76D5D] pb-2">
            Month 3: First Draft (Part 1)
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>Write the first 25% of your novel.</li>
            <li>Focus on getting words on the page, don't edit.</li>
          </ul>
        </div>
        <div className="p-6 bg-[#4B3A3A] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-serif font-semibold border-b-2 border-[#A76D5D] pb-2">
            Month 4: First Draft (Part 2)
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>Write the next 25% of your novel.</li>
            <li>Continue to focus on completing the draft.</li>
          </ul>
        </div>
        <div className="p-6 bg-[#4B3A3A] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-serif font-semibold border-b-2 border-[#A76D5D] pb-2">
            Month 5: Revising
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>Read through the entire draft and make notes.</li>
            <li>
              Start revising for structure, character development, and pacing.
            </li>
          </ul>
        </div>
        <div className="p-6 bg-[#4B3A3A] rounded-lg shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.1)]">
          <h2 className="text-3xl font-serif font-semibold border-b-2 border-[#A76D5D] pb-2">
            Month 6: Final Edits and Feedback
          </h2>
          <ul className="list-disc list-inside pl-5">
            <li>Make final edits and polish your manuscript.</li>
            <li>Share with beta readers for feedback.</li>
            <li>Prepare for submission or self-publishing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SixMonthNovelPlan;
