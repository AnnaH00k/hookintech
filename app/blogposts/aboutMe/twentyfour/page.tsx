import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex items-center min-h-[88vh] justify-center overflow-x-hidden bg-[#0A1109] w-full">
      <main className="flex gap-6 mt-[10vh] flex-col items-start max-w-3xl w-[90vw] justify-start pb-[10vh]">
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-text">Reflecting on 23 & Looking Forward to 24</h1>
        
        <div className="flex flex-wrap gap-8 w-full">
          {/* Achievements Section */}
          <section className="">
            <div className="mt-4 flex  gap-4">
            <div className="flex flex-col">
              <h3 className="text-2xl text-[#66BB6A] font-semibold">Positive Achievements</h3>
              <ul className="text-[#E0E0E0] mt-2 list-disc list-inside space-y-2">
                <li>Promoted to frontend software developer</li>
                <li>Gained 50k followers on Instagram</li>
                <li>Participated in an interview on web development for female developers</li>
                <li>Uploaded first YouTube tutorials</li>
                <li>Bought VR headset, started VR development</li>
                <li>Started learning Spanish</li>
                <li>Maintained a healthy relationship</li>
                <li>Travelled to London with my boyfriend for food adventures</li>
                <li>Learned skiing in Innsbruck, progressed to black routes, bought skis</li>
                <li>Improved surfing in Madeira; made plans to move there, bought surfboard</li>
                <li>Travelled solo in Ireland, hiked 42 km in one day, wild camping</li>
                <li>Cat-sat solo for a weekend in Heidelberg</li>
                <li>Bought climbing shoes, improved bouldering skills</li>
                <li>Joined Urban Sports Club</li>
                <li>recovered from ligament rupture in ankle</li>
                <li>Earned 13459</li>
                <li>Saved 8023</li>
              </ul>
                </div>

            <div className="flex flex-col">
              <h3 className="text-2xl text-[#FF7043] font-semibold">Challenges</h3>
              <ul className="text-[#E0E0E0] mt-2 list-disc list-inside space-y-2">
                <li>Got neurodermatitis</li>
                <li>Found a small lump in my thyroid</li>
                <li>Completed only 3 exams for Computer Science bachelor</li>
                <li>Gained 10 kg weight</li>
                <li>Still financially dependent on parents for living and food</li>
                <li>was mentally stressed and had some short lived mental breakdowns </li>
                <li>didnt finish the 366 days of persistency which i announced on instagram (failed on day 60)</li>
                <li>didnt finish the 366 days of writing a book (failed on day 4)</li>
              </ul>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section className="">
            <h2 className="text-3xl text-[#90CAF9] font-semibold">Goals for 24</h2>
            <ul className="text-[#E0E0E0] mt-4 list-disc list-inside space-y-2">
              <li>Finish 25 university courses</li>
              <li>Learn how to surfskate</li>
              <li>Improve bouldering to handle red routes</li>
              <li>Master mountain biking jumps and better condition to keep up with boyfriend</li>
              <li>Animate a VR room/ learn how to animate in general</li>
              <li>Redo FAB app</li>
              <li>Seek work that brings more satisfaction and aligns with my goals</li>
              <li>Become financially independent from parents</li>
              <li>Surf with my own Surfboard for the first time</li>
              <li>Read 10 books</li>

            </ul>
          </section>
        </div>

     
      </main>
    </div>
  );
}
