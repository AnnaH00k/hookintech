'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full ">
      <main className="flex flex-col items-center justify-between sm:py-20 pb-[10vh]  bg-[#0A1109] w-full">
        <div className="flex flex-col justify-center sm:h-auto h-[76vh] items-center w-full mt-[5vh]">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            Hooked0ntech
          </h1>
          <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-thin">
            Welcome to my Portfolio
          </h2>

          <a href="/#projects" className="arrow-down mt-8 sm:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"                                                                          
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        <div id="projects" className="h-[5vh] w-[90vw] " />
        <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8 ">
            <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
              Projects
            </h1>
            <Link  href="https://www.iu.de/bachelor/informatik/" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px] sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310]  shadow-[#646864] sm:hover:scale-105 p-4">
            <h2 className="text-lg text-[#A0A2A0] font-bold ">
                Online University
              </h2>
              <p className="text-md text-[#7C9838]">
                Bachelor of Computer Science <br /> (in progress)
              </p>
              <div
                className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
              >
                {" "}
                @ IU International University
              </div>
            </Link>
            <Link href="https://clye.app/en" target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">
                Working at CLYE
              </h2>
              <p className="text-md text-[#7C9838]">
                Frontend development & Landingpage design{" "}
              </p>
              <div
                className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff]  rounded-full bg-[#303830] px-3 py-1"
              >
                {" "}
                CLYE Landingpage
              </div>
            </Link>
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">FAB App</h2>
              <Link
                href="https://apps.apple.com/us/app/fabapp/id1554684851?fbclid=IwAR3ha_5Z9kWtMqfu4gVLOqbYFzdYnZSDdLVIQyKdG7YRyYWYYODJDKWLCIU"
                className="text-sm  sm:hover:scale-105 text-[#A0A2A0] hover:text-[#fff] sm:text-md rounded-full bg-[#303830] px-3 py-1"
                target="_blank"
              >
                Apple app Store
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.Hook.fabapp&fbclid=IwAR0qtZG8s9tki8USCR4IdGCpI7nGZstqH2XIuT5D2Bo0Uuxo6A6KGWBkDT0"
                className="text-sm  sm:hover:scale-105 text-[#A0A2A0] hover:text-[#fff] sm:text-md rounded-full bg-[#303830] px-3 py-1"
                target="_blank"
              >
                Google Play Store
              </Link>
            </div>
            <Link  href="https://apps.apple.com/de/app/couplecorner/id6448982599"  target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">
                Couple Corner
              </h2>
              <div
                className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
              >
                Apple app Store
              </div>
            </Link>
            <Link href="https://annah00k.github.io/co2-zone/en"  target="_blank" className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">CO2 Zone</h2>
              <div
                className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
              >
                Link to Website
              </div>
            </Link>
          </div>
        </div>

        <div id="techStack" className="h-[5vh] w-[90vw]" />
        <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw] ">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
            <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
              Tech Stack
            </h1>
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:animate-bounce p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">
                Native App development
              </h2>
              <p className="text-md text-[#7C9838]">Java, Swift</p>
            </div>

            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:animate-bounce p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold ">
                Web development
              </h2>
              <p className="text-md text-[#7C9838]">HTML,CSS,Typescript</p>
              <p className="text-md text-[#7C9838]">
                React, Next.js, Tailwind CSS
              </p>
            </div>

            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:animate-bounce p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold ">
                Media Creation
              </h2>
              <p className="text-md text-[#7C9838]">
                Canva, Adobe, Figma, Da Vinci Resolve
              </p>
              {/*<p className="text-md text-[#7C9838]">Da Vinci Resolve</p>*/}
            </div>

            {/*}  <div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] text-center items-center justify-center gap-2 bg-[#151C14] hover:bg-[#1A2310] hover:scale-105 p-4">
                <h2 className="text-lg text-[#A0A2A0] font-bold">VR development</h2>
                <p className="text-md text-[#744F29]">Unreal Engine 5, Meta Quest 2</p>
            </div> */}
          </div>
        </div>

        <div id="media" className="h-[5vh] w-[90vw]" />
        <div className="flex flex-col flex-wrap justify-center gap-4 w-[90vw]">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
            <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
              Media
            </h1>
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] p-4">
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
              <Link
                className="text-sm sm:hover:scale-105 sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
                href="https://youtube.com/@Studyvation?si=EzWIS-EEmj7Ndr7-"
                target="_blank"
              >
                Studyvation
              </Link>
            </div>
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864]  p-4">
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

        <div id="products" className="h-[5vh] w-[90vw]" />
        <Link href="https://www.amazon.de/shop/hooked0ntech/list/XEYKC4SP7AYA?ref_=cm_sw_r_cp_ud_aipsflist_aipsfhooked0ntech_1ARB010TPA22B9J44HB7" className="flex flex-col flex-wrap justify-center gap-4 w-[90vw]"  target="_blank">
          <div className=" flex flex-row flex-wrap justify-center gap-4 w-[90vw] mt-8">
            <h1 className="text-2xl text-[#A0A2A0] text-center font-bold w-[90vw]">
              Products
            </h1>
            <div className="shadow-neumorphic-hooked0ntech-box flex flex-col rounded-lg max-w-[400px] min-h-[150px]  sm:w-[40vw] w-[80vw] text-center items-center justify-center gap-2 bg-[#151C14] sm:hover:bg-[#1A2310] shadow-[#646864] sm:hover:scale-105 p-4">
              <h2 className="text-lg text-[#A0A2A0] font-bold">
                Amazon Storefront
              </h2>
              <div
                className="text-sm sm:text-md text-[#A0A2A0] hover:text-[#fff] rounded-full bg-[#303830] px-3 py-1"
              >
                My Setup
              </div>
            </div>
            {/*<div className=" flex flex-col rounded-lg max-w-[400px] min-h-[150px]  w-[40vw] text-center items-center justify-center gap-2 bg-[#151C14] p-4">
               <h2 className="text-lg text-[#303830] font-bold">Selfpublished Books</h2>
              <a href=""   className="text-sm sm:text-md rounded-full bg-[#303830] px-3 py-1" target="_blank">Development journey</a>
            </div>*/}
          </div>
        </Link>
      </main>
    </div>
  );
}
