import { getContentTree, ContentTree } from "@/utils/contentUtils";
import Link from "next/link";
import { DocumentIcon } from "@heroicons/react/24/outline";

interface TopicPageProps {
  params: {
    topic: string;
  };
}

function formatTopicName(name: string): string {
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getArticlesFromTree(tree: ContentTree): ContentTree[] {
  if (!tree || !tree.children) return [];
  return tree.children.filter(
    (child) => child.type === "file" && child.name.endsWith(".md")
  );
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { topic } = params;
  const topicTree = await getContentTree("articles");

  // Find the specific topic directory
  const topicDir = topicTree.children?.find(
    (child) => child.type === "directory" && child.name === topic
  );

  if (!topicDir) {
    return (
      <div className="min-h-screen bg-[#0A1109] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#D7E0C5] mb-8">
            Topic Not Found
          </h1>
          <p className="text-[#8E967E] text-xl">
            The requested topic could not be found.
          </p>
          <Link
            href="/"
            className="inline-block mt-8 text-[#7C9838] hover:text-[#D7E0C5] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const articles = getArticlesFromTree(topicDir);

  return (
    <div className="min-h-screen bg-[#0A1109] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-[#D7E0C5]">
            {formatTopicName(topic)}
          </h1>
          <Link
            href="/"
            className="text-[#7C9838] hover:text-[#D7E0C5] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid gap-6">
          {articles.map((article) => (
            <Link
              key={article.path}
              href={`/articles/${topic}/${article.name.replace(/\.md$/, "")}`}
              className="group bg-[#151C14] rounded-xl border border-[#1A2310] p-6 transition-all duration-300 hover:border-[#7C9838]"
            >
              <div className="flex items-start space-x-4">
                <DocumentIcon className="h-6 w-6 text-[#7C9838] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-[#D7E0C5] font-semibold text-xl mb-2 group-hover:text-[#7C9838] transition-colors">
                    {article.meta?.title || article.name.replace(/\.md$/, "")}
                  </h2>
                  {article.meta?.description && (
                    <p className="text-[#8E967E] text-sm mb-3">
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

        {articles.length === 0 && (
          <p className="text-[#8E967E] text-xl text-center mt-8">
            No articles found in this topic yet.
          </p>
        )}
      </div>
    </div>
  );
}
