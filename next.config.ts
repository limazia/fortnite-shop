import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.fortniteapi.io" }],
    formats: ["image/webp"],
  },
  env: {
    FORTNITE_URL_API: process.env.FORTNITE_URL_API,
    FORTNITE_URL_TOKEN: process.env.FORTNITE_URL_TOKEN,
  },
};

export default nextConfig;
