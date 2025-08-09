export default function SocialProof() {
  const testimonials = [
    {
      quote: "ALBAさんのおかげで、複雑な社会保険手続きがスムーズになり、本業に集中できるようになりました。",
      author: "田中 様",
      company: "製造業A社",
      role: "人事部長"
    },
    {
      quote: "助成金申請で大きな成果を上げることができ、事業拡大の資金調達に成功しました。",
      author: "佐藤 様", 
      company: "IT企業B社",
      role: "代表取締役"
    },
    {
      quote: "迅速で丁寧な対応により、急な手続きにも柔軟に対応していただけて助かっています。",
      author: "鈴木 様",
      company: "サービス業C社", 
      role: "総務課長"
    }
  ];

  const industryLogos = [
    { name: "製造業", count: "300+" },
    { name: "IT・通信", count: "200+" },
    { name: "建設業", count: "150+" },
    { name: "小売業", count: "180+" },
    { name: "サービス業", count: "170+" },
  ];

  return (
    <section className="h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden flex items-center justify-center" data-snap>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--accent-color)] to-[var(--accent-secondary)] animate-pulse delay-700 transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Testimonials Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            お客様の声
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--text-muted)] max-w-2xl mx-auto px-4">
            実際にご利用いただいているお客様からの評価をご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20 px-4">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`modern-card p-8 relative overflow-hidden animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-[var(--primary-color)]/10">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Quote */}
              <blockquote className="text-[var(--text-muted)] leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[var(--primary-color)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--text-muted)]">{testimonial.company} {testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="text-center mb-12 animate-fade-in-up delay-400">
          <h3 className="text-3xl font-bold mb-6 text-[var(--primary-color)]">
            幅広い業界でご利用いただいています
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 px-4">
          {industryLogos.map((industry, index) => (
            <div 
              key={index} 
              className={`group modern-card p-6 text-center hover:bg-gradient-to-br hover:from-[var(--primary-color)]/5 hover:to-[var(--secondary-color)]/5 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Industry icon placeholder */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              
              <h4 className="font-bold text-[var(--primary-color)] mb-2">{industry.name}</h4>
              <p className="text-2xl font-extrabold text-[var(--accent-color)] mb-1">{industry.count}</p>
              <p className="text-sm text-[var(--text-muted)]">導入企業</p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-fade-in-up delay-700">
          <div className="inline-flex items-center space-x-8 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="font-semibold text-[var(--primary-color)]">5.0</span>
              <span className="text-[var(--text-muted)] text-sm">お客様満足度</span>
            </div>
            
            <div className="w-px h-12 bg-gray-200"></div>
            
            <div className="text-center">
              <p className="font-bold text-2xl text-[var(--primary-color)]">98%</p>
              <p className="text-sm text-[var(--text-muted)]">継続率</p>
            </div>
            
            <div className="w-px h-12 bg-gray-200"></div>
            
            <div className="text-center">
              <p className="font-bold text-2xl text-[var(--primary-color)]">15年</p>
              <p className="text-sm text-[var(--text-muted)]">平均利用期間</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}