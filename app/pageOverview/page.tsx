'use client';

import Link from "next/link";

export default function PageOverview() {
  return (
    <div className="w-full ">
      <main className="flex flex-col items-center justify-between sm:py-20 pb-[10vh]  bg-[#0A1109] w-full">
        <div className="flex flex-col justify-center sm:h-auto h-[76vh] items-center w-full mt-[5vh]">
          <h1 className="text-4xl text-center w-[90vw] text-[#A0A2A0] font-bold">
            Overview of all Pages
          </h1>
          <h2 className="text-2xl text-center w-[90vw] text-[#A0A2A0] font-thin">
            Here you can find all the pages I have created so far.
          </h2>


            <div className="w-[80vw] flex flex-row flex-wrap gap-4 items-center mt-10 ">
              
                <Link href="/blogposts" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"blogposts"}</p>
                </Link>

                <Link href="/blogposts/challenges/100daysOfCode" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"100daysOfCode"}</p>
                </Link>

                <Link href="/blogposts/challenges/100daysOfGameDevelopment" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"100daysOfGameDevelopment"}</p>
                </Link>

                <Link href="/blogposts/challenges/blobToBadass" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"blobToBadass"}</p>
                </Link>

                <Link href="/blogposts/codingTopics/mjsAndJs" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"codingTopics/mjsAndJs"}</p>
                </Link>

                <Link href="/blogposts/procrastinateToInnovate" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"procrastinateToInnovate"}</p>
                </Link>

                <Link href="/datasecurity" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"datasecurity"}</p>
                </Link>

                <Link href="/hooked0nautomation" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"hooked0nautomation"}</p>
                </Link>


                <Link href="/hooked0nhealth" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"hooked0nhealth"}</p>
                </Link>

                <Link href="/hooked0nideas" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"hooked0nideas"}</p>
                </Link>

                <Link href="/hooked0nlife" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"hooked0nlife"}</p>
                </Link>

                <Link href="/hooked0npolitics" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"hooked0npolitics"}</p>
                </Link>

                <Link href="/hooked0nstudys" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"hooked0nstudys"}</p>
                </Link>

                <Link href="/ideas" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"ideas"}</p>
                </Link>

                <Link href="/login" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"login"}</p>
                </Link>

                <Link href="/pageOverview" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"pageOverview"}</p>
                </Link>

                <Link href="/processHub" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"processHub"}</p>
                </Link>

                <Link href="/studyvation" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"studyvation"}</p>
                </Link>

                <Link href="/welcome" className="bg-secondary p-2 rounded-xl shadow shadow-2xl ">
                   <p className="text-text">{"welcome"}</p>
                </Link>

            </div>
          </div>
      </main>
    </div>
  );
}
