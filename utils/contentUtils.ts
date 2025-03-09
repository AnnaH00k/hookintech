import "server-only";
import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import { cache } from "react";

export interface ContentMeta {
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  topic: string;
  slug: string;
}

export interface ContentItem {
  meta: ContentMeta;
  content: string;
}

export interface ContentTree {
  name: string;
  path: string;
  type: "file" | "directory";
  children?: ContentTree[];
  meta?: ContentMeta;
}

const CONTENT_PATH = join(process.cwd(), "content");

export const getContentTree = cache(async function (
  contentType: "articles" | "tutorials" | "docs"
): Promise<ContentTree> {
  const basePath = join(CONTENT_PATH, contentType);
  try {
    const tree = await buildContentTree(basePath, contentType);
    return {
      name: contentType,
      path: contentType,
      type: "directory",
      children: tree.children,
    };
  } catch (error) {
    console.error(`Error building content tree for ${contentType}:`, error);
    return {
      name: contentType,
      path: contentType,
      type: "directory",
      children: [],
    };
  }
});

async function buildContentTree(
  dirPath: string,
  relativePath: string
): Promise<ContentTree> {
  const name = dirPath.split(/[/\\]/).pop() || relativePath;

  try {
    const stats = await stat(dirPath);

    if (stats.isFile() && dirPath.endsWith(".md")) {
      const fileContents = await readFile(dirPath, "utf8");
      const { data, content } = matter(fileContents);

      // Get topic from the directory structure
      const pathParts = dirPath.split(/[/\\]/);
      const topic = pathParts[pathParts.length - 2] || "";

      const meta: ContentMeta = {
        title: data.title || name.replace(/\.md$/, ""),
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        category: data.category || "",
        tags: data.tags || [],
        topic,
        slug: name.replace(/\.md$/, ""),
      };

      return {
        name,
        path: relativePath,
        type: "file",
        meta,
      };
    }

    if (stats.isDirectory()) {
      const files = await readdir(dirPath);
      const children = await Promise.all(
        files.map(async (file) => {
          const childPath = join(dirPath, file);
          const childRelativePath = join(relativePath, file);
          return buildContentTree(childPath, childRelativePath);
        })
      );

      return {
        name,
        path: relativePath,
        type: "directory",
        children: children.filter(Boolean),
      };
    }
  } catch (error) {
    console.error(`Error processing ${dirPath}:`, error);
  }

  return {
    name,
    path: relativePath,
    type: "directory",
    children: [],
  };
}

export const getContentBySlug = cache(async function (
  contentType: string,
  slug: string
): Promise<ContentItem> {
  const fullPath = join(CONTENT_PATH, contentType, `${slug}.md`);
  try {
    const fileContents = await readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Get topic from the path
    const pathParts = fullPath.split(/[/\\]/);
    const topic = pathParts[pathParts.length - 2] || "";

    const meta: ContentMeta = {
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      category: data.category || "",
      tags: data.tags || [],
      topic,
      slug,
    };

    return { meta, content };
  } catch (error) {
    console.error(`Error reading content for ${slug}:`, error);
    return {
      meta: {
        title: "Not Found",
        date: new Date().toISOString(),
        description: "Content not found",
        category: "",
        tags: [],
        topic: "",
        slug,
      },
      content: "# Content Not Found\nThe requested content could not be found.",
    };
  }
});

export const getAllContent = cache(async function (
  contentType: "articles" | "tutorials" | "docs"
): Promise<ContentItem[]> {
  const contentDir = join(CONTENT_PATH, contentType);
  try {
    const files = await readdir(contentDir);
    const slugs = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));

    return await Promise.all(
      slugs.map((slug) => getContentBySlug(contentType, slug))
    );
  } catch (error) {
    console.error(`Error getting all content for ${contentType}:`, error);
    return [];
  }
});

export const getAllArticles = cache(async function (): Promise<ContentTree[]> {
  const articlesTree = await getContentTree("articles");
  return getAllArticlesFromTree(articlesTree);
});

function getAllArticlesFromTree(tree: ContentTree): ContentTree[] {
  if (!tree) return [];
  if (tree.type === "file" && tree.name.endsWith(".md")) return [tree];
  if (!tree.children) return [];

  return tree.children.reduce((articles: ContentTree[], child) => {
    return [...articles, ...getAllArticlesFromTree(child)];
  }, []);
}
