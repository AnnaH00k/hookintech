import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex items-center justify-center overflow-x-hidden bg-[#0A1109] pt-[7vh] w-full ">
      <main className="flex gap-6 flex-col items-start max-w-3xl w-[90vw] justify-start pb-[10vh]">
        <div>
          <h1 className="text-4xl text-[#7C9838] text-start font-bold">
            {"From Blob to Badass: Day 1"}
          </h1>
          <p className="text-lg text-[#A0A2A0] text-start">
            {"Hey everyone, Welcome to the first installment of my “From Blob to Badass” challenge! I’m thrilled to share this journey with you, and today I want to dive into how I’m kicking things off and what’s on the horizon. This challenge is all about transforming myself into a healthier, more efficient, and inspired version of myself. Here’s a peek into what I’ve been working on and my plans moving forward."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold">
            {"Sharing the Journey"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start">
            {"One of the most exciting parts of this challenge is documenting and sharing every step of the way. I’ve decided to post daily reels on Instagram, TikTok, and YouTube. These reels will be a blend of motivational updates, behind-the-scenes looks at my journey, and aesthetic study montages. I want to create content that not only showcases my progress but also inspires and connects with others who might be on a similar path."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold">
            {"Improving Health: Meal Prep Magic"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start">
            {"Health is a cornerstone of this transformation, and I’m starting by focusing on meal prepping. I’ve opted for healthy burritos that are quick to prepare and easy to reheat. The idea is to streamline my meal prep so that I always have nutritious, tasty options at hand without spending hours in the kitchen. It’s all about efficiency and making healthy eating a seamless part of my daily routine."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold">
            {"Weekly Focus: Automating Tasks"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start">
            {"Each week, I’ll dive into a specific topic to enhance different aspects of my life. This week’s theme is automation. I’m exploring ways to streamline tasks and processes to free up more time for what truly matters. From setting up automated reminders to optimizing workflows, my goal is to create a system that lets me focus on the big picture without getting bogged down by the mundane."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold">
            {"Monetizing My Website"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start">
            {"In addition to personal growth, I’m also working on monetizing my website. I’ve recently implemented Google Analytics to track user behavior and gather valuable insights. This data will help me understand my audience better and refine my content strategy. I’m also in the process of getting approved for Google AdSense, which will open up opportunities for generating revenue through ads. It’s an exciting step in turning my website into a valuable asset."}
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold">
            {"Wrapping Up"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start">
            {"As I embark on this journey from blob to badass, I’m excited to share each milestone, challenge, and triumph with you. Whether it’s improving my health, automating tasks, or turning my website into a revenue stream, I’m committed to making every step count. I hope my experiences resonate with you and inspire you to take your own steps towards growth and transformation."}
          </p>
        </div>

        <div>
          <p className="text-md text-[#A0A2A0] text-start">
            {"Thank you for joining me on this adventure! Stay tuned for more updates, and don’t forget to follow along on Instagram, TikTok, and YouTube. Here’s to our shared journey of growth and badassery!"}
          </p>
          <p className="text-md text-[#A0A2A0] text-sm text-start font-serif">
            {"- Best, Anna"}
          </p>
        </div>
      </main>
    </div>
  );
}
