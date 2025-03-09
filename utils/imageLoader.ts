export default function imageLoader({ src }: { src: string }) {
  // For static HTML generation and preload tags
  if (typeof window === "undefined") {
    const basePath =
      process.env.NODE_ENV === "production" ? "/hooked0ntech" : "";
    const normalizedPath = src.startsWith("/") ? src : `/${src}`;
    return `${basePath}${normalizedPath}`;
  }

  // For client-side rendering and actual image loading
  const baseDomain =
    process.env.NODE_ENV === "production" ? "https://annah00k.github.io" : "";
  const basePath = process.env.NODE_ENV === "production" ? "/hooked0ntech" : "";
  const normalizedPath = src.startsWith("/") ? src : `/${src}`;
  return `${baseDomain}${basePath}${normalizedPath}`;
}
