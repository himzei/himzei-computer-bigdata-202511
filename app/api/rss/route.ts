import { NextResponse } from 'next/server';

// RSS 피드 데이터 타입 정의
interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  guid: string;
  category?: string;
}

// RSS 피드 생성 함수
function generateRSSFeed(items: RSSItem[]): string {
  const baseUrl = 'https://himzei.com';
  const currentDate = new Date().toUTCString();

  const rssItems = items
    .map(
      item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.description}]]></description>
      <link>${baseUrl}${item.link}</link>
      <guid isPermaLink="true">${baseUrl}${item.guid}</guid>
      <pubDate>${item.pubDate}</pubDate>
      ${
        item.category ? `<category><![CDATA[${item.category}]]></category>` : ''
      }
    </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[한국산업인재육성학원 - 최신 소식]]></title>
    <description><![CDATA[대구 최고의 회계·세무·컴퓨터학원. POWER BI 기반 재무빅데이터 분석사, 사무관리원 양성과정. 실무 중심 교육으로 취업률 95% 달성.]]></description>
    <link>${baseUrl}</link>
    <language>ko-KR</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/logo.webp</url>
      <title>한국산업인재육성학원</title>
      <link>${baseUrl}</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <managingEditor>info@himzei.com (한국산업인재육성학원)</managingEditor>
    <webMaster>info@himzei.com (한국산업인재육성학원)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} 한국산업인재육성학원. All rights reserved.</copyright>
    <generator>Next.js RSS Generator</generator>
    <ttl>60</ttl>
    ${rssItems}
  </channel>
</rss>`;
}

// RSS 피드 데이터 생성 함수
function getRSSFeedData(): RSSItem[] {
  const currentDate = new Date();

  return [
    {
      title: '2025년 POWER BI 기반 재무빅데이터 분석사 과정 개강 안내',
      description:
        'POWER BI를 활용한 재무빅데이터 분석 전문가 양성과정이 2025년 1월 개강합니다. 실무 중심 교육으로 취업률 95%를 달성한 검증된 과정입니다.',
      link: '/courses',
      pubDate: new Date(
        currentDate.getTime() - 2 * 24 * 60 * 60 * 1000
      ).toUTCString(), // 2일 전
      guid: '/courses/power-bi-2025',
      category: '교육과정',
    },
    {
      title: '사무관리원 양성과정 신규 모집 시작',
      description:
        '2025년 상반기 사무관리원 양성과정 모집을 시작합니다. 실무 중심 교육과 취업 연계 프로그램으로 높은 취업률을 자랑합니다.',
      link: '/courses',
      pubDate: new Date(
        currentDate.getTime() - 5 * 24 * 60 * 60 * 1000
      ).toUTCString(), // 5일 전
      guid: '/courses/office-management-2025',
      category: '교육과정',
    },
    {
      title: '한국산업인재육성학원 신규 강의실 오픈',
      description:
        '더욱 쾌적한 학습 환경을 위해 신규 강의실을 오픈했습니다. 최신 시설과 장비로 더욱 효과적인 교육을 제공합니다.',
      link: '/',
      pubDate: new Date(
        currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
      ).toUTCString(), // 7일 전
      guid: '/news/new-classroom',
      category: '학원소식',
    },
    {
      title: '2024년 하반기 취업 성과 발표',
      description:
        '2024년 하반기 졸업생들의 취업 성과를 발표합니다. 전체 취업률 95%를 달성하며 우수한 성과를 거두었습니다.',
      link: '/',
      pubDate: new Date(
        currentDate.getTime() - 10 * 24 * 60 * 60 * 1000
      ).toUTCString(), // 10일 전
      guid: '/news/employment-results-2024h2',
      category: '취업성과',
    },
    {
      title: 'POWER BI 전문가 특강 개최',
      description:
        '빅데이터 분석 분야 전문가를 초청하여 POWER BI 활용 특강을 개최합니다. 수강생과 일반인 모두 참여 가능합니다.',
      link: '/',
      pubDate: new Date(
        currentDate.getTime() - 14 * 24 * 60 * 60 * 1000
      ).toUTCString(), // 14일 전
      guid: '/news/power-bi-special-lecture',
      category: '특강',
    },
    {
      title: '2025년 신년 맞이 할인 혜택 안내',
      description:
        '2025년 신년을 맞아 신규 수강생을 위한 특별 할인 혜택을 제공합니다. 조기 등록 시 추가 할인 혜택도 있습니다.',
      link: '/',
      pubDate: new Date(
        currentDate.getTime() - 20 * 24 * 60 * 60 * 1000
      ).toUTCString(), // 20일 전
      guid: '/news/new-year-discount-2025',
      category: '할인혜택',
    },
  ];
}

export async function GET() {
  try {
    // RSS 피드 데이터 생성
    const rssData = getRSSFeedData();

    // RSS XML 생성
    const rssXml = generateRSSFeed(rssData);

    // XML 응답 반환
    return new NextResponse(rssXml, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // 1시간 캐시
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
      },
    });
  } catch (error) {
    console.error('RSS 피드 생성 중 오류 발생:', error);

    // 오류 발생 시 빈 RSS 피드 반환
    const emptyRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>한국산업인재육성학원</title>
    <description>RSS 피드를 불러오는 중 오류가 발생했습니다.</description>
    <link>https://himzei.com</link>
    <language>ko-KR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  </channel>
</rss>`;

    return new NextResponse(emptyRss, {
      status: 500,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
      },
    });
  }
}
