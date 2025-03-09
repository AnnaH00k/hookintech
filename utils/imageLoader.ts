export default function imageLoader({ src }: { src: string }) {
  const baseDomain =
    process.env.NODE_ENV === "production" ? "https://annah00k.github.io" : "";
  const basePath = process.env.NODE_ENV === "production" ? "/hooked0ntech" : "";
  const normalizedPath = src.startsWith("/") ? src : `/${src}`;
  return `${baseDomain}${basePath}${normalizedPath}`;
}
