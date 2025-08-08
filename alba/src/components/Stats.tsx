'use client';
import { useEffect, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
  icon: React.ReactElement;
  gradient: string;
  description: string;
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats: StatItem[] = [
    {
      value: '1,000+',
      label: '顧客企業数',
      description: '信頼いただいている企業様',
      gradient: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
    },
    {
      value: '99%',
      label: '継続率',
      description: 'お客様満足の証',
      gradient: 'from-emerald-500 to-teal-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
    },
    {
      value: '50,000+',
      label: '年間手続き件数',
      description: '豊富な処理実績',
      gradient: 'from-purple-500 to-indigo-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
    },
    {
      value: '100+',
      label: '助成金採択実績',
      description: '成功事例の積み重ね',
      gradient: 'from-amber-500 to-orange-500',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/5 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-white/10 animate-pulse delay-700"></div>
        <div className="absolute top-20 left-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-transparent animate-float"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            数字で見るALBAの実績
          </h2>
          <p className="text-white/80 text-lg">
            お客様に選ばれ続ける理由がここにあります
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
              
              {/* Icon */}
              <div className={`relative z-10 mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} text-white transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                {stat.icon}
              </div>
              
              {/* Value */}
              <div className="relative z-10 mb-3">
                <p className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent transform ${isVisible ? 'scale-100' : 'scale-0'} transition-transform duration-700 delay-${(index + 1) * 200}`}>
                  {stat.value}
                </p>
              </div>
              
              {/* Label */}
              <div className="relative z-10">
                <p className="text-white font-semibold text-lg mb-2">
                  {stat.label}
                </p>
                <p className="text-white/70 text-sm">
                  {stat.description}
                </p>
              </div>
              
              {/* Hover indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom decoration */}
        <div className="mt-12 text-center animate-fade-in-up delay-700">
          <div className="inline-flex items-center space-x-2 text-white/60">
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <span className="text-sm">2024年12月現在</span>
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}