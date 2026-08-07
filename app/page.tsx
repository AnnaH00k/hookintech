import Link from "next/link";
import Image from "next/image";
import {
  getContentTree,
  getAllArticles,
  ContentTree,
} from "@/utils/contentUtils";
import { FolderIcon, DocumentIcon } from "@heroicons/react/24/outline";
import CircuitBackground from "./components/CircuitBackground";
import { usePathname } from "next/navigation";
import Header from "./components/headers/header";
import ArticlesSection from "./components/ArticlesSection";
import HiddenStartButton from "./components/HiddenStartButton";

function getTopics(tree: ContentTree): string[] {
  if (!tree || !tree.children) return [];
  return tree.children
    .filter((child) => child.type === "directory")
    .map((child) => cleanDirectoryName(child.name));
}

function cleanDirectoryName(name: string): string {
  // Remove numeric prefix (e.g., "1.KnowledgeAccess" -> "KnowledgeAccess")
  return name.replace(/^\d+\./, "");
}

function formatTopicName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function Home() {
  const articlesTree = await getContentTree("articles");
  const topics = getTopics(articlesTree);
  const allArticles = await getAllArticles();

  return (
    <div className="w-full min-h-screen bg-[#0A1109] relative">
      <CircuitBackground />
      <Header />
      <main className="flex flex-col items-center justify-between sm:py-20 pb-[10vh] min-h-screen w-full relative z-10 pt-20">
        <div className="flex flex-col justify-center sm:h-auto items-center w-full mt-[5vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src={"/images/HookInTechImage.png"}
            alt="hook in tech logo"
            width={200}
            height={200}
            className="h-[200px] w-auto mb-8"
            priority
          />

          <h1 className="text-4xl absolute top-4 opacity-0  sm:text-6xl font-bold text-[#D7E0C5] text-center mb-6">
            Hook In Tech
          </h1>

          <p className="text-xl sm:text-2xl text-[#8E967E] text-center max-w-3xl mb-12 cursor-default">
            Welcome to my journey in the{" "}
            <span className="text-[#D7E0C5]">Tech</span> industry.{" "}
          </p>

<HiddenStartButton/>
          {/* Articles Section */}
          <ArticlesSection articles={allArticles} />

          {/* Projects Section */}
          <div className="w-full max-w-4xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D7E0C5] text-center mb-8">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <Link
                href="https://500px.com/p/annah00k"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    Photography
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5] mb-2">
                    Some of my shots for sale on 500px
                  </p>
                </div>
              </Link>
              <Link
                href="https://fabapp.jimdosite.com/"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    FAB App
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Learning app for German vocational training programs
                  </p>
                </div>
              </Link>
              <Link
                href="https://annah00k.github.io/co2-zone/en"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    CO2 Zone
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    University project demo
                  </p>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/hookintech/"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    Instagram
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Where I post my coding challenges
                  </p>
                </div>
              </Link>
              <Link
                href="https://www.amazon.de/shop/hooked0ntech/list/XEYKC4SP7AYA?ref_=cm_sw_r_cp_ud_aipsflist_aipsfhooked0ntech_1ARB010TPA22B9J44HB7"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    Amazon Storefront
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    My Setup
                  </p>
                </div>
              </Link>
              <Link
                href="https://annah00k.github.io/CountingSite/"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    Counting Site
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Simple Counter for work
                  </p>
                </div>
              </Link>


            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="w-full max-w-4xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D7E0C5] text-center mb-8">
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-[#1A1F15] border border-[#3A3F35] rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] mb-2">
                    Native App Development
                  </h3>
                  <p className="text-sm text-[#8E967E]">Java, Swift, Kotlin</p>
                </div>
              </div>

              <div className="bg-[#1A1F15] border border-[#3A3F35] rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] mb-2">
                    Web Development
                  </h3>
                  <p className="text-sm text-[#8E967E] mb-1">
                    HTML, CSS, TypeScript
                  </p>
                  <p className="text-sm text-[#8E967E]">
                    React, Next.js, Tailwind CSS
                  </p>
                </div>
              </div>

              <div className="bg-[#1A1F15] border border-[#3A3F35] rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] mb-2">
                    Media Creation
                  </h3>
                  <p className="text-sm text-[#8E967E]">
                    Canva, Adobe, Figma, Da Vinci Resolve
                  </p>
                </div>
              </div>

              <div className="bg-[#1A1F15] border border-[#3A3F35] rounded-lg p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] mb-2">
                    VR Development
                  </h3>
                  <p className="text-sm text-[#8E967E]">
                    Unreal Engine 5 (still learning), Meta Quest 2
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Pages Section */}
          <div className="w-full max-w-4xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D7E0C5] text-center mb-8">
              Featured Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/blogPosts"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    Blog Posts
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Latest thoughts and insights
                  </p>
                </div>
              </Link>

              <Link
                href="/hookbook"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    Hookbook
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Writing Tool Idea
                  </p>
                </div>
              </Link>

              <Link
                href="/worldChange"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    World Change
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Making a difference
                  </p>
                </div>
              </Link>

              <Link
                href="https://github.com/AnnaH00k"
                target="_blank"
                className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-2">
                    External Projects
                  </h3>
                  <p className="text-sm text-[#8E967E] group-hover:text-[#D7E0C5]">
                    Work beyond the site
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Connect With Me Section */}
          <div className="w-full max-w-4xl mb-12 hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D7E0C5] text-center mb-8">
              Connect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-4">
                    YouTube
                  </h3>
                  <div className="space-y-2">
                    <Link
                      className="block text-sm text-[#8E967E] group-hover:text-[#D7E0C5] transition-colors"
                      href="https://youtube.com/@hookInTech?si=urTx7LmuBbzpSca0"
                      target="_blank"
                    >
                      hookInTech
                    </Link>
                    <Link
                      className="block text-sm text-[#8E967E] group-hover:text-[#D7E0C5] transition-colors"
                      href="https://youtube.com/@hookedwords?si=iG2OyeU6sYO_fkM_"
                      target="_blank"
                    >
                      hookb00k
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#D7E0C5] group-hover:text-white mb-4">
                    Instagram
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="https://www.instagram.com/hookIntech/"
                      className="block text-sm text-[#8E967E] group-hover:text-[#D7E0C5] transition-colors"
                      target="_blank"
                    >
                      hookInTech
                    </Link>
                    <Link
                      href="https://www.instagram.com/hookb00k/?next=https%3A%2F%2Fwww.instagram.com%2Fp%2FCBTn3TEpza3%2Fliked_by%2F%3F__coig_login%3D1"
                      className="block text-sm text-[#8E967E] group-hover:text-[#D7E0C5] transition-colors"
                      target="_blank"
                    >
                      hookb00k
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
