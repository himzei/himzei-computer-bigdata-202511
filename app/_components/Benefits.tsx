// components/BenefitsSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import {
  DollarSign,
  Gift,
  BookOpen,
  Award,
  Briefcase,
  Users,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  CreditCard,
  GraduationCap,
  Building2,
  Clock,
  FileCheck,
  Laptop,
  Coffee,
  HeadphonesIcon,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // 총 혜택 금액 강조 div 애니메이션을 위한 ref
  const totalBenefitsRef = useRef<HTMLDivElement>(null);

  // 메인 혜택 카드들 애니메이션을 위한 ref
  const mainBenefitsCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 추가 혜택 카드들 애니메이션을 위한 ref
  const additionalBenefitsCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 메인 혜택 (국비지원)
  const mainBenefits = [
    {
      icon: DollarSign,
      title: '훈련비 전액 무료',
      subtitle: '100% 국비지원',
      amount: '100%',
      description: '정부 지원으로 교육비 전액 무료',
      highlight: '약 300만원 상당',
      color: 'from-green-500 to-emerald-500',
      badge: 'HOT',
    },
    {
      icon: Gift,
      title: '훈련수당 지급',
      subtitle: '매월 현금 지급',
      amount: '316,000원',
      description: '약 6개월간 매월 지급',
      highlight: '총 190만원',
      color: 'from-blue-500 to-cyan-500',
      badge: 'NEW',
    },
    {
      icon: TrendingUp,
      title: '구직촉진수당',
      subtitle: '취업 활동 지원',
      amount: '500,000원',
      description: '6개월간 지급',
      highlight: '총 300만원',
      color: 'from-purple-500 to-pink-500',
      badge: 'BEST',
    },
    {
      icon: BookOpen,
      title: '교재비 무료',
      subtitle: '모든 학습 자료 제공',
      amount: '0원',
      description: '실습 교재 및 자료 전액 지원',
      highlight: '약 50만원 상당',
      color: 'from-orange-500 to-red-500',
      badge: 'FREE',
    },
  ];

  // 추가 혜택
  const additionalBenefits = [
    {
      icon: Laptop,
      title: '최신 실습 장비',
      description: '개인별 고사양 PC 및 듀얼모니터 제공',
    },
    {
      icon: Award,
      title: '자격증 응시료 지원',
      description: '빅데이터분석기사, 컴활 1급 응시료 전액 지원',
    },
    {
      icon: Building2,
      title: '취업 연계',
      description: '협력 기업 200+ 취업 추천 및 면접 코칭',
    },
    {
      icon: Users,
      title: '1:1 멘토링',
      description: '전문 강사의 개인별 맞춤 학습 지도',
    },
    {
      icon: FileCheck,
      title: '수료증 발급',
      description: '정부 인증 수료증 및 포트폴리오 제공',
    },
    {
      icon: Coffee,
      title: '학습 편의시설',
      description: '무료 간식, 음료 및 휴게 공간 제공',
    },
    {
      icon: Clock,
      title: '유연한 일정',
      description: '평일반, 주말반 선택 가능',
    },
    {
      icon: HeadphonesIcon,
      title: '평생 학습 지원',
      description: '수료 후에도 온라인 학습자료 무제한 제공',
    },
  ];

  // 지원 자격
  const eligibility = [
    {
      title: '내일배움카드 소지자',
      description: '고용센터에서 발급받은 내일배움카드 소지자',
      icon: CreditCard,
    },
    {
      title: '실업자 (구직자)',
      description: '현재 구직 중이거나 실업 상태인 분',
      icon: Users,
    },
    {
      title: '취업 준비생',
      description: '졸업 예정자 또는 취업을 준비하는 분',
      icon: GraduationCap,
    },
    {
      title: '경력 전환 희망자',
      description: '새로운 분야로 이직을 준비하는 분',
      icon: Briefcase,
    },
  ];

  // GSAP 애니메이션 설정
  useEffect(() => {
    if (!totalBenefitsRef.current) return;

    // 총 혜택 금액 강조 div의 확대-축소-원래 크기 애니메이션
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: totalBenefitsRef.current,
        start: 'top 80%', // 요소가 화면의 80% 지점에 도달했을 때 시작
        end: 'bottom 20%',
        toggleActions: 'play none none reverse', // 스크롤 시 재생, 역방향 스크롤 시 역재생
      },
    });

    // 애니메이션 시퀀스: 확대 → 축소 → 원래 크기
    tl.to(totalBenefitsRef.current, {
      scale: 1.1, // 10% 확대
      duration: 0.3, // 0.8초 동안 확대
      ease: 'power2.out',
    })
      .to(totalBenefitsRef.current, {
        scale: 0.95, // 5% 축소
        duration: 0.3, // 0.6초 동안 축소
        ease: 'power2.inOut',
      })
      .to(totalBenefitsRef.current, {
        scale: 1, // 원래 크기로 복원
        duration: 0.3, // 0.8초 동안 원래 크기로
        ease: 'power2.out',
      });

    // 메인 혜택 카드들 애니메이션 설정
    if (mainBenefitsCardsRef.current.length > 0) {
      // 메인 혜택 카드들 초기 상태 (오른쪽에서 시작)
      gsap.set(mainBenefitsCardsRef.current, {
        x: 100, // 오른쪽에서 100px 떨어진 위치
        opacity: 0, // 투명하게 시작
      });

      // 각 메인 혜택 카드를 순차적으로 애니메이션 (오른쪽에서 왼쪽으로)
      mainBenefitsCardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            x: 0, // 원래 위치로 이동
            opacity: 1, // 완전히 보이게
            duration: 0.6, // 애니메이션 지속시간
            ease: 'power2.out', // 부드러운 이징
            delay: index * 0.15, // 각 카드마다 0.15초씩 지연
            scrollTrigger: {
              trigger: card,
              start: 'top 85%', // 요소가 화면의 85% 지점에 도달했을 때 시작
              end: 'bottom 15%',
              toggleActions: 'play none none reverse', // 스크롤 시 재생, 역방향 스크롤 시 역재생
            },
          });
        }
      });
    }

    // 추가 혜택 카드들 애니메이션 설정
    if (additionalBenefitsCardsRef.current.length > 0) {
      // 위쪽 4개 카드 (0-3번 인덱스) 초기 상태 (왼쪽에서 시작)
      gsap.set(additionalBenefitsCardsRef.current.slice(0, 4), {
        x: -100, // 왼쪽에서 100px 떨어진 위치
        opacity: 0, // 투명하게 시작
      });

      // 아래쪽 4개 카드 (4-7번 인덱스) 초기 상태 (오른쪽에서 시작)
      gsap.set(additionalBenefitsCardsRef.current.slice(4, 8), {
        x: 100, // 오른쪽에서 100px 떨어진 위치
        opacity: 0, // 투명하게 시작
      });

      // 위쪽 4개 카드 애니메이션 (왼쪽에서 오른쪽으로)
      additionalBenefitsCardsRef.current.slice(0, 4).forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            x: 0, // 원래 위치로 이동
            opacity: 1, // 완전히 보이게
            duration: 0.6, // 애니메이션 지속시간
            ease: 'power2.out', // 부드러운 이징
            delay: index * 0.1, // 각 카드마다 0.1초씩 지연
            scrollTrigger: {
              trigger: card,
              start: 'top 85%', // 요소가 화면의 85% 지점에 도달했을 때 시작
              end: 'bottom 15%',
              toggleActions: 'play none none reverse', // 스크롤 시 재생, 역방향 스크롤 시 역재생
            },
          });
        }
      });

      // 아래쪽 4개 카드 애니메이션 (오른쪽에서 왼쪽으로)
      additionalBenefitsCardsRef.current.slice(4, 8).forEach((card, index) => {
        if (card) {
          gsap.to(card, {
            x: 0, // 원래 위치로 이동
            opacity: 1, // 완전히 보이게
            duration: 0.6, // 애니메이션 지속시간
            ease: 'power2.out', // 부드러운 이징
            delay: index * 0.1, // 각 카드마다 0.1초씩 지연
            scrollTrigger: {
              trigger: card,
              start: 'top 85%', // 요소가 화면의 85% 지점에 도달했을 때 시작
              end: 'bottom 15%',
              toggleActions: 'play none none reverse', // 스크롤 시 재생, 역방향 스크롤 시 역재생
            },
          });
        }
      });
    }

    // 컴포넌트 언마운트 시 ScrollTrigger 정리
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id='benefits' className='relative py-20 overflow-hidden'>
      <div className='container mx-auto px-4 relative z-10'>
        {/* 화면 왼쪽 위에서 오른쪽 아래로 가는 사선 블러 효과 */}
        <div className='absolute top-1/6 left-0 w-full h-40 bg-blue-500/70 blur-2xl transform rotate-10 scale-200 -z-10' />
        <div className='absolute top-1/6 left-0 w-full h-40 bg-blue-500/70 blur-2xl transform rotate-170 scale-200 -z-10' />

        {/* 섹션 헤더 */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-green-400' />
            <span className='text-sm font-semibold text-green-400'>
              BENEFITS & SUPPORT
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='block'>파격적인 혜택으로</span>
            <span className='block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400'>
              부담 없이 시작하세요
            </span>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            정부 지원으로 교육비 걱정 없이, 오히려 수당을 받으며 배울 수
            있습니다
          </p>
        </div>

        {/* 총 혜택 금액 강조 */}
        <div className='mb-16 relative'>
          <div
            ref={totalBenefitsRef}
            className='max-w-4xl mx-auto bg-gradient-to-r from-green-600 via-emerald-600 to-cyan-600 rounded-3xl p-1'
          >
            <div className='bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12'>
              <div className='text-center'>
                <div className='inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-4 py-2 mb-6'>
                  <Star className='w-5 h-5 text-yellow-400' />
                  <span className='text-sm font-semibold text-yellow-400'>
                    최대 혜택 금액
                  </span>
                </div>

                <div className='text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 mb-4'>
                  약 800만원
                </div>

                <p className='text-gray-400 text-lg'>
                  교육비 + 훈련수당 + 구직촉진수당 + 교재비 포함
                </p>

                <div className='mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-300'>
                  <span className='flex items-center space-x-2'>
                    <CheckCircle2 className='w-4 h-4 text-green-400' />
                    <span>교육비 300만원</span>
                  </span>
                  <span className='flex items-center space-x-2'>
                    <CheckCircle2 className='w-4 h-4 text-green-400' />
                    <span>훈련수당 190만원</span>
                  </span>
                  <span className='flex items-center space-x-2'>
                    <CheckCircle2 className='w-4 h-4 text-green-400' />
                    <span>구직촉진수당 300만원</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 메인 혜택 카드 */}
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
          {mainBenefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => {
                mainBenefitsCardsRef.current[index] = el;
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              className='group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer'
            >
              {/* 배지 */}
              <div className='absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse'>
                {benefit.badge}
              </div>

              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity`}
              />

              <div className='relative z-10'>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-2xl font-bold text-white mb-2'>
                  {benefit.title}
                </h3>
                <p className='text-sm text-gray-400 mb-4'>{benefit.subtitle}</p>

                <div className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4'>
                  {benefit.amount}
                </div>

                <p className='text-gray-300 mb-3 text-sm leading-relaxed'>
                  {benefit.description}
                </p>

                <div
                  className={`inline-block bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent font-bold text-sm`}
                >
                  {benefit.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 구직촉진수당 안내 */}
        <div className='mb-20 max-w-4xl mx-auto'>
          <div className='bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-6'>
            <div className='flex items-start space-x-4'>
              <div className='flex-shrink-0 w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center'>
                <Sparkles className='w-6 h-6 text-yellow-400' />
              </div>
              <div className='flex-1'>
                <h4 className='text-lg font-bold text-white mb-2'>
                  💡 구직촉진수당 안내
                </h4>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  국민취업지원제도 1유형 대상자는 구직촉진수당 월 50만원 × 6개월
                  = 총 300만원을 지급받습니다.
                  <br />
                  <span className='text-yellow-400'>
                    ※ 국민취업지원제도 2유형은 구직촉진수당이 지급되지 않습니다.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 혜택 */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            이것만으로도 부족해서 더 준비했습니다
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {additionalBenefits.map((benefit, index) => (
              <div
                key={index}
                ref={el => {
                  additionalBenefitsCardsRef.current[index] = el;
                }}
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  <benefit.icon className='w-6 h-6 text-blue-400' />
                </div>

                <h4 className='text-lg font-bold text-white mb-2'>
                  {benefit.title}
                </h4>
                <p className='text-gray-400 text-sm leading-relaxed'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 지원 자격 */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-white text-center mb-4'>
            누가 신청할 수 있나요?
          </h3>
          <p className='text-gray-400 text-center mb-12 max-w-2xl mx-auto'>
            다음 조건 중 하나라도 해당되면 국비지원 교육을 받으실 수 있습니다
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
            {eligibility.map((item, index) => (
              <div
                key={index}
                className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 group'
              >
                <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform'>
                  <item.icon className='w-8 h-8 text-white' />
                </div>

                <h4 className='text-xl font-bold text-white mb-3 text-center'>
                  {item.title}
                </h4>
                <p className='text-gray-400 text-sm text-center leading-relaxed'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 신청 절차 */}
        <div className='mb-20'>
          <h3 className='text-3xl font-bold text-white text-center mb-12'>
            간단한 신청 절차
          </h3>

          <div className='max-w-5xl mx-auto relative'>
            {/* 연결선 */}
            <div className='hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-y-1/2' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10'>
              {[
                {
                  step: '01',
                  title: '상담 신청',
                  desc: '전화 또는 온라인으로 무료 상담 신청',
                  icon: HeadphonesIcon,
                },
                {
                  step: '02',
                  title: '자격 확인',
                  desc: '내일배움카드 발급 및 자격 요건 확인',
                  icon: FileCheck,
                },
                {
                  step: '03',
                  title: '과정 등록',
                  desc: 'HRD-Net에서 과정 신청 및 등록',
                  icon: CheckCircle2,
                },
                {
                  step: '04',
                  title: '교육 시작',
                  desc: '개강일에 맞춰 교육 시작!',
                  icon: GraduationCap,
                },
              ].map((item, index) => (
                <div key={index} className='text-center'>
                  <div className='relative inline-block mb-6'>
                    <div className='w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl'>
                      <item.icon className='w-10 h-10 text-white' />
                    </div>
                    <div className='absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-lg'>
                      {item.step}
                    </div>
                  </div>
                  <h4 className='text-xl font-bold text-white mb-3'>
                    {item.title}
                  </h4>
                  <p className='text-gray-400 text-sm'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className='text-center'>
          <div className='inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-3xl p-12 max-w-4xl'>
            <div className='mb-6'>
              <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-6'>
                <Gift className='w-10 h-10 text-white' />
              </div>
            </div>

            <h3 className='text-4xl font-bold text-white mb-4'>
              지금 신청하면 추가 혜택!
            </h3>

            <p className='text-gray-300 mb-8 text-lg'>
              선착순 10명에게 드리는 특별 혜택
              <br />
              <span className='text-green-400 font-bold'>
                컴퓨터활용능력시험/빅데이터분석기사/TAT1급 응시료 지원
              </span>
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='#contact'
                onClick={e => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className='inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50'
              >
                <span>지금 바로 신청하기</span>
                <Sparkles className='w-5 h-5' />
              </Link>

              <Link
                href='tel:053-818-5677'
                className='inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300'
              >
                <span>📞 전화 상담</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
