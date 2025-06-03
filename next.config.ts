
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
ignoreBuildErrors:true
  },
  /* config options here */
   images: {
    domains: ['img.clerk.com','upload.wikimedia.org'],
  },
};
export default nextConfig;