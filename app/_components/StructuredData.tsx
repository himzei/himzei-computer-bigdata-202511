import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'course' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  // 조직 정보 구조화된 데이터
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: '한국산업인재육성학원',
    alternateName: 'KIHD',
    description:
      '대구 최고의 회계·세무·컴퓨터학원. POWER BI 기반 재무빅데이터 분석사, 사무관리원 양성과정.',
    url: 'https://kihd.ac.kr',
    logo: 'https://kihd.ac.kr/images/logo.webp',
    image: 'https://kihd.ac.kr/images/logo.webp',
    telephone: '053-818-5677',
    email: 'himzei@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '조영길 18-18',
      addressLocality: '경산시',
      addressRegion: '경상북도',
      postalCode: '38541',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '35.8258',
      longitude: '128.7414',
    },
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: '김태성',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '053-818-5677',
      contactType: 'customer service',
      availableLanguage: 'Korean',
    },
    sameAs: ['https://kihd.ac.kr'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '교육과정',
      itemListElement: [
        {
          '@type': 'Course',
          name: 'POWER BI 기반 재무빅데이터 분석사',
          description: 'POWER BI를 활용한 재무빅데이터 분석 전문가 양성과정',
          provider: {
            '@type': 'EducationalOrganization',
            name: '한국산업인재육성학원',
          },
        },
        {
          '@type': 'Course',
          name: '사무관리원 양성과정',
          description: '실무 중심의 사무관리 전문가 양성과정',
          provider: {
            '@type': 'EducationalOrganization',
            name: '한국산업인재육성학원',
          },
        },
      ],
    },
  };

  // 강의 정보 구조화된 데이터
  const courseData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'POWER BI 기반 재무빅데이터 분석사',
    description:
      'POWER BI를 활용한 재무빅데이터 분석 전문가 양성과정. 실무 중심 교육으로 취업률 95% 달성.',
    provider: {
      '@type': 'EducationalOrganization',
      name: '한국산업인재육성학원',
      url: 'https://kihd.ac.kr',
    },
    courseMode: 'blended',
    educationalLevel: 'beginner',
    inLanguage: 'ko',
    teaches: ['POWER BI', '재무빅데이터 분석', '데이터 시각화', '재무분석'],
    coursePrerequisites: '컴퓨터 기초 지식',
    syllabusSections: [
      {
        '@type': 'Syllabus',
        name: 'POWER BI 기초',
        description: 'POWER BI 기본 기능 및 인터페이스 학습',
      },
      {
        '@type': 'Syllabus',
        name: '데이터 모델링',
        description: '데이터 모델링 및 관계 설정',
      },
      {
        '@type': 'Syllabus',
        name: '시각화 및 대시보드',
        description: '효과적인 데이터 시각화 및 대시보드 구축',
      },
    ],
  };

  // 브레드크럼 구조화된 데이터
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: 'https://kihd.ac.kr',
      },
      ...(data?.breadcrumbs || []),
    ],
  };

  // 타입에 따른 데이터 선택
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return organizationData;
      case 'course':
        return courseData;
      case 'breadcrumb':
        return breadcrumbData;
      default:
        return organizationData;
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2),
      }}
    />
  );
}
