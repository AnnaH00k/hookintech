"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import CircuitBackground from "../components/CircuitBackground";

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="flex min-h-[91vh] flex-col items-center justify-center pb-[10vh] bg-transparent w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1109] -z-20" />
        <CircuitBackground />
        <div className="relative flex flex-col justify-center h-auto items-center w-full mt-[5vh] z-10">
          <Image
            src="/hooked0ntech/images/Anna.jpg"
            alt="Profile Picture"
            width={200}
            height={200}
            className="h-[200px] w-auto rounded-full"
            priority
          />
          <h1 className="text-2xl text-center mt-4 w-[90vw] text-[#A0A2A0] ">
            Portfolio of a Developer
          </h1>
          <h2 className="text-3xl text-center mt-2 w-[90vw] text-[#7C9838] font-bold">
            Anna Höök
          </h2>
        </div>

        <div className=" flex flex-wrap gap-8 mt-8 items-start justify-center w-[90vw] h-full z-10">
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h2 className="text-2xl text-[#A0A2A0] text-center font-bold ">
              Projects
            </h2>
            <div className=" flex flex-row flex-wrap justify-center gap-4 max-w-[1000px] ">
              <Link
                href="https://www.iu.de/bachelor/informatik/"
                target="_blank"
                className="shadow-neumorphic-hooked0ntech-box flex w-full flex-col rounded-lg max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4"
              >
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  Online University
                </h2>
                <p className="text-md text-[#7C9838]">
                  Bachelor of Computer Science <br /> (in progress)
                </p>
                <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                  {" "}
                  @ IU International University
                </div>
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.Hook.fabapp&fbclid=IwAR0qtZG8s9tki8USCR4IdGCpI7nGZstqH2XIuT5D2Bo0Uuxo6A6KGWBkDT0"
                target="_blank"
                className="shadow-neumorphic-hooked0ntech-box w-full flex flex-col rounded-lg max-w-[400px] min-h-[150px]  text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4"
              >
                <h2 className="text-lg text-[#A0A2A0] font-bold">FAB App</h2>
                <div className="text-sm  sm:hover:scale-105 text-[#A0A2A0] hover:text-[#fff] sm:text-md rounded-full bg-[#303830] px-3 py-1">
                  Google Play Store
                </div>
              </Link>
              <Link
                href="https://annah00k.github.io/co2-zone/en"
                target="_blank"
                className="shadow-neumorphic-hooked0ntech-box flex w-full flex-col rounded-lg max-w-[400px] min-h-[150px]  text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4"
              >
                <h2 className="text-lg text-[#A0A2A0] font-bold">CO2 Zone</h2>
                <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                  Link to Website
                </div>
              </Link>
              <Link
                href="https://www.amazon.de/shop/hooked0ntech/list/XEYKC4SP7AYA?ref_=cm_sw_r_cp_ud_aipsflist_aipsfhooked0ntech_1ARB010TPA22B9J44HB7"
                target="_blank"
                className="shadow-neumorphic-hooked0ntech-box w-full flex flex-col rounded-lg max-w-[400px] min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4"
              >
                {" "}
                <h2 className="text-lg text-[#A0A2A0] font-bold">
                  Amazon Storefront
                </h2>
                <div className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1">
                  My Setup
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 ">
            <h2 className="text-2xl text-[#A0A2A0] cursor-default text-center font-bold">
              Tech Stack
            </h2>
            <div className=" flex flex-wrap justify-center max-w-[1000px] gap-4  ">
              <div className="shadow-neumorphic-hooked0ntech-box w-full cursor-default flex flex-col rounded-lg max-w-[400px] min-h-[150px]  text-center items-center justify-center gap-2 bg-[#151C14]  shadow-[#646864] p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold">
                  Native App development
                </h2>
                <p className="text-md text-[#7C9838]">Java, Swift</p>
              </div>

              <div className="shadow-neumorphic-hooked0ntech-box w-full cursor-default flex flex-col rounded-lg  max-w-[400px] min-h-[150px]  text-center items-center justify-center gap-2 bg-[#151C14] shadow-[#646864] p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  Web development
                </h2>
                <p className="text-md text-[#7C9838]">HTML,CSS,Typescript</p>
                <p className="text-md text-[#7C9838]">
                  React, Next.js, Tailwind CSS
                </p>
              </div>

              <div className="shadow-neumorphic-hooked0ntech-box w-full cursor-default flex flex-col rounded-lg max-w-[400px] min-h-[150px]  text-center items-center justify-center gap-2 bg-[#151C14] shadow-[#646864] p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold ">
                  Media Creation
                </h2>
                <p className="text-md text-[#7C9838]">
                  Canva, Adobe, Figma, Da Vinci Resolve
                </p>
                {/*<p className="text-md text-[#7C9838]">Da Vinci Resolve</p>*/}
              </div>

              <div className="shadow-neumorphic-hooked0ntech-box w-full cursor-default flex flex-col rounded-lg max-w-[400px] min-h-[150px]  text-center items-center justify-center gap-2 bg-[#151C14] shadow-[#646864] p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold">
                  VR development
                </h2>
                <p className="text-md text-[#7C9838]">
                  Unreal Engine 5 (still learning), Meta Quest 2{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center gap-2 mt-8 w-full z-10">
          <h2 className="text-2xl text-[#A0A2A0] text-center font-bold">
            Media
          </h2>
          <div className="flex  sm:flex-row flex-col justify-center items-center gap-4 max-w-[1000px] w-full">
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-w-[200px] w-full min-h-[150px] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold ">YouTube</h2>
              <Link
                className="text-sm sm:hover:scale-105 sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
                href="https://youtube.com/@hooked0nTech?si=urTx7LmuBbzpSca0"
                target="_blank"
              >
                hooked0nTech
              </Link>
              <Link
                className="text-sm sm:hover:scale-105 sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
                href="https://youtube.com/@hookedwords?si=iG2OyeU6sYO_fkM_"
                target="_blank"
              >
                hookb00k
              </Link>
            </div>
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px] min-w-[200px] w-full text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864]  p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">Instagram</h2>
              <Link
                href="https://www.instagram.com/hooked0ntech/"
                className="text-sm sm:hover:scale-105 sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
                target="_blank"
              >
                hooked0nTech
              </Link>
              <Link
                href="https://www.instagram.com/hookb00k/?next=https%3A%2F%2Fwww.instagram.com%2Fp%2FCBTn3TEpza3%2Fliked_by%2F%3F__coig_login%3D1"
                className="text-sm sm:hover:scale-105 sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
                target="_blank"
              >
                hookb00k
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
