
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
ignoreBuildErrors:true
  },
  eslint:{
ignoreDuringBuilds:true
  },
  /* config options here */
   images: {
    domains: ['img.clerk.com','upload.wikimedia.org'],
  },
};
export default nextConfig;