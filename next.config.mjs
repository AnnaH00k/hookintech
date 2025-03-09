/** @type {import('next').NextConfig} */
const nextConfig = {
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
