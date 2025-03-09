import {
  getContentBySlug,
  getContentTree,
  ContentTree,
} from "@/utils/contentUtils";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "fs/promises";
import { join } from "path";

interface PageProps {
  params: {
    type: string;
    slug: string[];
  };
}

interface ContentMeta {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

function cleanDirectoryName(name: string): string {
  // Remove numeric prefix (e.g., "1.KnowledgeAccess" -> "KnowledgeAccess")
  return name.replace(/^\d+\./, "");
}

function getOriginalDirectoryName(
  tree: ContentTree,
  cleanName: string
): string | null {
  // Find the original directory name (with numeric prefix) from the clean name
  return (
    tree.children?.find((child) => cleanDirectoryName(child.name) === cleanName)
      ?.name || null
  );
}

function getAllMarkdownPaths(
  tree: ContentTree,
  currentPath: string[] = []
): { type: string; slug: string[] }[] {
  if (!tree) return [];

  // If it's a markdown file
  if (tree.type === "file" && tree.name.endsWith(".md")) {
    const type = currentPath[0] || "";
    // Get the cleaned topic name (without numeric prefix) and the article name
    const topic = cleanDirectoryName(currentPath[1] || "");
    const article = tree.name.replace(/\.md$/, "");
    return [
      {
        type,
        slug: [topic, article],
      },
    ];
  }

  if (!tree.children) return [];

  return tree.children.reduce(
    (paths: { type: string; slug: string[] }[], child) => {
      return [
        ...paths,
        ...getAllMarkdownPaths(child, currentPath.concat(child.name)),
      ];
    },
    []
  );
}

export async function generateStaticParams() {
  const contentTree = await getContentTree("articles");
  return getAllMarkdownPaths(contentTree);
}

async function getContent(
  type: "articles" | "tutorials" | "docs",
  slug: string[]
): Promise<{ meta: ContentMeta; content: string }> {
  try {
    // Get the content tree to find the original directory name with numeric prefix
    const contentTree = await getContentTree(type);
    const [topicClean, articleName] = slug;

    // Find the original directory name with numeric prefix
    const originalTopicDir = getOriginalDirectoryName(contentTree, topicClean);
    if (!originalTopicDir) {
      throw new Error(`Topic directory not found: ${topicClean}`);
    }

    // Construct the correct file path
    const contentPath = join(
      process.cwd(),
      "public",
      "content",
      type,
      originalTopicDir,
      `${articleName}.md`
    );
    const fileContents = await readFile(contentPath, "utf8");

    // Parse frontmatter and content
    const { data, content } = await import("gray-matter").then((mod) =>
      mod.default(fileContents)
    );

    const meta: ContentMeta = {
      title: data.title || articleName,
      date: data.date || new Date().toISOString(),
      description: data.description,
      tags: data.tags,
    };

    return { meta, content };
  } catch (error) {
    console.error(`Error reading content:`, error);
    return {
      meta: {
        title: "Not Found",
        date: new Date().toISOString(),
        description: "Content not found",
        tags: [],
      },
      content: "# Content Not Found\nThe requested content could not be found.",
    };
  }
}

export default async function ContentPage({ params }: PageProps) {
  const { type, slug } = params;
  const { meta, content } = await getContent(
    type as "articles" | "tutorials" | "docs",
    slug
  );

  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        format: "mdx",
      },
    },
  });

  return (
    <div className="min-h-screen bg-[#0A1109] py-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#D7E0C5] mb-4">
            {meta.title}
          </h1>
          {meta.description && (
            <p className="text-xl text-[#8E967E] mb-4">{meta.description}</p>
          )}
          <div className="flex flex-wrap gap-2">
            {meta.tags?.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#151C14] text-[#8E967E] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-invert prose-headings:text-[#D7E0C5] prose-p:text-[#8E967E] prose-a:text-[#7C9838] prose-strong:text-[#D7E0C5] prose-code:text-[#D7E0C5] max-w-none">
          {mdxContent}
        </div>
      </article>
    </div>
  );
}
