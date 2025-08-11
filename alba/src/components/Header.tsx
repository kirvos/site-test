'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gradient-to-r from-[var(--primary-color)]/90 to-[var(--secondary-color)]/90 backdrop-blur-md p-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-extrabold bg-gradient-to-r from-[#febf00] to-yellow-300 bg-clip-text text-transparent transition-all duration-300">
          <span className="hidden sm:inline">ALBA社会保険労務士法人</span>
          <span className="sm:hidden">ALBA</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/services" className="text-white hover:text-[#febf00] transition-colors duration-300">サービス</Link></li>
            <li><Link href="/case-studies" className="text-white hover:text-[#febf00] transition-colors duration-300">事例紹介</Link></li>
            <li><Link href="/blog" className="text-white hover:text-[#febf00] transition-colors duration-300">ブログ</Link></li>
            <li><Link href="/contact" className="bg-gradient-to-r from-[#febf00] to-yellow-300 text-[var(--primary-color)] px-5 py-2 rounded-full hover:bg-white hover:bg-gradient-to-r hover:from-yellow-300 hover:to-[#febf00] transition-all duration-300 font-bold">お問い合わせ</Link></li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-all duration-300 transform hover:scale-110"
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
                href="/services" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                サービス
              </Link>
            </li>
            <li>
              <Link 
                href="/case-studies" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                事例紹介
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block py-3 px-4 text-white hover:text-[#febf00] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                ブログ
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