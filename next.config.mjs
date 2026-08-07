/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const repo = '/hookintech'

const nextConfig = {
  output: 'export',
  basePath: isProduction ? repo : '',
  assetPrefix: isProduction ? repo : '',
  images: {
    loader: "custom",
    loaderFile: "./utils/imageLoader.ts",
  },
  serverExternalPackages: ['gray-matter'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
    }
    return config
  },
}

export default nextConfig