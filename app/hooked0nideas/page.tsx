import Image from "next/image";
import MenuHeader from "../components/headers/menuHeader";
import Footer from "../components/footer";
import Script from "next/script";

export default function Home() {
  return (
      <main className="flex gap-6 flex-col items-center min-h-[90vh] justify-center py-20 pb-[10vh] bg-[#0A1109] w-full">
        <div className="flex gap-2 items-center flex-col justify-center">
          <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
            {"Ideas"}
          </h1>
          <p className="text-md text-[#A0A2A0] text-center mb-4 w-[90vw]">
            {"My Ideas and Thoughtexperiments."}
          </p>

          <div className="grid gap-4 w-auto md:grid-cols-2">
         
          <a href="/hooked0nlife" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Hooked0nLife
          </a>
          <a href="/hooked0npolitics" className="sm:text-lg text-md text-[#A0A2A0] text-center rounded-full bg-[#303830] px-3 py-1">
            Hooked0nPolitics
          </a>
          <a href="/ideas" className="sm:text-lg text-md text-background text-center rounded-full cursor-default bg-background px-3 py-1">
            Hooked0nIdeas
          </a>
          </div>
        </div>
      </main>
  );
}
