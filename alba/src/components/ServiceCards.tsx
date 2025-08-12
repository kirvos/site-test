import Link from 'next/link';

const services = [
  { 
    title: '社会保険アウトソーシング', 
    href: '/services/social-insurance', 
    description: '社会保険手続きの煩雑さを解消し、業務効率化を支援します。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-purple-600'
  },
  { 
    title: 'スポット手続き代行', 
    href: '/services/spot-procedure', 
    description: '必要な時に必要な手続きを迅速に代行。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    gradient: 'from-green-500 to-teal-600'
  },
  { 
    title: '助成金・補助金申請代行', 
    href: '/services/subsidy', 
    description: '複雑な助成金・補助金申請をサポートし、受給を最大化します。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-600'
  },
  { 
    title: '自治体向けBPOサービス', 
    href: '/services/bpo', 
    description: '自治体特有のニーズに合わせたBPOサービスを提供します。',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-600'
  },
];

export default function ServiceCards() {
  return (
    <section className="snap-start min-h-[100svh] bg-gradient-to-br from-gray-50 to-white relative overflow-hidden pt-32 sm:pt-28 md:pt-24 pb-8" data-snap>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--accent-color)] to-[var(--accent-secondary)] animate-float delay-500 transform rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col justify-center min-h-[100svh]">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            サービス
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto px-4">
            お客様のニーズに合わせた専門的なサービスをご提供します
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4">
          {services.map((service, index) => (
            <Link 
              key={service.title} 
              href={service.href} 
              className={`group block modern-card p-4 sm:p-6 lg:p-8 relative overflow-hidden animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon container with gradient background */}
              <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-[var(--primary-color)] text-center group-hover:text-[var(--accent-color)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Arrow indicator */}
              <div className="relative z-10 flex justify-center mt-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}