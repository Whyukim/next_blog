/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dimg.donga.com",
      },
    ],
  },
};

module.exports = nextConfig;
