import Link from "next/link";
import Image from "next/image";
import {
  getContentTree,
  getAllArticles,
  ContentTree,
} from "@/utils/contentUtils";
import { FolderIcon, DocumentIcon } from "@heroicons/react/24/outline";
import CircuitBackground from "./components/CircuitBackground";

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
      <main className="flex flex-col items-center justify-between sm:py-20 pb-[10vh] min-h-screen w-full relative z-10">
        <div className="flex flex-col justify-center sm:h-auto items-center w-full mt-[5vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/images/Hooked0ntechImage.png"
            alt="hooked on tech logo"
            width={200}
            height={200}
            className="h-[200px] w-auto mb-8"
            priority
            unoptimized
          />

          <h1 className="text-4xl absolute top-4 opacity-0  sm:text-6xl font-bold text-[#D7E0C5] text-center mb-6">
            Hooked on Tech
          </h1>

          <p className="text-xl sm:text-2xl text-[#8E967E] text-center max-w-3xl mb-12 cursor-default">
            Exploring ways to make a positive impact through{" "}
            <span className="text-[#D7E0C5]">technology</span> and{" "}
            <span className="text-[#D7E0C5]">innovation</span>
          </p>

          {/* Topics Section */}
          <div className="w-full max-w-6xl mb-16 rounded-xl border bg-[#0A1109] border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] p-6">
            <h2 className="text-2xl font-semibold text-[#D7E0C5] text-center mb-6">
              Topics
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {topics.map((topic) => (
                <Link
                  key={topic}
                  href={`/articles/${topic}`}
                  className="flex items-center space-x-2 px-6 py-3 bg-[#151C14] rounded-xl border border-[#1A2310] hover:border-[#7C9838] transition-all duration-300"
                >
                  <FolderIcon className="h-5 w-5 text-[#7C9838]" />
                  <span className="text-[#D7E0C5] font-medium">
                    {formatTopicName(topic)}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* All Articles Section */}
          <div className="w-full max-w-6xl mb-16 rounded-xl border bg-[#0A1109] border-[#1A2310] shadow-[4px_4px_8px_0px_#070B06,_-4px_-4px_8px_0px_#1F2B1B] p-6">
            <h2 className="text-2xl font-semibold text-[#D7E0C5] mb-6 text-center">
              All Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {allArticles.map((article) => (
                <Link
                  key={`${article.meta?.topic}/${article.meta?.slug}`}
                  href={`/articles/${cleanDirectoryName(
                    article.meta?.topic || ""
                  )}/${article.meta?.slug}`}
                  className="group bg-[#151C14] rounded-xl border border-[#1A2310] p-6 transition-all duration-300 hover:border-[#7C9838]"
                >
                  <div className="flex items-start space-x-3">
                    <DocumentIcon className="h-5 w-5 text-[#7C9838] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-[#D7E0C5] font-semibold text-xl mb-3 group-hover:text-[#7C9838] transition-colors">
                        {article.meta?.title}
                      </h3>
                      {article.meta?.description && (
                        <p className="text-[#8E967E] text-sm mb-4">
                          {article.meta.description}
                        </p>
                      )}
                      {article.meta?.tags && (
                        <div className="flex flex-wrap gap-2">
                          {article.meta.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-[#1A2310] text-[#8E967E] rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
