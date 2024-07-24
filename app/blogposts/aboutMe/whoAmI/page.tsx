import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="flex items-center justify-center overflow-x-hidden bg-[#0A1109] w-full ">
      <main className="flex gap-6 flex-col items-start max-w-3xl  w-[90vw] justify-start  pb-[10vh]   ">
        <div >
          <h1 className="text-4xl text-[#7C9838] text-start font-bold ">
            {"Who Am I?"}
          </h1>
          <p className="text-lg text-[#A0A2A0] text-start ">
            {"It's a question that many of us ask ourselves at some point in our lives. For me, this question has taken on a special significance over the last few years, as I've embarked on a journey of self-discovery and growth."}
          </p>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold w-[90vw]">
            {"Early Beginnings"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"At the age of 17-21, I found myself working at a swimming pool in Germany. I had always been interested in programming but just started learning the basics on my own, I decided to create a learning app for the people working at the pool. It was a small project, but it gave me a sense of accomplishment and a taste of what was possible."}
          </p>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold ">
            {"Pursuing Programming"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"After a while, I realized that I wanted to pursue programming more seriously, and I decided to study computer science, at IU International University of Applied Sciences. A University, where I can study 100% online, giving me lots of flexibility. I'm now 22 and in my third semester, and while I haven't done as much as I had hoped, I'm determined to still make the most of it."}
          </p>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold ">
            {"Current Endeavors"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"Alongside my full-time studies, I also work 20 hours a week at a startup called Clye. It's a challenging job, but it's also a great learning experience, and I'm grateful for the opportunity."}
          </p>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold">
            {"Goals and Aspirations"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"One of my goals in life is to create multiple streams of income. I believe that having multiple sources of income not only provides financial security but also allows for more freedom and flexibility in how I live my life. I'm currently exploring several income streams, and here are some of the avenues I'm pursuing:"}
          </p>
          <ul className="list-disc list-inside text-md text-[#A0A2A0] ">
            <li>{"YouTube: I'm currently researching how to use the platform as a way to create content and earn money. I'm planning to create videos about programming, tech reviews, and other related topics. I believe that YouTube is a great way to share knowledge and connect with a wider audience, and I'm excited to see where this journey takes me."}</li>
            <li>{"Study Blog: As a student of computer science, I'm passionate about learning and sharing my knowledge with others, it is one way to motivate myself to get things done, because is it, not the best way to learn things, if you can explain them to others? As Feynman would say. That's why I'm starting this blog - to document my journey, share what I'm learning, and connect with other learners. I'm hoping to monetize this blog through Google AdSense."}</li>
            <li>{"A book about app development: I'm currently working on a book about app development, which I hope to publish in one to three years. This book will cover the basics of app development, including programming languages, design principles, and marketing strategies. I believe that there's a lot of demand for this kind of content, and I'm excited to share my knowledge with others."}</li>
            <li>{"Creating more apps: Finally, I'm planning to create more apps in the future. As someone who has already created one successful app, I believe that there's a lot of potential in this field. I'm always on the lookout for new app ideas and opportunities, and I'm excited to see where this takes me."}</li>
          </ul>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold ">
            {"Conclusion"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"In conclusion, I believe that creating multiple streams of income is a key component of financial success and personal freedom. By exploring different income streams like YouTube, a study blog, a book about app development, and creating more apps, I hope to create a sustainable and fulfilling career for myself. It's a journey that requires a lot of hard work and dedication, but I'm excited about the possibilities."}
          </p>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold ">
            {"A Journey of Self-Discovery"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"So who am I? I'm a computer science student, a programmer, a startup employee, and an aspiring entrepreneur. But more than that, I'm someone who's on a journey of self-discovery and growth. I'm learning new things every day, pushing myself out of my comfort zone, and trying to create a life that's fulfilling and meaningful."}
          </p>
        </div>

        <div >
          <h2 className="text-2xl text-[#A0A2A0] text-start font-bold ">
            {"Join Me"}
          </h2>
          <p className="text-md text-[#A0A2A0] text-start ">
            {"In this blog, I hope to share my experiences, my struggles, and my insights with others who are on a similar journey. I want to create a community of learners, thinkers, and doers, who are all committed to growing and improving themselves. So if you're reading this, I hope you'll join me on this journey, and together, we can create something amazing."}
          </p>
        </div>

        <div >
          <p className="text-md text-[#A0A2A0] text-start ">
            {"- Yours, Anna"}
          </p>
          <p className="text-md text-[#A0A2A0] text-sm text-start font-serif">
            {"(with the help of Chat GPT)"}
          </p>
        </div>
      </main>
    </div>
  );
}
