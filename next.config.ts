import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "digitalxone.co.za",
        pathname: "/assets/book/BOOK.png",
      },
    ],
  },
};

export default nextConfig;
