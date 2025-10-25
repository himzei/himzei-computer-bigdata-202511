import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 쿠키 정책 개선
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
  // 이미지 최적화 설정
  images: {
    domains: [],
    unoptimized: false,
  },
};

export default nextConfig;
