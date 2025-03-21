import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.fortniteapi.io" }],
    formats: ["image/webp"],
  },
  env: {
    FORTNITE_API_BASE_URL: process.env.FORTNITE_API_BASE_URL,
    FORTNITE_API_TOKEN: process.env.FORTNITE_API_TOKEN,
  },
};

export default nextConfig;
