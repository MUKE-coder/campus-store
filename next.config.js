/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [
      "@react-email/components",
      "@react-email/render",
      "@react-email/tailwind",
    ],
    serverActions: true,
  },
};

module.exports = nextConfig;
