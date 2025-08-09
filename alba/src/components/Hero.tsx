'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center text-white" data-snap>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] via-[#002A5E] to-[var(--secondary-color)]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--accent-color)]/20 to-white/10 animate-pulse transform -translate-x-4 translate-y-4" style={{transform: `translateY(${scrollY * 0.5}px)`}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--secondary-color)]/30 to-white/10 animate-bounce delay-300 transform rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-white/10 to-[var(--accent-color)]/20 animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-lg bg-gradient-to-l from-[var(--primary-color)]/40 to-white/20 animate-bounce delay-500 transform -rotate-12"></div>
      </div>

      {/* Parallax content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
        <div className="animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
              人事労務の課題を、
            </span>
            <br className="md:hidden"/>
            <span className="bg-gradient-to-r from-[#febf00] to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl">
              プロが一括解決
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-in-up delay-300">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
            ALBA社会保険労務士法人は、複雑な人事労務の課題に対し、<br/>
            <span className="text-[#febf00] font-semibold">最適なソリューション</span>を提供し、貴社の成長を強力にサポートします。
          </p>
        </div>
        
        <div className="animate-fade-in-up delay-500">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-[#febf00] to-yellow-400 text-[var(--primary-color)] text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:shadow-[#febf00]/25 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 relative overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">無料相談はこちら</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#febf00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a
              href="/downloads"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-lg sm:text-xl font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-2xl hover:bg-white hover:text-[var(--primary-color)] transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 w-full sm:w-auto"
            >
              <span className="relative z-10">資料ダウンロード</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle animated waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 500,80 C650,160 850,60 1200,20 L1200,120 L0,120 Z" className="fill-white animate-pulse"></path>
        </svg>
      </div>
    </section>
  );
}