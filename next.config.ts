import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  /** Early connection to Iconify API (Lighthouse: preconnect candidate) */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: "<https://api.iconify.design>; rel=preconnect; crossorigin",
          },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["@iconify/react", "lucide-react"],
  },
};

export default nextConfig;
