// components/TestimonialsSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Award,
  Briefcase,
  ThumbsUp,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  // 실제같은 수강후기 데이터
  const testimonials = [
    {
      id: 1,
      name: '김민준',
      age: 28,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 6월 수료',
      beforeJob: '카페 아르바이트',
      afterJob: '대구 소재 IT기업 데이터 분석가',
      salary: '연봉 3,200만원 → 4,500만원',
      rating: 5,
      image: '👨‍💼',
      content:
        '비전공자에 컴퓨터 기초도 부족했는데, 강사님이 정말 쉽게 가르쳐주셨어요. Power BI는 처음 들어봤는데 3개월 만에 실무에서 바로 쓸 수 있을 정도로 성장했습니다. 무엇보다 취업까지 도와주셔서 지금은 안정적인 직장에서 일하고 있어요!',
      tags: ['비전공자', '취업성공', '연봉상승'],
      highlight: '3개월 만에 IT기업 취업!',
    },
    {
      id: 2,
      name: '이서연',
      age: 25,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 8월 수료',
      beforeJob: '대학 졸업 예정자',
      afterJob: '경산 소재 제조기업 품질관리팀',
      salary: '초봉 3,800만원',
      rating: 5,
      image: '👩‍💼',
      content:
        '졸업 전에 취업 걱정이 많았는데, 이 과정 덕분에 졸업하자마자 바로 취업했어요. 특히 실제 기업 데이터로 프로젝트를 해봐서 면접 때 정말 도움이 많이 됐습니다. 포트폴리오가 탄탄해서 3곳에서 동시에 합격 통보를 받았어요!',
      tags: ['신입취업', '포트폴리오', '복수합격'],
      highlight: '졸업 전 3곳 동시 합격!',
    },
    {
      id: 3,
      name: '박준호',
      age: 32,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 5월 수료',
      beforeJob: '제조업 생산직 5년',
      afterJob: '포항 소재 철강회사 데이터팀',
      salary: '연봉 3,000만원 → 4,800만원',
      rating: 5,
      image: '👨‍🔧',
      content:
        '30대 중반에 전직을 결심하고 국비지원으로 배웠는데 정말 잘한 선택이었어요. 수당도 받으면서 공부할 수 있어서 생활비 걱정 없이 집중할 수 있었습니다. 지금은 사무직으로 일하면서 워라밸도 챙기고 있어요. 인생이 바뀌었습니다!',
      tags: ['경력전환', '30대', '생산직→사무직'],
      highlight: '생산직에서 데이터 전문가로!',
    },
    {
      id: 4,
      name: '최지우',
      age: 27,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 7월 수료',
      beforeJob: '회계사무소 실무자',
      afterJob: '대구 소재 회계법인 재무분석팀',
      salary: '연봉 3,500만원 → 5,200만원',
      rating: 5,
      image: '👩‍💻',
      content:
        '회계 일을 하면서 데이터 분석 능력이 필요하다고 느꼈어요. Power BI를 배우고 나서 업무 효율이 3배는 올라간 것 같아요. 회사에서도 인정받아서 승진하고 연봉도 많이 올랐습니다. 실무에 바로 적용 가능한 커리큘럼이 최고예요!',
      tags: ['실무활용', '업무효율', '승진'],
      highlight: '업무 효율 300% UP!',
    },
    {
      id: 5,
      name: '정태민',
      age: 24,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 9월 수료',
      beforeJob: '편의점 알바',
      afterJob: '스타트업 데이터 분석 인턴',
      salary: '시급 9,620원 → 연봉 3,600만원',
      rating: 5,
      image: '👨‍🎓',
      content:
        '고졸이라 취업이 막막했는데, 이 과정 듣고 인생이 바뀌었어요. 학력보다 실력이 중요하다는 걸 느꼈습니다. 강사님들이 포트폴리오 만드는 것부터 이력서, 면접까지 전부 도와주셔서 자신감이 생겼어요. 지금은 스타트업에서 정규직 전환 준비 중입니다!',
      tags: ['고졸', '알바→정규직', '스타트업'],
      highlight: '고졸 → 스타트업 인턴 합격!',
    },
    {
      id: 6,
      name: '한소희',
      age: 29,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 4월 수료',
      beforeJob: '육아휴직 경력단절',
      afterJob: '경산 소재 유통업체 마케팅팀',
      salary: '연봉 4,000만원',
      rating: 5,
      image: '👩‍🍼',
      content:
        '아이를 키우면서 3년간 경력이 단절됐는데, 이 과정 덕분에 다시 취업할 수 있었어요. 유연한 시간 관리가 가능해서 육아와 병행할 수 있었고, 수당도 받아서 경제적으로도 도움이 됐습니다. 지금은 재택근무도 하면서 일과 가정을 잘 양립하고 있어요!',
      tags: ['경력단절', '워킹맘', '재취업'],
      highlight: '3년 경력단절 극복!',
    },
    {
      id: 7,
      name: '강동현',
      age: 26,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 10월 수료',
      beforeJob: '군 전역 후 백수',
      afterJob: '대구 소재 병원 의료데이터팀',
      salary: '연봉 3,700만원',
      rating: 5,
      image: '🎖️',
      content:
        '전역하고 뭘 해야 할지 몰라서 방황했는데, 친구 추천으로 이 과정을 듣게 됐어요. 국비지원이라 부담도 없고, 수당까지 받으면서 새로운 기술을 배울 수 있어서 정말 좋았습니다. 의료 데이터 분석이라는 전문 분야에서 일하게 돼서 너무 뿌듯해요!',
      tags: ['전역자', '의료분야', '전문직'],
      highlight: '전역 후 6개월 만에 취업!',
    },
    {
      id: 8,
      name: '윤채원',
      age: 31,
      course: 'Power BI 빅데이터 분석가 과정',
      period: '2024년 3월 수료',
      beforeJob: '호텔 프론트 데스크',
      afterJob: '여행사 매출분석팀 팀장',
      salary: '연봉 3,300만원 → 5,500만원',
      rating: 5,
      image: '👩‍✈️',
      content:
        '서비스직에서 일하다가 30대에 새로운 도전을 했는데 대성공이었어요! 특히 관광업계 경험과 데이터 분석 능력을 결합하니까 시너지가 엄청났어요. 회사에서도 능력을 인정받아서 1년 만에 팀장으로 승진했습니다. 늦었다고 생각 말고 도전하세요!',
      tags: ['서비스직', '팀장승진', '연봉급상승'],
      highlight: '1년 만에 팀장 승진!',
    },
  ];

  // 자동 슬라이드
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  // 통계 데이터
  const stats = [
    { icon: ThumbsUp, number: '98%', label: '수강생 만족도' },
    { icon: Briefcase, number: '85%', label: '취업 성공률' },
    { icon: TrendingUp, number: '150+', label: '누적 수료생' },
    { icon: Award, number: '4.9/5.0', label: '평균 평점' },
  ];

  return (
    <section
      id='reviews'
      className='relative py-20 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden'
    >
      {/* 배경 장식 */}
      <div className='absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        {/* 섹션 헤더 */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-yellow-400' />
            <span className='text-sm font-semibold text-yellow-400'>
              SUCCESS STORIES
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='block'>수강생들의</span>
            <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400'>
              생생한 변화 스토리
            </span>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            실제 수강생들이 경험한 놀라운 변화를 확인해보세요
          </p>
        </div>

        {/* 통계 */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto'>
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300'
            >
              <stat.icon className='w-8 h-8 text-yellow-400 mx-auto mb-4' />
              <div className='text-3xl font-bold text-white mb-2'>
                {stat.number}
              </div>
              <div className='text-sm text-gray-400'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 메인 슬라이드 */}
        <div className='relative max-w-6xl mx-auto mb-12'>
          <div className='overflow-hidden'>
            <div
              ref={slideRef}
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className='w-full flex-shrink-0 px-4'>
                  <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12 relative overflow-hidden'>
                    {/* 배경 장식 */}
                    <div className='absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl' />

                    {/* 인용부호 */}
                    <Quote className='absolute top-8 right-8 w-16 h-16 text-yellow-500/20' />

                    <div className='relative z-10'>
                      <div className='flex flex-col lg:flex-row gap-8'>
                        {/* 왼쪽: 프로필 */}
                        <div className='lg:w-1/3'>
                          <div className='text-center lg:text-left'>
                            {/* 아바타 */}
                            <div className='inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-5xl mb-4'>
                              {testimonial.image}
                            </div>

                            {/* 이름 & 나이 */}
                            <h3 className='text-2xl font-bold text-white mb-2'>
                              {testimonial.name} ({testimonial.age}세)
                            </h3>

                            {/* 수료 기간 */}
                            <p className='text-sm text-gray-400 mb-4'>
                              {testimonial.period}
                            </p>

                            {/* 별점 */}
                            <div className='flex justify-center lg:justify-start gap-1 mb-6'>
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className='w-5 h-5 fill-yellow-400 text-yellow-400'
                                />
                              ))}
                            </div>

                            {/* 하이라이트 */}
                            <div className='inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-4'>
                              <span className='text-sm font-bold text-yellow-400'>
                                {testimonial.highlight}
                              </span>
                            </div>

                            {/* 태그 */}
                            <div className='flex flex-wrap gap-2 justify-center lg:justify-start'>
                              {testimonial.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className='bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 text-xs text-gray-300'
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* 오른쪽: 후기 내용 */}
                        <div className='lg:w-2/3'>
                          {/* 후기 텍스트 */}
                          <p className='text-gray-300 text-lg leading-relaxed mb-6'>
                            "{testimonial.content}"
                          </p>

                          {/* 변화 정보 */}
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4'>
                              <div className='text-sm text-gray-400 mb-1'>
                                교육 전
                              </div>
                              <div className='text-white font-semibold'>
                                {testimonial.beforeJob}
                              </div>
                            </div>

                            <div className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4'>
                              <div className='text-sm text-green-400 mb-1'>
                                교육 후
                              </div>
                              <div className='text-white font-semibold flex items-center'>
                                {testimonial.afterJob}
                                <CheckCircle2 className='w-5 h-5 text-green-400 ml-2' />
                              </div>
                            </div>
                          </div>

                          {/* 연봉 정보 */}
                          {testimonial.salary && (
                            <div className='mt-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4'>
                              <div className='flex items-center justify-between'>
                                <div className='text-sm text-gray-400'>
                                  연봉 변화
                                </div>
                                <TrendingUp className='w-5 h-5 text-green-400' />
                              </div>
                              <div className='text-white font-bold text-lg mt-2'>
                                {testimonial.salary}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 네비게이션 버튼 */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110'
            aria-label='이전 후기'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>

          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110'
            aria-label='다음 후기'
          >
            <ChevronRight className='w-6 h-6' />
          </button>
        </div>

        {/* 인디케이터 */}
        <div className='flex justify-center gap-2 mb-16'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-gradient-to-r from-yellow-500 to-orange-500'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`${index + 1}번 후기로 이동`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className='text-center'>
          <div className='inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-3xl p-12 max-w-4xl'>
            <h3 className='text-4xl font-bold text-white mb-4'>
              당신도 성공 스토리의 주인공이 될 수 있습니다
            </h3>

            <p className='text-gray-300 mb-8 text-lg'>
              3개월 뒤, 당신의 변화된 모습을 기대해주세요
            </p>

            <Link
              href='#contact'
              onClick={e => {
                e.preventDefault();
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className='inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/50'
            >
              <span>나도 변화하고 싶다면</span>
              <Sparkles className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
