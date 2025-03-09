/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/hooked0ntech" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/hooked0ntech/" : "",
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
