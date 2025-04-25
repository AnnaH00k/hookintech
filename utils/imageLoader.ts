export default function imageLoader({ src }: { src: string }) {
  const isProduction = process.env.NODE_ENV === "production";
  const repoName = "hookintech";
  const basePath = isProduction ? `/${repoName}` : "";
  const normalizedPath = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${normalizedPath}`;
}
