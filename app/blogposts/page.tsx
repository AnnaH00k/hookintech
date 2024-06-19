import Image from "next/image";
import MenuHeader from "../components/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";


export default function Home() {
  return (

    <main className="flex gap-6 flex-col items-center min-h-[90vh] justify-between py-20 pb-[10vh] bg-[#0A1109] w-full">
    <div className="flex items-center flex-col justify-center">
        <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
          Blogposts   
        </h1>
        <p className="text-md text-[#A0A2A0] text-center mb-4 w-[90vw]">
          Here you will find interesting blogposts on various topics.
        </p>

        <a href="/blogposts/mjsAndJs" className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] sm:hover:scale-105 p-4">
          <h2 className="text-lg text-[#7C9838] font-bold ">The difference between next.config.mjs and next.config.js</h2>
          <p className="text-md text-[#909d90]">Next.js 12 introduced support for ES Modules (ESM) in the Next.js configuration file. This means that you can now use next.config.mjs instead of next.config.js. This is useful if you want to use ES modules in your Next.js configuration file.</p>
          <div   className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">Read more</div>
        </a>

  </div>
      
    </main>

  );
}
