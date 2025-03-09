/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName = "hooked0ntech";
const basePath = isProduction ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./utils/imageLoader.ts",
  },
  experimental: {
    serverComponentsExternalPackages: ["gray-matter"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't include fs module on the client side
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
