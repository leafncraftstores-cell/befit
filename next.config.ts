import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static: `next build` writes a plain HTML/CSS/JS site to /out.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Static export can't use the on-demand optimiser, so a custom loader asks the
    // image CDN (Unsplash/imgix) for the exact width, with AVIF/WebP via `auto=format`.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1440, 1920],
    imageSizes: [128, 256],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
