/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Update this to your repository name
  basePath: '/pepecoinz',
  assetPrefix: '/pepecoinz/',
}

module.exports = nextConfig 