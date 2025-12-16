/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable all caching for fresh builds
  experimental: {
    isrMemoryCacheSize: 0,
  },
  // Force unique build ID
  generateBuildId: async () => {
    return `build-${Date.now()}-${Math.random().toString(36).substring(7)}`
  },
}

export default nextConfig
