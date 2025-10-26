'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// FAQ 데이터 - 검색량이 높은 질문들 중심으로 구성
const faqData = [
  {
    category: '수강 관련',
    questions: [
      {
        question: '대구에서 POWER BI 교육을 받을 수 있는 학원이 있나요?',
        answer:
          '네, 한국산업인재육성학원에서 POWER BI 기반 재무빅데이터 분석사 과정을 운영하고 있습니다. 경산시 조영동에 위치한 저희 학원에서 체계적인 교육을 받으실 수 있습니다.',
        keywords: ['대구 POWER BI', '대구 빅데이터 학원', 'POWER BI 교육'],
      },
      {
        question: '수강료는 얼마인가요?',
        answer:
          '수강료는 과정별로 상이하며, 정부지원금을 통해 최대 100% 지원받을 수 있습니다. 자세한 수강료는 무료 상담을 통해 안내해드립니다. 053-818-5677로 연락주시면 상세한 정보를 제공해드립니다.',
        keywords: ['수강료', '교육비', '정부지원금'],
      },
      {
        question: '수강 기간은 얼마나 되나요?',
        answer:
          'POWER BI 기반 재무빅데이터 분석사 과정은 총 6개월 과정입니다. 기초부터 실무까지 체계적으로 학습할 수 있도록 구성되어 있으며, 주 5일 오전/오후 반으로 운영됩니다.',
        keywords: ['수강기간', '교육기간', '6개월 과정'],
      },
      {
        question: '컴퓨터 초보자도 수강할 수 있나요?',
        answer:
          '네, 가능합니다. 저희 과정은 컴퓨터 기초 지식부터 시작하여 단계별로 학습할 수 있도록 구성되어 있습니다. 전담 강사진이 개별 맞춤형 지도를 제공하므로 초보자도 충분히 따라갈 수 있습니다.',
        keywords: ['컴퓨터 초보', '기초부터', '맞춤형 교육'],
      },
    ],
  },
  {
    category: '취업 관련',
    questions: [
      {
        question: '취업률이 정말 95%인가요?',
        answer:
          '네, 저희 학원의 실제 취업률은 95%입니다. 이는 실무 중심의 교육과정과 취업 지원 프로그램, 그리고 우수한 강사진 덕분입니다. 수강생들의 실제 취업 후기도 확인하실 수 있습니다.',
        keywords: ['취업률 80%', '실제 취업률', '취업 지원'],
      },
      {
        question: '어떤 직종으로 취업할 수 있나요?',
        answer:
          'POWER BI 과정 수료 후 재무분석가, 데이터 분석가, 비즈니스 인텔리전스 전문가, 재무기획 담당자 등 다양한 직종으로 취업이 가능합니다. 또한 사무관리원 과정을 통해 일반 사무직으로도 취업할 수 있습니다.',
        keywords: ['재무분석가', '데이터 분석가', 'BI 전문가', '취업 직종'],
      },
      {
        question: '취업 지원 프로그램이 있나요?',
        answer:
          '네, 저희는 포트폴리오 제작 지원, 이력서 작성법 교육, 면접 준비, 기업 연계 취업 지원 등 다양한 취업 지원 프로그램을 운영하고 있습니다. 취업 상담사가 개별적으로 취업 준비를 도와드립니다.',
        keywords: ['취업 지원', '포트폴리오', '면접 준비', '기업 연계'],
      },
    ],
  },
  {
    category: '교육 과정',
    questions: [
      {
        question: 'POWER BI 외에 다른 프로그램도 배우나요?',
        answer:
          'POWER BI를 중심으로 Excel 고급 기능, SQL 기초, 데이터 시각화, 재무분석 기법 등을 종합적으로 학습합니다. 실무에서 바로 활용할 수 있는 실전 프로젝트도 포함되어 있습니다.',
        keywords: ['Excel', 'SQL', '데이터 시각화', '재무분석'],
      },
      {
        question: '실무 프로젝트가 포함되어 있나요?',
        answer:
          '네, 교육 과정의 50% 이상이 실무 프로젝트로 구성되어 있습니다. 실제 기업 데이터를 활용한 분석 프로젝트, 대시보드 구축, 보고서 작성 등 실무에서 바로 활용할 수 있는 경험을 쌓을 수 있습니다.',
        keywords: ['실무 프로젝트', '기업 데이터', '대시보드', '실전 경험'],
      },
      {
        question: '강사진은 어떤 분들인가요?',
        answer:
          '저희 강사진은 모두 해당 분야에서 10년 이상의 실무 경험을 보유한 전문가들입니다. 대기업 재무팀, 데이터 분석팀에서 근무한 경험을 바탕으로 실무 중심의 교육을 제공합니다.',
        keywords: ['전문 강사', '실무 경험', '대기업 출신', '전문가'],
      },
    ],
  },
  {
    category: '학원 정보',
    questions: [
      {
        question: '학원 위치와 교통편을 알려주세요.',
        answer:
          '경북 경산시 조영길 18-18(조영동) 1층에 위치해 있습니다. 경산시내버스, 대구 시내버스로 접근 가능하며, 주차 공간도 충분히 마련되어 있습니다. 자세한 교통편은 오시는길 페이지에서 확인하실 수 있습니다.',
        keywords: ['경산시 조영동', '교통편', '주차', '오시는길'],
      },
      {
        question: '수강 신청은 어떻게 하나요?',
        answer:
          '전화(053-818-5677) 또는 홈페이지의 무료 상담신청을 통해 신청하실 수 있습니다. 상담을 통해 적합한 과정을 추천해드리고, 수강 일정을 조율해드립니다. 온라인 상담도 가능합니다.',
        keywords: ['수강 신청', '상담 신청', '온라인 상담', '전화 상담'],
      },
      {
        question: '학원 운영 시간은 어떻게 되나요?',
        answer:
          '평일 오전 9시부터 오후 6시까지 운영됩니다. 토요일은 오전 9시부터 오후 1시까지 운영되며, 일요일은 휴무입니다. 상담은 평일 오전 9시부터 오후 6시까지 가능합니다.',
        keywords: ['운영시간', '상담시간', '평일', '토요일'],
      },
    ],
  },
];

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  // FAQ 항목 토글 함수
  const toggleItem = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className='max-w-4xl mx-auto'>
      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex} className='mb-12'>
          {/* 카테고리 제목 */}
          <h2 className='text-2xl font-bold text-white mb-6 border-b border-blue-500 pb-2'>
            {category.category}
          </h2>

          {/* 질문 목록 */}
          <div className='space-y-4'>
            {category.questions.map((item, questionIndex) => {
              const key = `${categoryIndex}-${questionIndex}`;
              const isOpen = openItems[key];

              return (
                <div
                  key={questionIndex}
                  className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden'
                >
                  {/* 질문 */}
                  <button
                    onClick={() => toggleItem(categoryIndex, questionIndex)}
                    className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-colors min-h-[56px]' // 접근성: 최소 56px 높이 보장
                    aria-label={`${item.question} ${
                      isOpen ? '접기' : '펼치기'
                    }`} // 접근성: 질문과 상태를 포함한 명확한 라벨
                    aria-expanded={isOpen} // 접근성: 펼침/접힘 상태 표시
                  >
                    <h3 className='text-lg font-semibold text-white pr-4'>
                      {item.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className='text-blue-400 shrink-0' size={24} />
                    ) : (
                      <ChevronDown
                        className='text-blue-400 shrink-0'
                        size={24}
                      />
                    )}
                  </button>

                  {/* 답변 */}
                  {isOpen && (
                    <div className='px-6 pb-4'>
                      <div className='border-t border-white/20 pt-4'>
                        <p className='text-gray-300 leading-relaxed'>
                          {item.answer}
                        </p>
                        {/* 키워드 태그 */}
                        <div className='flex flex-wrap gap-2 mt-4'>
                          {item.keywords.map((keyword, index) => (
                            <span
                              key={index}
                              className='px-2 py-1 bg-blue-600/30 text-blue-300 text-xs rounded-full'
                            >
                              #{keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
