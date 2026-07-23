import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Sirve /demos/<slug> desde public/demos/<slug>/index.html
      {
        source: "/demos/:slug",
        destination: "/demos/:slug/index.html",
      },
    ];
  },
};

export default nextConfig;
