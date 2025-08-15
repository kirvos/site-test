import Link from 'next/link';
import Footer from '@/components/Footer';

const serviceData = {
  title: '社会保険アウトソーシング',
  subtitle: '社会保険手続きの煩雑さを解消し、業務効率化を支援します',
  description: '社会保険の加入・脱退手続き、算定基礎届、賞与支払届、労働保険料の申告など、複雑で時間のかかる社会保険業務を専門スタッフが代行いたします。正確な手続きで企業のコンプライアンス体制をサポートし、人事担当者の負担を大幅に軽減します。',
  gradient: 'from-blue-500 to-purple-600',
  icon: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  features: [
    {
      title: '健康保険・厚生年金保険手続き',
      description: '加入・脱退、扶養異動、住所変更等の各種手続きを迅速に処理',
      items: ['資格取得・喪失届', '被扶養者異動届', '住所変更届', '氏名変更届']
    },
    {
      title: '雇用保険・労災保険手続き',
      description: '労働保険に関する手続き全般をワンストップでサポート',
      items: ['雇用保険被保険者資格取得・喪失届', '労働保険概算・確定保険料申告書', '離職証明書作成', '労災給付申請サポート']
    },
    {
      title: '定期手続き業務',
      description: '年次・月次で発生する定期的な手続きを確実に実行',
      items: ['算定基礎届（年次改定）', '月額変更届', '賞与支払届', '労働保険料申告']
    },
    {
      title: '各種証明書発行',
      description: '従業員の各種申請に必要な証明書類の取得代行',
      items: ['健康保険被保険者証再交付', '雇用保険被保険者証再交付', '各種証明書取得', '年金手帳再交付']
    }
  ],
  benefits: [
    {
      title: '業務効率化',
      description: '人事担当者の社会保険業務負荷を80%削減',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: 'コンプライアンス強化',
      description: '法改正対応と正確な手続きでリスクを最小化',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: 'コスト削減',
      description: '専門スタッフ雇用コストと比較して年間30%のコスト削減',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ],
  process: [
    { step: '1', title: 'ヒアリング', description: '現在の業務フローと課題を詳細にヒアリング' },
    { step: '2', title: '提案・設計', description: 'お客様に最適な運用体制をご提案' },
    { step: '3', title: '移行準備', description: '現行システムからの移行準備とテスト実施' },
    { step: '4', title: '運用開始', description: '専任担当者による継続的なサポート開始' }
  ],
  pricing: {
    base: '月額 30,000円〜',
    note: '従業員数・業務範囲により変動いたします',
    included: [
      '全社会保険手続き代行',
      '専任担当者制',
      '月次レポート提供',
      'メール・電話サポート'
    ]
  }
};

export default function SocialInsuranceDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--primary-color)]">ホーム</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--primary-color)]">サービス</Link>
            <span>/</span>
            <span className="text-[var(--primary-color)]">社会保険アウトソーシング</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center mb-6">
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${serviceData.gradient} flex items-center justify-center text-white`}>
                {serviceData.icon}
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              {serviceData.title}
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
              {serviceData.subtitle}
            </p>
            <p className="text-base text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed">
              {serviceData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">3つの主要メリット</h2>
            <p className="text-lg text-[var(--text-muted)]">社会保険アウトソーシングがもたらす効果</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${serviceData.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{benefit.title}</h3>
                <p className="text-[var(--text-muted)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">サービス詳細</h2>
            <p className="text-lg text-[var(--text-muted)]">包括的な社会保険業務をワンストップでサポート</p>
          </div>
          
          <div className="space-y-8">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="modern-card p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{feature.title}</h3>
                    <p className="text-[var(--text-muted)]">{feature.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {feature.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center">
                          <svg className="w-4 h-4 text-[var(--accent-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-sm text-[var(--text-muted)]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">導入の流れ</h2>
            <p className="text-lg text-[var(--text-muted)]">スムーズな導入をサポートします</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {serviceData.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${serviceData.gradient} flex items-center justify-center text-white text-xl font-bold`}>
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">料金体系</h2>
              <div className="text-4xl font-bold gradient-text mb-2">{serviceData.pricing.base}</div>
              <p className="text-[var(--text-muted)]">{serviceData.pricing.note}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-4">基本料金に含まれるもの</h3>
                <ul className="space-y-2">
                  {serviceData.pricing.included.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-[var(--accent-color)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                >
                  お見積もり依頼
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            社会保険業務の負担を<br />
            大幅に軽減しませんか？
          </h2>
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            まずはお気軽にご相談ください。現在の業務状況をお聞きして、最適なプランをご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
            >
              無料相談を予約
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 transform hover:scale-105"
            >
              他のサービスを見る
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}