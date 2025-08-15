import Link from 'next/link';
import Footer from '@/components/Footer';

const serviceData = {
  title: 'スポット手続き代行',
  subtitle: '必要な時に必要な手続きを迅速に代行',
  description: '緊急性の高い手続きや単発の業務に対応する柔軟なサービスです。就業規則の作成・変更、労働基準監督署への各種届出、助成金の申請準備など、お客様のご要望に応じてスピーディーに対応いたします。',
  gradient: 'from-green-500 to-teal-600',
  icon: (
    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  ),
  features: [
    {
      title: '緊急時労務手続き',
      description: '突発的に発生する労務問題に24時間以内に対応',
      items: ['労働基準監督署からの指導対応', '労働局からの調査対応', '従業員との労務トラブル解決', '緊急時の書類作成・提出']
    },
    {
      title: '就業規則関連業務',
      description: '法改正対応や新制度導入に伴う就業規則の整備',
      items: ['就業規則の新規作成', '既存規則の改訂・見直し', '労働基準監督署への届出', '従業員説明会の実施']
    },
    {
      title: '各種届出書類作成',
      description: '行政機関への各種届出書類の作成・提出代行',
      items: ['36協定の作成・届出', '労使協定書の作成', '変形労働時間制導入届', '専門業務型裁量労働制導出']
    },
    {
      title: '短期プロジェクト',
      description: '期間限定のプロジェクトや特定課題の解決支援',
      items: ['IPO準備に向けた労務整備', 'M&A時の労務DD支援', '新規事業立ち上げサポート', '海外展開時の労務相談']
    }
  ],
  benefits: [
    {
      title: '迅速対応',
      description: '24時間以内の初回対応で緊急事態に対処',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: '柔軟な料金体系',
      description: '必要な分だけのお支払いで無駄なコストを削減',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: '専門性',
      description: '豊富な経験と専門知識で複雑な案件も確実に処理',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      )
    }
  ],
  scenarios: [
    {
      title: '労働基準監督署からの調査通知が来た',
      description: '調査準備から当日立会い、改善指導への対応まで包括的にサポート',
      urgency: '緊急',
      timeframe: '即日〜3日'
    },
    {
      title: '法改正に対応した就業規則の見直しが必要',
      description: '最新の法令に準拠した就業規則への改訂と従業員への周知',
      urgency: '通常',
      timeframe: '2〜4週間'
    },
    {
      title: 'IPO準備で労務体制の整備が急務',
      description: '上場審査に対応できる労務管理体制の構築と書類整備',
      urgency: '重要',
      timeframe: '1〜3ヶ月'
    },
    {
      title: '36協定の期限が迫っている',
      description: '協定内容の見直しから労働基準監督署への届出まで代行',
      urgency: '緊急',
      timeframe: '1〜2週間'
    }
  ],
  process: [
    { step: '1', title: 'お問い合わせ', description: '電話・メールでお気軽にご相談ください' },
    { step: '2', title: '内容確認', description: '案件内容と緊急度を詳しくヒアリング' },
    { step: '3', title: 'お見積り', description: '作業内容に応じた明確な料金をご提示' },
    { step: '4', title: '作業実行', description: '専門スタッフが迅速かつ確実に対応' }
  ],
  pricing: {
    consultation: '初回相談無料',
    hourly: '時間単価 10,000円〜',
    project: 'プロジェクト単価 50,000円〜',
    note: '案件内容・緊急度により変動いたします'
  }
};

export default function SpotProcedureDetailPage() {
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
            <span className="text-[var(--primary-color)]">スポット手続き代行</span>
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
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">スポット対応の強み</h2>
            <p className="text-lg text-[var(--text-muted)]">緊急時にこそ発揮される専門力</p>
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

      {/* Scenarios Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">よくあるご依頼例</h2>
            <p className="text-lg text-[var(--text-muted)]">こんな時にスポット対応をご活用ください</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceData.scenarios.map((scenario, index) => (
              <div key={index} className="modern-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-[var(--primary-color)] flex-1 mr-4">{scenario.title}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scenario.urgency === '緊急' ? 'bg-red-100 text-red-700' :
                    scenario.urgency === '重要' ? 'bg-orange-100 text-orange-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {scenario.urgency}
                  </div>
                </div>
                <p className="text-[var(--text-muted)] mb-4">{scenario.description}</p>
                <div className="flex items-center text-sm text-[var(--text-muted)]">
                  <svg className="w-4 h-4 mr-2 text-[var(--accent-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  対応期間: {scenario.timeframe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">対応可能業務</h2>
            <p className="text-lg text-[var(--text-muted)]">幅広い労務関連業務にワンストップで対応</p>
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
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">ご依頼の流れ</h2>
            <p className="text-lg text-[var(--text-muted)]">シンプルな4ステップで迅速対応</p>
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
              <p className="text-[var(--text-muted)]">明確で柔軟な料金設定</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">初回相談</h3>
                <div className="text-2xl font-bold gradient-text mb-2">{serviceData.pricing.consultation}</div>
                <p className="text-sm text-[var(--text-muted)]">お気軽にご相談ください</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">時間単価</h3>
                <div className="text-2xl font-bold gradient-text mb-2">{serviceData.pricing.hourly}</div>
                <p className="text-sm text-[var(--text-muted)]">小規模案件向け</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">プロジェクト単価</h3>
                <div className="text-2xl font-bold gradient-text mb-2">{serviceData.pricing.project}</div>
                <p className="text-sm text-[var(--text-muted)]">中〜大規模案件向け</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-[var(--text-muted)] mb-6">{serviceData.pricing.note}</p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
              >
                無料相談を依頼
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
            緊急の労務問題で<br />
            お困りではありませんか？
          </h2>
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            24時間以内に専門スタッフが対応いたします。まずはお電話またはメールでお気軽にご相談ください
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
            >
              今すぐ相談する
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
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