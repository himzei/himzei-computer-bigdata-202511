import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'course' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  // 조직 정보 구조화된 데이터 - SEO 최적화
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: '한국산업인재육성학원',
    alternateName: [
      'KIHD',
      '경산 빅데이터학원',
      '영남대 빅데이터 교육',
      '경산 컴활 학원',
    ],
    description:
      '경산시 조영동 영남대 인근 빅데이터학원. 컴활 1급 2급, 빅데이터분석기사, 전산회계 자격증 취득. 영남대 빅데이터 교육, 경산 컴활 학원, 대구 경산 데이터분석 전문.',
    url: 'https://himzei.com',
    logo: 'https://himzei.com/images/logo.webp',
    image: 'https://himzei.com/images/logo.webp',
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
    sameAs: ['https://himzei.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '교육과정',
      itemListElement: [
        {
          '@type': 'Course',
          name: '경산 빅데이터학원 - 영남대 빅데이터 교육',
          description:
            'POWER BI를 활용한 재무빅데이터 분석 전문가 양성과정. 영남대 인근 최적의 위치.',
          provider: {
            '@type': 'EducationalOrganization',
            name: '한국산업인재육성학원',
          },
        },
        {
          '@type': 'Course',
          name: '경산 컴활 학원 - 컴활 1급 2급',
          description:
            '컴퓨터활용능력 1급 2급 자격증 취득 과정. 영남대 학생 및 일반인 대상.',
          provider: {
            '@type': 'EducationalOrganization',
            name: '한국산업인재육성학원',
          },
        },
        {
          '@type': 'Course',
          name: '빅데이터분석기사 학원',
          description: '빅데이터분석기사 자격증 취득을 위한 전문 교육 과정.',
          provider: {
            '@type': 'EducationalOrganization',
            name: '한국산업인재육성학원',
          },
        },
        {
          '@type': 'Course',
          name: '전산회계 학원 경산',
          description: '전산회계 자격증 취득을 위한 실무 중심 교육 과정.',
          provider: {
            '@type': 'EducationalOrganization',
            name: '한국산업인재육성학원',
          },
        },
      ],
    },
  };

  // 강의 정보 구조화된 데이터 - SEO 최적화
  const courseData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '경산 빅데이터학원 - 영남대 빅데이터 교육',
    alternateName: [
      '영남대 빅데이터 교육',
      '경산 컴활 학원',
      '대구 경산 데이터분석',
    ],
    description:
      '경산시 조영동 영남대 인근 빅데이터학원. 컴활 1급 2급, 빅데이터분석기사, 전산회계 자격증 취득. 영남대 빅데이터 교육, 경산 컴활 학원, 대구 경산 데이터분석 전문.',
    provider: {
      '@type': 'EducationalOrganization',
      name: '한국산업인재육성학원',
      url: 'https://himzei.com',
    },
    courseMode: 'blended',
    educationalLevel: 'beginner',
    inLanguage: 'ko',
    teaches: [
      'POWER BI',
      '재무빅데이터 분석',
      '데이터 시각화',
      '재무분석',
      '컴활 1급',
      '컴활 2급',
      '빅데이터분석기사',
      '전산회계',
      '영남대 빅데이터 교육',
      '경산 컴활 학원',
      '대구 경산 데이터분석',
    ],
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
      {
        '@type': 'Syllabus',
        name: '컴활 1급 2급',
        description: '컴퓨터활용능력 1급 2급 자격증 취득 과정',
      },
      {
        '@type': 'Syllabus',
        name: '빅데이터분석기사',
        description: '빅데이터분석기사 자격증 취득을 위한 전문 교육',
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
        item: 'https://himzei.com',
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
