// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '과정소개', href: '#course' },
    { name: '커리큘럼', href: '#curriculum' },
    { name: '수강혜택', href: '#benefits' },
    { name: '수강후기', href: '#reviews' },
    { name: '수강안내', href: '#info' },
    { name: '오시는길', href: '#location' },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-20'>
          {/* 로고 */}
          <Link href='/' className='flex items-center space-x-1'>
            <Image
              src='/images/logo.webp'
              alt='한국산업인재육성학원'
              width={60}
              height={60}
            />
            <div className='flex flex-col group'>
              <span
                className={`text-xl font-bold transition-colors duration-300 group-hover:text-white ${
                  isScrolled ? 'text-gray-200/60' : 'text-gray-200'
                }`}
              >
                한국산업인재육성학원
              </span>
              <span
                className={`text-xs px-0.5 transition-colors duration-300 group-hover:text-white ${
                  isScrolled ? 'text-gray-200/60' : 'text-gray-200'
                }`}
              >
                대구 회계·세무·컴퓨터학원
              </span>
            </div>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className='hidden lg:flex items-center space-x-8'>
            {menuItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={e => scrollToSection(e, item.href)}
                className={` hover:text-white font-medium transition-colors duration-200 relative group ${
                  isScrolled ? 'text-gray-200/60' : 'text-gray-200'
                }`}
              >
                {item.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-200'></span>
              </Link>
            ))}
          </nav>

          {/* CTA 버튼 */}
          <div className='hidden lg:flex items-center space-x-4'>
            <Link
              href='tel:053-123-4567'
              className={`flex items-center space-x-2 hover:text-white transition-colors duration-300 ${
                isScrolled ? 'text-gray-200/60' : 'text-gray-200'
              }`}
            >
              <Phone size={18} />
              <span
                className={`font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-gray-200/60' : 'text-gray-200'
                }`}
              >
                053-818-5677
              </span>
            </Link>
            <Link
              href='#contact'
              onClick={e => scrollToSection(e, '#contact')}
              className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl'
            >
              무료 상담신청
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
            aria-label='메뉴 열기'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className='lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t'>
            <nav className='flex flex-col p-4 space-y-3'>
              {menuItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={e => scrollToSection(e, item.href)}
                  className='text-gray-700 hover:text-blue-600 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg transition-all'
                >
                  {item.name}
                </Link>
              ))}
              <div className='pt-4 border-t space-y-3'>
                <Link
                  href='tel:053-123-4567'
                  className='flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-600 py-2'
                >
                  <Phone size={18} />
                  <span className='font-semibold'>053-123-4567</span>
                </Link>
                <Link
                  href='#contact'
                  onClick={e => scrollToSection(e, '#contact')}
                  className='block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all'
                >
                  무료 상담신청
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
