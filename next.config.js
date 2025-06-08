/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  // Disable the development overlay/indicators
  devIndicators: {
    buildActivity: false
  }
};

module.exports = nextConfig;
