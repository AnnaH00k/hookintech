import Link from "next/link";
import type { ContentTree } from "@/utils/contentUtils";

interface ContentTreeProps {
  tree: ContentTree;
  basePath?: string;
}

export default function ContentTree({ tree, basePath = "" }: ContentTreeProps) {
  if (!tree) return null;

  const currentPath = basePath ? `${basePath}/${tree.path}` : tree.path;

  if (tree.type === "file") {
    return (
      <div className="py-2">
        <Link
          href={`/${currentPath}`}
          className="text-[#8E967E] hover:text-[#D7E0C5] transition-colors"
        >
          {tree.name}
        </Link>
        {tree.meta?.description && (
          <p className="text-[#8E967E] text-sm mt-1">{tree.meta.description}</p>
        )}
      </div>
    );
  }

  return (
    <div className="py-2">
      <h4 className="text-[#D7E0C5] font-semibold mb-2">{tree.name}</h4>
      <div className="pl-4 border-l border-[#1A2310]">
        {tree.children?.map((child, index) => (
          <ContentTree
            key={`${child.path}-${index}`}
            tree={child}
            basePath={currentPath}
          />
        ))}
      </div>
    </div>
  );
}
