/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const repoName = "hooked0ntech";

const nextConfig = {
  basePath: isProduction ? `/${repoName}` : "",
  assetPrefix: isProduction ? `/${repoName}` : "",
  images: {
    unoptimized: true,
    path: isProduction ? `/${repoName}/_next/image` : "/_next/image",
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
