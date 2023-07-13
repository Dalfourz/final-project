/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
    
  },
  remotePatterns: [{ protocol: "https:", hostname: "**.imgur.com" }],
};

module.exports = nextConfig;
