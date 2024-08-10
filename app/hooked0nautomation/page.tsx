import { BatteryCharging, CheckSquare, LinkSimple, Robot, ShieldChevron, Timer } from "@phosphor-icons/react";
import Link from "next/link";

export default function HookedOnAutomation() {
  return (
    <div className="flex flex-col items-center py-20 justify-center min-h-screen bg-[#0A1109] text-[#A0A2A0]">
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold text-white">Hooked on Automation</h1>
        <p className="mt-4 text-lg">The Lazy Person’s Guide to Success.</p>
        <div className="mt-6">
          <button className="m-2 px-4 py-2 bg-[#303830] rounded">Subscribe to Newsletter</button>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-4 px-5 max-w-5xl">
      <div className="shadow-neumorphic-hooked0ntech-box justify-self-end flex flex-col rounded-lg min-h-[150px] text-start items-center justify-center  bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
          <h2 className="text-3xl font-semibold text-white">Video Processing</h2>
          <p className="mt-4">Enhance your video editing with customizable overlays, speed adjustments, and brightness control.</p>
          <ul className="mt-4 space-y-1 list-disc pl-5">
            <li>Choosing different fonts for the video overlay.</li>
            <li>Choosing the time to speed it up to.</li>
            <li>Fine-tune brightness to match your visual style.</li>
          </ul>
        </div>
        <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg min-h-[150px] text-start items-center justify-center  bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
          <h2 className="text-3xl font-semibold text-white">ChatGPT Integration</h2>
          <p className="mt-4">Leverage AI to enhance your productivity.</p>
          <ul className="mt-6 space-y-2 list-disc pl-5">
            <li>Chat directly on the page with AI.</li>
            <li>Generate relevant emojis and hooks for your posts.</li>
            <li>Automate to-do creation and management.</li>
          </ul>
        </div>
        <div className="col-span-2  shadow-neumorphic-hooked0ntech-box   justify-self-center flex flex-col rounded-lg min-h-[150px] text-start items-center justify-center  bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
          <h2 className="text-3xl font-semibold text-white">Text Generation for Posts</h2>
          <p className="mt-4">Create structured posts effortlessly with our dynamic text generation tool.</p>
          <ul className="mt-6 space-y-2 list-disc pl-5">
            <li>Adding a text structure displaying tasks.</li>
            <li>Table to input tasks and view them.</li>
            <li>Add a list of random emojis that can be called in the text structure.</li>
            <li>Add a list of hooks for different circumstances to be called in the text structure.</li>
            <li>Simple copying to clipboard of the text structure, and a different copy option copying only the first line of the text structure.</li>
          </ul>
        </div>

        <div className="col-span-2 shadow-neumorphic-hooked0ntech-box flex flex-col justify-self-center rounded-lg min-h-[150px] text-start items-center justify-center  bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
          <h2 className="text-3xl font-semibold text-white">Process Definition</h2>
          <p className="mt-4">Streamline your processes with powerful tools for task management and time tracking.</p>
          <ul className="mt-6 space-y-2 list-disc pl-5">
            <li>Name process.</li>
            <li>Add under processes.</li>
            <li>Define which links belong to each process and underprocess.</li>
            <li>Open links with one click. Each underprocess can have multiple amounts of windows that are opened, to display content in a ready-to-work state.</li>
            <li>Track time once the process/underprocess is started.</li>
            <li>A small window with an active process stopwatch being shown.</li>
            <li>Give a time tracking overview of the elapsed process time.</li>
            <li>Allow to define tasks/to-dos for each process.</li>
            <li>Allow the addition of deadlines.</li>
            <li>Show a countdown of how long until the deadline is reached for the task or process.</li>
            <li>Allow making time predictions and mark red when the time predictions exceed the deadline. Take into account 8h of sleep per night and mark it as orange when getting deprived of sleep.</li>
            <li>Allow adding different process types: Study process, exam process, work process, and any other processes that could be important.</li>
          </ul>
        </div>

       
      </div>
    </div>
  );
}
