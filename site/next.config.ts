import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment - set this to your repo name
  basePath: "/arun-adwani",
};

export default nextConfig;
