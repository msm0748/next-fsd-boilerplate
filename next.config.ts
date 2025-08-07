import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  images: {
    unoptimized: true, // 이미지 최적화 끄는 옵션
  },
};

export default nextConfig;
