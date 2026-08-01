import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["192.168.1.35"],
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
