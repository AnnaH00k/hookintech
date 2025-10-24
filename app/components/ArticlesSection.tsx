"use client";

import Link from "next/link";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { useScreenSize } from "@/hooks/useScreenSize";

interface Article {
  meta?: {
    topic?: string;
    slug?: string;
    title?: string;
    description?: string;
    tags?: string[];
  };
}

interface ArticlesSectionProps {
  articles: Article[];
}

function cleanDirectoryName(name: string): string {
  // Remove numeric prefix (e.g., "1.KnowledgeAccess" -> "KnowledgeAccess")
  return name.replace(/^\d+\./, "");
}

export default function ArticlesSection({ articles }: ArticlesSectionProps) {
  const { isMedium } = useScreenSize();

  return (
    <div className="w-full max-w-6xl mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#D7E0C5] text-center mb-8">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {articles.slice(0, isMedium ? 4 : 3).map((article: any) => (
          <Link
            key={`${article.meta?.topic}/${article.meta?.slug}`}
            href={`/articles/${cleanDirectoryName(article.meta?.topic || "")}/${
              article.meta?.slug
            }`}
            className="group bg-[#1A1F15] hover:bg-[#2A2F25] border border-[#3A3F35] hover:border-[#D7E0C5] rounded-lg p-6 transition-all duration-300 transform hover:scale-105 w-full break-words word-break-natural"
          >
            <div className="flex items-start space-x-3">
              <DocumentIcon className="h-5 w-5 text-[#7C9838] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[#D7E0C5] font-semibold text-xl mb-3 group-hover:text-white transition-colors break-words word-break-natural">
                  {article.meta?.title}
                </h3>
                {article.meta?.description && (
                  <p className="text-[#8E967E] text-sm mb-4 group-hover:text-[#D7E0C5] transition-colors break-words word-break-natural">
                    {article.meta.description}
                  </p>
                )}
                {article.meta?.tags && (
                  <div className="flex flex-wrap gap-2">
                    {article.meta.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#1A2310] text-[#8E967E] rounded-full text-xs break-words word-break-natural"
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
  );
}
