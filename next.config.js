/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    path: "/_next/image/",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
