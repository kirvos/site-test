import Link from 'next/link';
import Footer from '@/components/Footer';

const serviceData = {
  title: '自治体向けBPOサービス',
  subtitle: '自治体特有のニーズに合わせたBPOサービスを提供します',
  description: '地方自治体の業務効率化を支援する専門的なBPO（Business Process Outsourcing）サービスです。住民サービスの向上と行政事務の効率化を両立させ、自治体職員の皆様がより付加価値の高い業務に集中できる環境をご提供します。',
  gradient: 'from-purple-500 to-pink-600',
  icon: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
    </svg>
  ),
  services: [
    {
      title: '住民窓口業務',
      description: '住民票発行、証明書交付など窓口業務の包括的な代行',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      ),
      details: [
        '住民票・戸籍謄本等の発行業務',
        '印鑑登録・証明書発行',
        '転入・転出・転居届の受付',
        '各種証明書の交付業務'
      ]
    },
    {
      title: '申請書類の審査・処理',
      description: '各種申請書類の受付から審査、決裁までの一連の処理',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      details: [
        '許認可申請の受付・審査',
        '補助金・給付金申請の処理',
        '税務関連書類の審査',
        '福祉関連申請の受付・処理'
      ]
    },
    {
      title: 'デジタル化推進サポート',
      description: 'DX推進による業務効率化とペーパーレス化の実現',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      details: [
        'オンライン申請システムの導入支援',
        'ペーパーレス化の推進',
        '電子決裁システムの構築',
        '住民向けデジタルサービスの企画'
      ]
    },
    {
      title: '業務プロセス改善',
      description: '現行業務の分析から最適化まで継続的な改善提案',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      details: [
        '現行業務フローの詳細分析',
        'ボトルネック解消の提案',
        '標準化・マニュアル化支援',
        '継続的な改善活動の支援'
      ]
    }
  ],
  benefits: [
    {
      title: '住民サービス向上',
      description: '待ち時間短縮と対応品質の向上を実現',
      metric: '待ち時間50%短縮',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      )
    },
    {
      title: '行政コスト削減',
      description: '人件費と運営コストの大幅な削減効果',
      metric: '運営費30%削減',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: '職員の働き方改革',
      description: '定型業務から戦略的業務へのシフト',
      metric: '残業時間40%削減',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ],
  features: [
    {
      title: 'セキュリティ対策',
      items: [
        'プライバシーマーク取得済み',
        'ISO27001認証取得',
        '個人情報保護体制の完備',
        '定期的なセキュリティ監査実施'
      ]
    },
    {
      title: '災害時対応',
      items: [
        'BCP（事業継続計画）策定済み',
        'リモート対応体制の構築',
        '緊急時の代替拠点確保',
        '24時間365日の監視体制'
      ]
    },
    {
      title: '品質管理',
      items: [
        'ISO9001品質管理システム',
        '定期的な品質監査の実施',
        '継続的な改善活動',
        '住民満足度調査の実施'
      ]
    }
  ],
  process: [
    { step: '1', title: '現状分析', description: '現在の業務フローと課題を詳細に分析' },
    { step: '2', title: '提案・設計', description: '最適なBPOプランと移行計画を策定' },
    { step: '3', title: '移行・導入', description: '段階的な移行でリスクを最小化' },
    { step: '4', title: '運用・改善', description: '継続的な品質向上と改善提案' }
  ],
  results: [
    {
      municipality: 'A市',
      population: '人口15万人',
      service: '住民窓口業務',
      improvement: '処理時間60%短縮',
      satisfaction: '住民満足度95%'
    },
    {
      municipality: 'B町',
      population: '人口3万人',
      service: '申請書類処理',
      improvement: '処理件数2倍向上',
      satisfaction: '職員満足度90%'
    },
    {
      municipality: 'C村',
      population: '人口8千人',
      service: 'デジタル化推進',
      improvement: 'ペーパーレス率80%',
      satisfaction: 'コスト30%削減'
    }
  ]
};

export default function BPODetailPage() {
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
            <span className="text-[var(--primary-color)]">自治体向けBPOサービス</span>
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
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">BPO導入の効果</h2>
            <p className="text-lg text-[var(--text-muted)]">住民サービス向上と業務効率化を同時に実現</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${serviceData.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{benefit.title}</h3>
                <p className="text-[var(--text-muted)] mb-3">{benefit.description}</p>
                <div className="text-lg font-bold gradient-text">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">提供サービス</h2>
            <p className="text-lg text-[var(--text-muted)]">自治体業務に特化した包括的なBPOサービス</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.services.map((service, index) => (
              <div key={index} className="modern-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${serviceData.gradient} flex items-center justify-center text-white flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">{service.title}</h3>
                    <p className="text-[var(--text-muted)]">{service.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-[var(--accent-color)] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-sm text-[var(--text-muted)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">安心・安全への取り組み</h2>
            <p className="text-lg text-[var(--text-muted)]">自治体業務に求められる高い信頼性を確保</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="modern-card p-6">
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-4 h-4 text-[var(--accent-color)] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-sm text-[var(--text-muted)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">導入実績</h2>
            <p className="text-lg text-[var(--text-muted)]">全国の自治体でご活用いただいています</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.results.map((result, index) => (
              <div key={index} className="modern-card p-6 text-center">
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">{result.municipality}</h3>
                <div className="text-sm text-[var(--text-muted)] mb-3">{result.population}</div>
                <div className="text-sm text-[var(--accent-color)] mb-4 font-semibold">{result.service}</div>
                <div className="space-y-2">
                  <div className="text-lg font-bold gradient-text">{result.improvement}</div>
                  <div className="text-sm text-[var(--text-muted)]">{result.satisfaction}</div>
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
            <p className="text-lg text-[var(--text-muted)]">段階的な導入でリスクを最小化</p>
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

      {/* Contact Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-8 text-center">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">お問い合わせ・ご相談</h2>
            <p className="text-lg text-[var(--text-muted)] mb-6">
              自治体様の課題に合わせたBPOプランをご提案いたします<br />
              まずはお気軽にご相談ください
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[var(--primary-color)] mb-2">電話でのお問い合わせ</h3>
                <p className="text-2xl font-bold gradient-text mb-2">0120-XXX-XXX</p>
                <p className="text-sm text-[var(--text-muted)]">平日 9:00〜18:00</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-[var(--primary-color)] mb-2">メールでのお問い合わせ</h3>
                <p className="text-lg font-bold gradient-text mb-2">bpo@alba-olive.jp</p>
                <p className="text-sm text-[var(--text-muted)]">24時間受付</p>
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
            >
              詳細資料を請求
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            住民サービス向上と<br />
            業務効率化を同時に実現
          </h2>
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            自治体業務に特化したBPOサービスで、職員の皆様がより価値の高い業務に集中できる環境を創造します
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