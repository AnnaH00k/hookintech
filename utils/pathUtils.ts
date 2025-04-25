export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/hookintech" : "";
  // Ensure path starts with a forward slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}
