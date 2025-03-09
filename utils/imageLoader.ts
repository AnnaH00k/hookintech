export default function imageLoader({ src }: { src: string }) {
  const basePath = process.env.NODE_ENV === "production" ? "/hooked0ntech" : "";
  const normalizedPath = src.startsWith("/") ? src : `/${src}`;
  return `${basePath}${normalizedPath}`;
}
