import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Module untuk multiZone
      {
        source: "/child-app/:path*",
        destination: "http://localhost:3001/child-app/:path*",
      },
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      };
    }
    return config;
  },
  experimental: {
    urlImports: ["http://localhost:3000"],
  },
};

export default nextConfig;
