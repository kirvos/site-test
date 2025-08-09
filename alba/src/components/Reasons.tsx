'use client';
import { useState } from 'react';

export default function Reasons() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const reasons = [
    {
      title: '専門性と実績',
      description: '長年の経験と豊富な実績を持つ専門家が、貴社の課題解決をサポートします。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      gradient: 'from-amber-400 to-orange-500',
      stats: '15年以上',
      statsLabel: 'の実績'
    },
    {
      title: 'オーダーメイドの提案',
      description: '画一的なサービスではなく、貴社の状況に合わせた最適なソリューションを提案します。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z"/>
        </svg>
      ),
      gradient: 'from-emerald-400 to-teal-500',
      stats: '100%',
      statsLabel: 'カスタマイズ対応'
    },
    {
      title: '迅速かつ丁寧な対応',
      description: 'お客様のニーズに迅速に対応し、きめ細やかなサポートを提供します。',
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      gradient: 'from-blue-400 to-indigo-500',
      stats: '24時間以内',
      statsLabel: '初回回答'
    },
  ];

  return (
    <section className="h-screen bg-gradient-to-b from-white to-gray-50 relative overflow-hidden flex items-center justify-center" data-snap>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-secondary)] blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            選ばれる理由
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            ALBA社会保険労務士法人が多くのお客様から信頼いただいている理由をご紹介します
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`group modern-card p-8 text-center relative overflow-hidden cursor-pointer animate-fade-in-up delay-${(index + 1) * 200} ${activeCard === index ? 'scale-105' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:scale-110`}></div>
              
              {/* Icon with animated glow effect */}
              <div className={`relative z-10 mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${reason.gradient} text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-glow`}>
                {reason.icon}
              </div>
              
              {/* Stats badge */}
              <div className={`relative z-10 inline-block px-6 py-2 mb-4 rounded-full bg-gradient-to-r ${reason.gradient} text-white font-bold text-sm transform group-hover:scale-105 transition-transform duration-300`}>
                {reason.stats} <span className="font-normal opacity-90">{reason.statsLabel}</span>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-secondary)] opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up delay-700">
          <div className="inline-flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-teal-600 border-2 border-white"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 border-2 border-white"></div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-[var(--primary-color)]">1,000社以上の実績</p>
              <p className="text-sm text-[var(--text-muted)]">お客様満足度98%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}