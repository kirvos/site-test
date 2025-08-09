'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 各セクションの背景色設定
  const sectionBackgrounds = {
    hero: { dark: true },
    stats: { dark: true }, // 青いグラデーション
    services: { dark: false }, // グレー→白
    social: { dark: false }, // グレー→白
    reasons: { dark: false }, // 白→グレー
    news: { dark: false } // 白
  };

  useEffect(() => {
    const detectBackgroundColor = () => {
      const scrollY = window.scrollY + 100; // ヘッダーの位置を考慮
      const sections = document.querySelectorAll('section[data-snap]');
      
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        const rect = section.getBoundingClientRect();
        const sectionTop = scrollY - window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        
        // ヘッダーが現在のセクション内にあるかチェック
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          // セクションの背景色をチェック
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const isDark = isDarkColor(bgColor);
          setIsDarkBackground(isDark);
          return;
        }
      }
      
      // フォールバック: 簡単なスクロール位置ベースの判定
      const windowHeight = window.innerHeight;
      if (scrollY < windowHeight * 1.5) {
        setIsDarkBackground(true); // Hero + Stats sections
      } else {
        setIsDarkBackground(false); // Other sections
      }
    };
    
    // 色の明度を判定するヘルパー関数
    const isDarkColor = (color: string): boolean => {
      // rgb() 形式をパース
      const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (rgbMatch) {
        const [, r, g, b] = rgbMatch.map(Number);
        // 輝度を計算 (0.299*R + 0.587*G + 0.114*B)
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        return brightness < 128; // 128未満を暗い色と判定
      }
      
      // rgba() 形式をパース
      const rgbaMatch = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
      if (rgbaMatch) {
        const [, r, g, b] = rgbaMatch.map(Number);
        const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
        return brightness < 128;
      }
      
      // デフォルトは明るい色として処理
      return false;
    };

    detectBackgroundColor();
    window.addEventListener('scroll', detectBackgroundColor);
    window.addEventListener('resize', detectBackgroundColor);
    return () => {
      window.removeEventListener('scroll', detectBackgroundColor);
      window.removeEventListener('resize', detectBackgroundColor);
    };
  }, []);
  return (
    <header className="bg-transparent backdrop-blur-md p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#febf00] to-yellow-300 bg-clip-text text-transparent transition-all duration-300">
          <span className="hidden sm:inline">ALBA社会保険労務士法人</span>
          <span className="sm:hidden">ALBA</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/" className={`${isDarkBackground ? 'text-white hover:text-[#febf00]' : 'text-gray-800 hover:text-[#febf00]'} transition-all duration-300`}>Home</Link></li>
            <li><Link href="/services" className={`${isDarkBackground ? 'text-white hover:text-[#febf00]' : 'text-gray-800 hover:text-[#febf00]'} transition-all duration-300`}>Services</Link></li>
            <li><Link href="/case-studies" className={`${isDarkBackground ? 'text-white hover:text-[#febf00]' : 'text-gray-800 hover:text-[#febf00]'} transition-all duration-300`}>Case Studies</Link></li>
            <li><Link href="/blog" className={`${isDarkBackground ? 'text-white hover:text-[#febf00]' : 'text-gray-800 hover:text-[#febf00]'} transition-all duration-300`}>Blog</Link></li>
            <li><Link href="/contact" className="bg-gradient-to-r from-[#febf00] to-yellow-300 text-[var(--primary-color)] px-5 py-2 rounded-full hover:bg-white hover:bg-gradient-to-r hover:from-yellow-300 hover:to-[#febf00] transition-all duration-300 font-bold">お問い合わせ</Link></li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className={`${isDarkBackground ? 'text-white' : 'text-gray-800'} focus:outline-none transition-all duration-300 transform hover:scale-110`}
          >
            <svg 
              className={`w-8 h-8 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed top-16 left-0 right-0 bg-[var(--primary-color)]/95 backdrop-blur-md transition-all duration-300 ease-in-out z-40 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/case-studies" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block py-3 px-4 bg-gradient-to-r from-[#febf00] to-yellow-300 text-[var(--primary-color)] hover:bg-gradient-to-r hover:from-yellow-300 hover:to-[#febf00] rounded-lg transition-all duration-300 text-lg font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}