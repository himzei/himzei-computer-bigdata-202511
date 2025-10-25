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
        src: '/images/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['education', 'business'],
    lang: 'ko',
    orientation: 'portrait',
  };
}

