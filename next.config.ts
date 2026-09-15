import type { NextConfig } from "next";
import { basePath } from "./site.config.mjs";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  // Inline the stylesheet so a cached HTML page never points at a renamed CSS file.
  experimental: { inlineCss: true },
};

export default nextConfig;
