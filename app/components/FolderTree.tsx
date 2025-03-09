import { ContentTree } from "@/utils/contentUtils";
import Link from "next/link";
import { FolderIcon, DocumentIcon } from "@heroicons/react/24/outline";

interface FolderTreeProps {
  tree: ContentTree;
  basePath: string;
  level?: number;
}

const hasMarkdownFiles = (tree: ContentTree): boolean => {
  if (tree.type === "file" && tree.name.endsWith(".md")) return true;
  return tree.children?.some((child) => hasMarkdownFiles(child)) ?? false;
};

export default function FolderTree({
  tree,
  basePath,
  level = 0,
}: FolderTreeProps) {
  if (!tree) return null;

  // Skip folders that don't contain any markdown files
  if (tree.type === "directory" && !hasMarkdownFiles(tree)) return null;

  const indent = level * 16; // 16px indent per level

  if (tree.type === "file") {
    if (!tree.name.endsWith(".md")) return null;
    return (
      <div className="group" style={{ marginLeft: `${indent}px` }}>
        <Link
          href={`/${basePath}/${tree.path}`}
          className="text-[#8E967E] hover:text-[#D7E0C5] transition-colors flex items-center space-x-2 py-1"
        >
          <DocumentIcon className="h-4 w-4" />
          <span>{tree.meta?.title || tree.name.replace(/\.md$/, "")}</span>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ marginLeft: `${indent}px` }}>
      {level > 0 && (
        <div className="flex items-center space-x-2 text-[#7C9838] py-2">
          <FolderIcon className="h-4 w-4" />
          <span className="font-medium">
            {tree.name
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </span>
        </div>
      )}
      <div className="space-y-1">
        {tree.children?.map((child, index) => (
          <FolderTree
            key={index}
            tree={child}
            basePath={basePath}
            level={level + 1}
          />
        ))}
      </div>
    </div>
  );
}
