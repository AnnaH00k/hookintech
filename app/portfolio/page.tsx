"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import CircuitBackground from "../components/CircuitBackground";

export default function Home() {
  return (
    <div className="w-full h-full">
      <CircuitBackground />
      <main className="flex min-h-[91vh] flex-col items-center justify-center pb-[10vh] bg-transparent w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1109] -z-20" />
        <div className="relative flex flex-col justify-center h-auto items-center w-full mt-[10vh] z-10">
          <Image
            src="/images/Anna.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="h-[200px] w-auto rounded-full"
            priority
          />
          <h1 className="text-2xl text-center mt-4 w-[90vw] text-[#8E967E]">
            Portfolio of a Developer
          </h1>
          <h2 className="text-3xl text-center mt-2 w-[90vw] text-[#D7E0C5] font-bold">
            Anna Höök
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 gap-8 mt-8">
          {/* Projects Section */}
          <div className="w-full rounded-xl border bg-[#0A1109] border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] p-6">
            <h2 className="text-2xl font-semibold text-[#D7E0C5] text-center mb-6">
              Projects
            </h2>
            <div className="flex flex-row flex-wrap justify-center gap-4">
              <Link
                href="https://www.iu.de/bachelor/informatik/"
                target="_blank"
                className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] flex w-full flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] hover:border-[#7C9838] transition-all duration-300 p-4"
              >
                <h2 className="text-lg text-[#D7E0C5] font-bold">
                  Online University
                </h2>
                <p className="text-md text-[#8E967E]">
                  Bachelor of Computer Science <br /> (in progress)
                </p>
                <div className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1">
                  @ IU International University
                </div>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.Hook.fabapp&fbclid=IwAR0qtZG8s9tki8USCR4IdGCpI7nGZstqH2XIuT5D2Bo0Uuxo6A6KGWBkDT0"
                target="_blank"
                className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] w-full flex flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] hover:border-[#7C9838] transition-all duration-300 p-4"
              >
                <h2 className="text-lg text-[#D7E0C5] font-bold">FAB App</h2>
                <div className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1">
                  Google Play Store
                </div>
              </Link>
              <Link
                href="https://annah00k.github.io/co2-zone/en"
                target="_blank"
                className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] flex w-full flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] hover:border-[#7C9838] transition-all duration-300 p-4"
              >
                <h2 className="text-lg text-[#D7E0C5] font-bold">CO2 Zone</h2>
                <div className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1">
                  Link to Website
                </div>
              </Link>
              <Link
                href="https://www.amazon.de/shop/hooked0ntech/list/XEYKC4SP7AYA?ref_=cm_sw_r_cp_ud_aipsflist_aipsfhooked0ntech_1ARB010TPA22B9J44HB7"
                target="_blank"
                className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] w-full flex flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] hover:border-[#7C9838] transition-all duration-300 p-4"
              >
                <h2 className="text-lg text-[#D7E0C5] font-bold">
                  Amazon Storefront
                </h2>
                <div className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1">
                  My Setup
                </div>
              </Link>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="w-full rounded-xl border bg-[#0A1109] border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] p-6">
            <h2 className="text-2xl font-semibold text-[#D7E0C5] text-center mb-6">
              Tech Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] w-full cursor-default flex flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] p-4">
                <h2 className="text-lg text-[#D7E0C5] font-bold">
                  Native App development
                </h2>
                <p className="text-md text-[#8E967E]">Java, Swift</p>
              </div>

              <div className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] w-full cursor-default flex flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] p-4">
                <h2 className="text-lg text-[#D7E0C5] font-bold">
                  Web development
                </h2>
                <p className="text-md text-[#8E967E]">HTML,CSS,Typescript</p>
                <p className="text-md text-[#8E967E]">
                  React, Next.js, Tailwind CSS
                </p>
              </div>

              <div className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] w-full cursor-default flex flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] p-4">
                <h2 className="text-lg text-[#D7E0C5] font-bold">
                  Media Creation
                </h2>
                <p className="text-md text-[#8E967E]">
                  Canva, Adobe, Figma, Da Vinci Resolve
                </p>
              </div>

              <div className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] w-full cursor-default flex flex-col max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] p-4">
                <h2 className="text-lg text-[#D7E0C5] font-bold">
                  VR development
                </h2>
                <p className="text-md text-[#8E967E]">
                  Unreal Engine 5 (still learning), Meta Quest 2
                </p>
              </div>
            </div>
          </div>

          {/* Media Section */}
          <div className="w-full rounded-xl border bg-[#0A1109] border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] p-6">
            <h2 className="text-2xl font-semibold text-[#D7E0C5] text-center mb-6">
              Media
            </h2>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
              <div className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] flex flex-col max-w-[400px] min-w-[200px] w-full min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] hover:border-[#7C9838] transition-all duration-300 p-4">
                <h2 className="text-lg text-[#D7E0C5] font-bold">YouTube</h2>
                <Link
                  className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1"
                  href="https://youtube.com/@hooked0nTech?si=urTx7LmuBbzpSca0"
                  target="_blank"
                >
                  hooked0nTech
                </Link>
                <Link
                  className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1"
                  href="https://youtube.com/@hookedwords?si=iG2OyeU6sYO_fkM_"
                  target="_blank"
                >
                  hookb00k
                </Link>
              </div>
              <div className="rounded-xl border border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] flex flex-col max-w-[400px] min-h-[150px] min-w-[200px] w-full text-center items-center justify-center gap-2 bg-[#151C14] hover:border-[#7C9838] transition-all duration-300 p-4">
                <h2 className="text-lg text-[#D7E0C5] font-bold">Instagram</h2>
                <Link
                  href="https://www.instagram.com/hooked0ntech/"
                  className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1"
                  target="_blank"
                >
                  hooked0nTech
                </Link>
                <Link
                  href="https://www.instagram.com/hookb00k/?next=https%3A%2F%2Fwww.instagram.com%2Fp%2FCBTn3TEpza3%2Fliked_by%2F%3F__coig_login%3D1"
                  className="text-sm text-[#8E967E] hover:text-[#D7E0C5] rounded-full bg-[#1A2310] px-3 py-1"
                  target="_blank"
                >
                  hookb00k
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
