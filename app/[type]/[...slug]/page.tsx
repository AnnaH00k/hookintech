import { getContentBySlug } from "@/utils/contentUtils";
import { MDXRemote } from "next-mdx-remote";
import remarkGfm from "remark-gfm";
import { compileMDX } from "next-mdx-remote/rsc";

interface PageProps {
  params: {
    type: string;
    slug: string[];
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { type, slug } = params;
  const slugPath = slug.join("/");
  const { meta, content } = await getContentBySlug(type, slugPath);

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
            {meta.tags?.map((tag) => (
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
