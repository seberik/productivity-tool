import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  turbo: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.svc.ui.com",
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "app/styles")],
  },
};

export default nextConfig;
