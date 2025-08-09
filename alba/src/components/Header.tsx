'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-transparent backdrop-blur-md text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg sm:text-xl md:text-2xl font-extrabold text-[var(--accent-color)]">
          <span className="hidden sm:inline">ALBA社会保険労務士法人</span>
          <span className="sm:hidden">ALBA</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/" className="hover:text-[var(--secondary-color)] transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-[var(--secondary-color)] transition-colors">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-[var(--secondary-color)] transition-colors">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--secondary-color)] transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="bg-[var(--accent-color)] text-[var(--primary-color)] px-5 py-2 rounded-full hover:bg-white hover:text-[var(--accent-color)] transition-colors font-bold">お問い合わせ</Link></li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none transition-transform duration-200 transform hover:scale-110"
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
                className="block py-3 px-4 text-white hover:text-[var(--accent-color)] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className="block py-3 px-4 text-white hover:text-[var(--accent-color)] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/case-studies" 
                className="block py-3 px-4 text-white hover:text-[var(--accent-color)] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link 
                href="/blog" 
                className="block py-3 px-4 text-white hover:text-[var(--accent-color)] hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="block py-3 px-4 bg-[var(--accent-color)] text-[var(--primary-color)] hover:bg-white hover:text-[var(--accent-color)] rounded-lg transition-colors text-lg font-bold text-center"
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