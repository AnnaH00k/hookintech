/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName = "hookintech";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./utils/imageLoader.ts"
  },
  experimental: {
    serverComponentsExternalPackages: ["gray-matter"]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false
      };
    }
    return config;
  }
};

export default nextConfig;
