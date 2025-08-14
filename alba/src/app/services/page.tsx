import Link from 'next/link';
import Footer from '@/components/Footer';

const services = [
  { 
    title: '社会保険アウトソーシング', 
    href: '/services/social-insurance', 
    description: '社会保険手続きの煩雑さを解消し、業務効率化を支援します。',
    detailedDescription: '社会保険の加入・脱退手続き、算定基礎届、賞与支払届、労働保険料の申告など、複雑で時間のかかる社会保険業務を専門スタッフが代行いたします。正確な手続きで企業のコンプライアンス体制をサポートし、人事担当者の負担を大幅に軽減します。',
    features: [
      '健康保険・厚生年金保険の諸手続き',
      '雇用保険・労災保険の諸手続き',
      '算定基礎届・月額変更届',
      '賞与支払届・労働保険料申告'
    ],
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
    detailedDescription: '緊急性の高い手続きや単発の業務に対応する柔軟なサービスです。就業規則の作成・変更、労働基準監督署への各種届出、助成金の申請準備など、お客様のご要望に応じてスピーディーに対応いたします。',
    features: [
      '緊急時の労務手続き代行',
      '就業規則作成・変更',
      '各種届出書類の作成・提出',
      '短期プロジェクトの労務サポート'
    ],
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
    detailedDescription: 'キャリアアップ助成金、両立支援等助成金、人材開発支援助成金など、様々な助成金・補助金の申請を専門的にサポートします。申請要件の確認から書類作成、申請後のフォローまで一貫してお手伝いし、受給可能性を最大化します。',
    features: [
      'キャリアアップ助成金申請',
      '両立支援等助成金申請',
      '人材開発支援助成金申請',
      '申請後のフォローアップ'
    ],
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
    detailedDescription: '地方自治体の業務効率化を支援する専門的なBPO（Business Process Outsourcing）サービスです。住民サービスの向上と行政事務の効率化を両立させ、自治体職員の皆様がより付加価値の高い業務に集中できる環境をご提供します。',
    features: [
      '住民窓口業務の代行',
      '申請書類の審査・処理',
      'デジタル化推進サポート',
      '業務プロセス改善提案'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-600'
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--accent-color)] to-[var(--accent-secondary)] animate-float delay-500 transform rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              サービス一覧
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
              アルバオリーブが提供する専門的なサービスで<br />
              お客様のビジネスを支援いたします
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="modern-card p-8 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
                  {/* Left side - Icon, Title, Description */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-20 h-20 flex-shrink-0 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--primary-color)]">
                          {service.title}
                        </h2>
                        <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
                          {service.detailedDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right side - Features List & CTA */}
                  <div className="lg:col-span-1">
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">
                        主なサービス内容
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span className="text-[var(--text-muted)] text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* CTA Button */}
                    <div>
                      <Link 
                        href={service.href}
                        className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 w-full justify-center"
                      >
                        詳細を見る
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            お困りのことがございましたら<br />
            お気軽にご相談ください
          </h2>
          <p className="text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            専門スタッフがお客様のニーズに合わせて最適なソリューションをご提案いたします
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
          >
            お問い合わせ
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}