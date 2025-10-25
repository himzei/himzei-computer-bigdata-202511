import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '한국산업인재육성학원',
    short_name: 'KIHD',
    description:
      '대구 최고의 회계·세무·컴퓨터학원. POWER BI 기반 재무빅데이터 분석사, 사무관리원 양성과정.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/images/logo.webp',
        sizes: '192x192',
        type: 'image/webp',
        purpose: 'maskable',
      },
      {
        src: '/images/logo.webp',
        sizes: '512x512',
        type: 'image/webp',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'business'],
    lang: 'ko',
    orientation: 'portrait',
    scope: '/',
    id: 'kihd-academy',
    // PWA 기능 향상
    shortcuts: [
      {
        name: '상담 신청',
        short_name: '상담',
        description: '무료 상담 신청하기',
        url: '/#contact',
        icons: [{ src: '/images/logo.webp', sizes: '96x96' }],
      },
      {
        name: 'FAQ',
        short_name: 'FAQ',
        description: '자주 묻는 질문',
        url: '/faq',
        icons: [{ src: '/images/logo.webp', sizes: '96x96' }],
      },
    ],
  };
}
