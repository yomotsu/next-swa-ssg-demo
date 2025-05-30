import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/sub',
  output: 'export', // Use 'export' for static export
  distDir: 'out/sub',
};

export default nextConfig;
