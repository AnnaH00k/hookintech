import Image from "next/image";
import MenuHeader from "../components/headers/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <main className="flex gap-6 flex-col items-center min-h-[90vh] justify-between py-20 pb-[10vh] bg-[#0A1109] w-full">
        <div className="flex gap-2 items-center flex-col justify-center">
          <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
            {"Blogposts"}
          </h1>
          <p className="text-md text-[#A0A2A0] text-center mb-4 w-[90vw]">
            {"Here you will find interesting blogposts on various topics."}
          </p>

          <div className="grid gap-4 w-auto md:grid-cols-2">

          <a
              href="/blogposts/challenges/blobToBadass/overview"
              className="flex flex-col rounded-lg max-w-[400px] min-h-[150px] sm:w-[40vw] w-full text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#7C9838] font-bold ">
                {"Overview - From Blob to Badass"}
              </h2>
              <p className="text-md text-[#909d90]">
                {""}
              </p>
              <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                {"Read more"}
              </div>
            </a>

            <a
              href="/blogposts/challenges/blobToBadass/day1"
              className="flex flex-col rounded-lg max-w-[400px] min-h-[150px] sm:w-[40vw] w-full text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#7C9838] font-bold ">
                {"Day 1 - From Blob to Badass"}
              </h2>
              <p className="text-md text-[#909d90]">
                {"Day 1 of the \"From Blob to Badass\" challenge, meal prep magic,  automation, health, weekly goals ,website monetization. Get inspired to embark on your own path of growth and transformation!"}
              </p>
              <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                {"Read more"}
              </div>
            </a>

            <a
              href="/blogposts/challenges/blobToBadass/definition"
              className="flex flex-col rounded-lg max-w-[400px] min-h-[150px] sm:w-[40vw] w-full text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#7C9838] font-bold ">
                {"From Blob to Badass: My Journey to Transformation"}
              </h2>
              <p className="text-md text-[#909d90]">
                {"Join me, as I embark on an epic transformation journey from feeling like a blob to becoming a true badass. From health and fitness goals to learning new skills and tackling mental challenges, follow along and be part of my story."}
              </p>
              <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                {"Read more"}
              </div>
            </a>

            <a
              href="/blogposts/codingTopics/mjsAndJs"
              className="flex flex-col rounded-lg max-w-[400px] min-h-[150px] sm:w-[40vw] w-full text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#7C9838] font-bold ">
                {"The difference between next.config.mjs and next.config.js"}
              </h2>
              <p className="text-md text-[#909d90]">
                {"Next.js 12 introduced support for ES Modules (ESM) in the Next.js configuration file. This means that you can now use next.config.mjs instead of next.config.js. This is useful if you want to use ES modules in your Next.js configuration file."}
              </p>
              <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                {"Read more"}
              </div>
            </a>

            <a
              href="/blogposts/aboutMe/whoAmI"
              className="flex flex-col rounded-lg max-w-[400px] min-h-[150px] sm:w-[40vw] w-full text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] sm:hover:scale-105 p-4"
            >
              <h2 className="text-lg text-[#7C9838] font-bold ">
                {"Who Am I?"}
              </h2>
              <p className="text-md text-[#909d90]">
                {"It's a question that many of us ask ourselves at some point in our lives. For me, this question has taken on a special significance over the last few years, as I've embarked on a journey of self-discovery and growth."}
              </p>
              <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                {"Read more"}
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
