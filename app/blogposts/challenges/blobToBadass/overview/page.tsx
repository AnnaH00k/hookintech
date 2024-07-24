import Image from "next/image";
import Script from "next/script";
import React from "react";

export default function Home() {
  // Example daily tasks data (for illustration)
  const dailyTasks = [
    {
      date: "Day 1",
      privateProjects: "4h adding Google Analytics to my website and seeking AdSense approval",
      study: "1.5h of math repetition for an exam in 2 weeks",
      work: "4h with Clye (bug fixing and video planning)",
      health: "Bought food to prep healthy burritos & recovering from a vaccination",
      topicOfTheWeek: "How to automate tasks to focus on what's important."
    },
    {
      date: "Day 2",
      privateProjects: "4h restructuring & refining my website to get AdSense approval",
      study: "nothing",
      work: "4h working on the LegalBFF Chatbot",
      health: "Ate the rest of the chocolate I had in the house",
      topicOfTheWeek: "How to automate tasks to focus on what's important."
    },
    // Add more daily tasks here as needed
  ];









  // Define what constitutes a "bad" entry for each type of task
  const isBad = (value: string, type: any) => {
    switch (type) {
      case 'study':
        return value.toLowerCase() === 'nothing'; // Example condition for bad study
      case 'health':
        return value.toLowerCase().includes('chocolate'); // Example condition for bad health
      // Add other conditions as needed
      default:
        return false;
    }
  };

  // Function to apply red background if the value is bad
  const getCellClass = (value: string, type: string) => (isBad(value, type) ? 'bg-[#431717] bg-opacity-30' : '');

  return (
    <div className="flex flex-col items-center min-h-[90vh] justify-center overflow-x-hidden bg-[#0A1109] pt-[7vh] w-full">
      <h1 className="text-4xl text-[#7C9838] text-start font-bold">
        {"From Blob to Badass: Overview"}
      </h1>

      <table className="text-xs sm:text-lg w-[90vw] max-w-5xl m-4 text-[#A0A2A0]">
        <thead>
          <tr>
            <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Day/Date</th>
            <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Private Projects</th>
            <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Study</th>
            <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Work</th>
            <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Health</th>
            <th className="sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]">Topic of the Week</th>
          </tr>
        </thead>
        <tbody>
          {dailyTasks.map((task, index) => (
            <React.Fragment key={index}>
              {(index === 0 || task.topicOfTheWeek !== dailyTasks[index - 1].topicOfTheWeek) && (
                <tr>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.date, 'date')}`} >
                    {task.date}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.privateProjects, 'privateProjects')}`}>
                    {task.privateProjects}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.study, 'study')}`}>
                    {task.study}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.work, 'work')}`}>
                    {task.work}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.health, 'health')}`}>
                    {task.health}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830]`} rowSpan={dailyTasks.slice(index).findIndex(t => t.topicOfTheWeek !== task.topicOfTheWeek) + 1}>
                    {task.topicOfTheWeek}
                  </td>
                </tr>
              )}
              {(index > 0 && task.topicOfTheWeek === dailyTasks[index - 1].topicOfTheWeek) && (
                <tr>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.date, 'date')}`} >
                    {task.date}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.privateProjects, 'privateProjects')}`}>
                    {task.privateProjects}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.study, 'study')}`}>
                    {task.study}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.work, 'work')}`}>
                    {task.work}
                  </td>
                  <td className={`sm:px-4 px-1 sm:py-2 py-1 border border-[#303830] ${getCellClass(task.health, 'health')}`}>
                    {task.health}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
