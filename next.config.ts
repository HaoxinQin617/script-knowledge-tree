import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sites serves the generated WebP files directly. Disabling the Next.js
  // optimizer prevents production images from being rewritten to a route
  // that is not available in the deployed Worker.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
