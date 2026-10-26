import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/images/projects/**" },
    ],
    // Placeholder project images are SVGs during scaffolding; remove once
    // real photography/screenshots replace them.
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
