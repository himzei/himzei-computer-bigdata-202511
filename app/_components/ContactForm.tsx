// components/ContactFormSection.tsx
'use client';

import { useState } from 'react';
import {
  Send,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 에러 상태 관리
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
  });

  const courses = [
    'POWER BI 기반의 재무빅데이터 분석사 사무관리원 양성과정[2025년 10월 31일 개강]',
    '컴퓨터활용능력 1급 과정[2025년 12월 개강예정]',
    '기타 문의',
  ];

  // 유효성 검사 함수들
  const validateName = (name: string): string => {
    if (!name.trim()) return '이름을 입력해주세요.';
    if (name.trim().length < 2) return '이름은 2글자 이상 입력해주세요.';
    if (!/^[가-힣a-zA-Z\s]+$/.test(name.trim()))
      return '이름은 한글 또는 영문만 입력 가능합니다.';
    return '';
  };

  const validatePhone = (phone: string): string => {
    if (!phone.trim()) return '연락처를 입력해주세요.';
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone.trim()))
      return '연락처는 010-0000-0000 형식으로 입력해주세요.';
    return '';
  };

  const validateEmail = (email: string): string => {
    if (!email.trim()) return ''; // 이메일은 선택사항
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim()))
      return '올바른 이메일 형식을 입력해주세요.';
    return '';
  };

  const validateCourse = (course: string): string => {
    if (!course.trim()) return '상담 희망 과정을 선택해주세요.';
    return '';
  };

  // 개별 필드 유효성 검사
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return validateName(value);
      case 'phone':
        return validatePhone(value);
      case 'email':
        return validateEmail(value);
      case 'course':
        return validateCourse(value);
      default:
        return '';
    }
  };

  // 전체 폼 유효성 검사
  const validateForm = (): boolean => {
    const newErrors = {
      name: validateName(formData.name),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
      course: validateCourse(formData.course),
    };

    setErrors(newErrors);

    // 모든 에러가 비어있으면 유효함
    return Object.values(newErrors).every(error => error === '');
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // 폼 데이터 업데이트
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // 실시간 유효성 검사
    const errorMessage = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 폼 유효성 검사
    if (!validateForm()) {
      return; // 유효하지 않으면 제출하지 않음
    }

    setIsSubmitting(true);

    try {
      // 실제 API 호출
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // 성공 시
        setIsSuccess(true);
        console.log('이메일 전송 성공:', result.message);

        // 3초 후 폼 초기화
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: '',
            phone: '',
            email: '',
            course: '',
            message: '',
          });
          // 에러 상태도 초기화
          setErrors({
            name: '',
            phone: '',
            email: '',
            course: '',
          });
        }, 3000);
      } else {
        // 실패 시
        console.error('이메일 전송 실패:', result.error);
        alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      // 네트워크 오류 등
      console.error('네트워크 오류:', error);
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact' className='relative py-20 overflow-hidden'>
      {/* 배경 장식 */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl' />
      <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl' />

      <div className='container mx-auto px-4 relative z-10'>
        {/* 섹션 헤더 */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6'>
            <Sparkles className='w-4 h-4 text-purple-400' />
            <span className='text-sm font-semibold text-purple-400'>
              CONTACT US
            </span>
          </div>

          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            <span className='block'>무료 상담 신청</span>
          </h2>

          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            간단한 정보만 남겨주시면 전문 상담원이 빠르게 연락드리겠습니다
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12'>
            {isSuccess ? (
              // 성공 메시지
              <div className='text-center py-12'>
                <div className='w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 animate-bounce'>
                  <CheckCircle2 className='w-10 h-10 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-white mb-4'>
                  신청이 완료되었습니다!
                </h3>
                <p className='text-gray-300 text-lg mb-2'>
                  빠른 시일 내에 연락드리겠습니다.
                </p>
                <p className='text-gray-400'>감사합니다 😊</p>
              </div>
            ) : (
              // 상담 신청 폼
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* 이름 */}
                <div>
                  <label
                    htmlFor='name'
                    className='block text-white font-semibold mb-3 flex items-center space-x-2'
                  >
                    <User className='w-5 h-5 text-purple-400' />
                    <span>이름 *</span>
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder='홍길동'
                    className={`w-full bg-white/5 backdrop-blur-sm border rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-purple-500 focus:ring-purple-500/50'
                    }`}
                  />
                  {errors.name && (
                    <p className='text-red-400 text-sm mt-2 flex items-center space-x-1'>
                      <span className='text-red-500'>⚠</span>
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* 연락처 */}
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-white font-semibold mb-3 flex items-center space-x-2'
                  >
                    <Phone className='w-5 h-5 text-green-400' />
                    <span>연락처 *</span>
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder='010-1234-5678'
                    pattern='[0-9]{3}-[0-9]{4}-[0-9]{4}'
                    className={`w-full bg-white/5 backdrop-blur-sm border rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-green-500 focus:ring-green-500/50'
                    }`}
                  />
                  {errors.phone && (
                    <p className='text-red-400 text-sm mt-2 flex items-center space-x-1'>
                      <span className='text-red-500'>⚠</span>
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* 이메일 */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-white font-semibold mb-3 flex items-center space-x-2'
                  >
                    <Mail className='w-5 h-5 text-blue-400' />
                    <span>이메일</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='example@email.com'
                    className={`w-full bg-white/5 backdrop-blur-sm border rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-blue-500 focus:ring-blue-500/50'
                    }`}
                  />
                  {errors.email && (
                    <p className='text-red-400 text-sm mt-2 flex items-center space-x-1'>
                      <span className='text-red-500'>⚠</span>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* 과정 선택 */}
                <div>
                  <label
                    htmlFor='course'
                    className='block text-white font-semibold mb-3 flex items-center space-x-2'
                  >
                    <Calendar className='w-5 h-5 text-yellow-400' />
                    <span>상담 희망 과정 *</span>
                  </label>
                  <select
                    id='course'
                    name='course'
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className={`w-full bg-white/5 backdrop-blur-sm border rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
                      errors.course
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50'
                        : 'border-white/20 focus:border-yellow-500 focus:ring-yellow-500/50'
                    }`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '3rem',
                    }}
                  >
                    <option value='' className='bg-gray-900'>
                      과정을 선택해주세요
                    </option>
                    {courses.map((course, index) => (
                      <option
                        key={index}
                        value={course}
                        className='bg-gray-900'
                      >
                        {course}
                      </option>
                    ))}
                  </select>
                  {errors.course && (
                    <p className='text-red-400 text-sm mt-2 flex items-center space-x-1'>
                      <span className='text-red-500'>⚠</span>
                      <span>{errors.course}</span>
                    </p>
                  )}
                </div>

                {/* 문의사항 */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-white font-semibold mb-3 flex items-center space-x-2'
                  >
                    <MessageSquare className='w-5 h-5 text-pink-400' />
                    <span>문의사항</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder='궁금하신 내용을 자유롭게 작성해주세요'
                    className='w-full bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/50 transition-all resize-none'
                  ></textarea>
                </div>

                {/* 개인정보 수집 동의 */}
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5'>
                  <div className='flex items-start space-x-3'>
                    <input
                      type='checkbox'
                      id='privacy'
                      required
                      className='mt-1 w-5 h-5 rounded border-gray-500 text-purple-600 focus:ring-purple-500'
                    />
                    <label
                      htmlFor='privacy'
                      className='text-gray-300 text-sm leading-relaxed'
                    >
                      <span className='font-semibold text-white'>[필수]</span>{' '}
                      개인정보 수집 및 이용에 동의합니다.
                      <br />
                      <span className='text-gray-500'>
                        수집항목: 이름, 연락처, 이메일 | 이용목적: 상담 및 교육
                        안내 | 보유기간: 상담 완료 후 3개월
                      </span>
                    </label>
                  </div>
                </div>

                {/* 제출 버튼 */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-5 rounded-xl font-bold text-lg hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin'></div>
                      <span>신청 중...</span>
                    </>
                  ) : (
                    <>
                      <Send className='w-6 h-6' />
                      <span>무료 상담 신청하기</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {/* 하단 안내 */}
            {!isSuccess && (
              <div className='mt-8 text-center'>
                <p className='text-gray-400 text-sm mb-4'>
                  또는 전화로 직접 상담받으세요
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link
                    href='tel:053-818-5677'
                    className='inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all'
                  >
                    <Phone className='w-5 h-5' />
                    <span>053-818-5677</span>
                  </Link>
                  <Link
                    href='tel:010-7186-0119'
                    className='inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all'
                  >
                    <Phone className='w-5 h-5' />
                    <span>010-7186-0119</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
