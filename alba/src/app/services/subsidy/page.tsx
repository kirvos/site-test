import Link from 'next/link';
import Footer from '@/components/Footer';

const serviceData = {
  title: '助成金・補助金申請代行',
  subtitle: '複雑な助成金・補助金申請をサポートし、受給を最大化します',
  description: 'キャリアアップ助成金、両立支援等助成金、人材開発支援助成金など、様々な助成金・補助金の申請を専門的にサポートします。申請要件の確認から書類作成、申請後のフォローまで一貫してお手伝いし、受給可能性を最大化します。',
  gradient: 'from-yellow-500 to-orange-600',
  icon: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  ),
  subsidyTypes: [
    {
      category: 'キャリアアップ助成金',
      description: '非正規雇用労働者の企業内でのキャリアアップを促進する',
      maxAmount: '最大 960万円',
      types: [
        '正社員化コース：最大72万円/人',
        '賃金規定等改定コース：最大39万円',
        '健康診断制度コース：最大38万円',
        '賃金規定等共通化コース：最大60万円'
      ]
    },
    {
      category: '両立支援等助成金',
      description: '職業生活と家庭生活との両立支援に取り組む事業主を支援',
      maxAmount: '最大 436万円',
      types: [
        '出生時両立支援コース：最大28.5万円',
        '介護離職防止支援コース：最大68万円',
        '育児休業等支援コース：最大72万円',
        '不妊治療両立支援コース：最大72万円'
      ]
    },
    {
      category: '人材開発支援助成金',
      description: '職業訓練等を通じた労働者の職業能力開発を推進',
      maxAmount: '最大 1,000万円',
      types: [
        '人材育成支援コース：訓練経費75%+賃金助成',
        'DX人材育成コース：訓練経費75%+賃金助成',
        '事業展開等リスキリング支援コース：最大75%',
        '人への投資促進コース：最大75%'
      ]
    },
    {
      category: '業務改善助成金',
      description: '中小企業の生産性向上と賃金引上げを支援',
      maxAmount: '最大 600万円',
      types: [
        '30円コース：最大30万円',
        '45円コース：最大50万円',
        '60円コース：最大100万円',
        '90円コース：最大600万円'
      ]
    }
  ],
  benefits: [
    {
      title: '受給実績',
      description: '申請件数1,000件以上、受給成功率95%の実績',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      title: '完全成功報酬',
      description: '受給決定後のお支払いなので初期費用ゼロ',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: '申請後フォロー',
      description: '申請後の問い合わせ対応や実績報告まで完全サポート',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z"/>
        </svg>
      )
    }
  ],
  process: [
    { step: '1', title: '受給診断', description: '現在の雇用状況から受給可能性を無料診断' },
    { step: '2', title: '計画作成', description: '助成金の要件に合わせた実行計画を策定' },
    { step: '3', title: '申請書類作成', description: '複雑な申請書類を専門スタッフが作成' },
    { step: '4', title: 'アフターフォロー', description: '実績報告・支給申請まで継続サポート' }
  ],
  successCases: [
    {
      company: 'IT企業A社',
      subsidy: 'キャリアアップ助成金',
      amount: '720万円',
      description: '契約社員20名を正社員化し、大幅な助成金を獲得'
    },
    {
      company: '製造業B社',
      subsidy: '人材開発支援助成金',
      amount: '480万円',
      description: 'DX研修プログラムで全社員のスキルアップを実現'
    },
    {
      company: 'サービス業C社',
      subsidy: '両立支援等助成金',
      amount: '156万円',
      description: 'テレワーク制度導入で働き方改革を推進'
    }
  ],
  pricing: {
    consultation: '受給診断無料',
    successFee: '成功報酬 15〜20%',
    note: '助成金の種類・金額により変動いたします',
    noSuccessNoFee: '受給できなかった場合の費用は一切発生いたしません'
  }
};

export default function SubsidyDetailPage() {
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
            <span className="text-[var(--primary-color)]">助成金・補助金申請代行</span>
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
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">選ばれる3つの理由</h2>
            <p className="text-lg text-[var(--text-muted)]">安心してお任せいただける確かな実績</p>
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

      {/* Subsidy Types Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">主要な助成金・補助金</h2>
            <p className="text-lg text-[var(--text-muted)]">豊富な実績で幅広い助成金に対応</p>
          </div>
          
          <div className="space-y-8">
            {serviceData.subsidyTypes.map((subsidy, index) => (
              <div key={index} className="modern-card p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{subsidy.category}</h3>
                    <p className="text-[var(--text-muted)] mb-4">{subsidy.description}</p>
                    <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${serviceData.gradient} text-white font-semibold`}>
                      {subsidy.maxAmount}
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {subsidy.types.map((type, typeIndex) => (
                        <div key={typeIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-[var(--accent-color)] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-sm text-[var(--text-muted)]">{type}</span>
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

      {/* Success Cases Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">受給成功事例</h2>
            <p className="text-lg text-[var(--text-muted)]">お客様の成功がわたしたちの実績です</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.successCases.map((case_, index) => (
              <div key={index} className="modern-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{case_.amount}</div>
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">{case_.company}</h3>
                <div className="text-sm text-[var(--accent-color)] mb-3">{case_.subsidy}</div>
                <p className="text-[var(--text-muted)] text-sm">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">申請の流れ</h2>
            <p className="text-lg text-[var(--text-muted)]">受給まで確実にサポートします</p>
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
              <p className="text-lg gradient-text font-bold mb-2">完全成功報酬制</p>
              <p className="text-[var(--text-muted)]">受給が決定してからのお支払いなので安心です</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">受給診断</h3>
                <div className="text-3xl font-bold gradient-text mb-2">{serviceData.pricing.consultation}</div>
                <p className="text-[var(--text-muted)]">まずはお気軽にご相談ください</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">成功報酬</h3>
                <div className="text-3xl font-bold gradient-text mb-2">{serviceData.pricing.successFee}</div>
                <p className="text-[var(--text-muted)]">{serviceData.pricing.note}</p>
              </div>
            </div>
            
            <div className="text-center bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-lg font-bold text-green-700">安心保証</span>
              </div>
              <p className="text-green-700">{serviceData.pricing.noSuccessNoFee}</p>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
              >
                無料受給診断を依頼
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            助成金で事業成長を<br />
            加速させませんか？
          </h2>
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            まずは無料の受給診断で、貴社が受給可能な助成金をお調べします
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
            >
              無料診断を開始
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
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