import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
  /* config options here */
};

export default nextConfig;
