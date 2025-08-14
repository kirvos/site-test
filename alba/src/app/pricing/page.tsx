import Link from 'next/link';
import Footer from '@/components/Footer';
import CostSimulator from '@/components/CostSimulator';

const pricingPlans = [
  {
    name: 'ライト',
    price: '月額 30,000円〜',
    description: '小規模企業向けの基本的な労務サポート',
    features: [
      '従業員数30名まで',
      '基本的な労務相談対応',
      '社会保険手続き代行',
      '給与計算（オプション）',
      'メールサポート',
      '月1回の定期報告'
    ],
    recommended: false,
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    )
  },
  {
    name: 'スタンダード',
    price: '月額 80,000円〜',
    description: '中規模企業向けの包括的な労務サポート',
    features: [
      '従業員数100名まで',
      '包括的な労務相談対応',
      '社会保険・労働保険手続き代行',
      '就業規則作成・改訂',
      '助成金申請支援',
      '電話・メールサポート',
      '月2回の定期訪問',
      'クラウド労務システム導入支援'
    ],
    recommended: true,
    gradient: 'from-green-500 to-emerald-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    )
  },
  {
    name: 'プロ',
    price: '月額 150,000円〜',
    description: '大企業・上場準備企業向けの戦略的労務サポート',
    features: [
      '従業員数無制限',
      '戦略的労務コンサルティング',
      '全労務手続き代行',
      '人事制度設計・評価制度構築',
      '労務DD・IPO準備支援',
      '研修・セミナー実施',
      '24時間緊急サポート',
      '月4回の定期訪問',
      '専任担当者アサイン',
      'カスタマイズ対応'
    ],
    recommended: false,
    gradient: 'from-purple-500 to-indigo-500',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    )
  }
];

const spotServices = [
  { service: '就業規則作成', price: '200,000円〜', period: '1ヶ月' },
  { service: '就業規則改訂', price: '100,000円〜', period: '2週間' },
  { service: '人事制度設計', price: '500,000円〜', period: '3ヶ月' },
  { service: '評価制度構築', price: '300,000円〜', period: '2ヶ月' },
  { service: '労務DD', price: '300,000円〜', period: '1ヶ月' },
  { service: 'IPO労務準備', price: '800,000円〜', period: '6ヶ月' },
  { service: '助成金申請', price: '成功報酬20%', period: '3ヶ月' },
  { service: '労務監査', price: '150,000円〜', period: '2週間' }
];

export default function PricingPage() {
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
              料金プラン
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
              企業規模と課題に合わせた最適なプランで<br />
              コストパフォーマンスの高い労務サポートを実現
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              顧問プラン比較
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              継続的なサポートで企業の労務体制を強化します
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className={`modern-card p-6 lg:p-8 text-center relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${plan.recommended ? 'ring-4 ring-[var(--accent-color)] ring-opacity-50' : ''}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-secondary)] text-white px-6 py-2 rounded-full text-sm font-semibold">
                      おすすめ
                    </div>
                  </div>
                )}
                
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {plan.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-[var(--primary-color)]">
                  {plan.name}
                </h3>
                <div className="text-3xl font-extrabold mb-2 gradient-text">
                  {plan.price}
                </div>
                <p className="text-[var(--text-muted)] mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-[var(--text-muted)]">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.recommended 
                      ? 'bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-secondary)] text-white hover:from-[var(--accent-secondary)] hover:to-[var(--accent-color)]'
                      : 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)]'
                  }`}
                >
                  お問い合わせ
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spot Services Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              スポット費用一覧
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              必要な時に必要なサービスをご利用いただけます
            </p>
          </div>

          <div className="modern-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">サービス内容</th>
                    <th className="px-6 py-4 text-left font-semibold">料金</th>
                    <th className="px-6 py-4 text-left font-semibold">期間</th>
                    <th className="px-6 py-4 text-left font-semibold">詳細</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {spotServices.map((item, index) => (
                    <tr key={item.service} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 font-semibold text-[var(--primary-color)]">
                        {item.service}
                      </td>
                      <td className="px-6 py-4 text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--accent-color)]">{item.price}</span>
                      </td>
                      <td className="px-6 py-4 text-[var(--text-muted)]">
                        {item.period}
                      </td>
                      <td className="px-6 py-4">
                        <Link 
                          href="/contact"
                          className="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--secondary-color)] font-semibold transition-colors duration-300"
                        >
                          相談する
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-muted)] mb-4">
              ※ 料金は企業規模・業種・複雑さにより変動する場合があります<br />
              ※ 初回相談は無料です。お気軽にご相談ください
            </p>
          </div>
        </div>
      </section>

      {/* Cost Simulator Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              見積シミュレーター
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              お客様の状況に合わせた概算費用をシミュレートいたします
            </p>
          </div>

          <CostSimulator />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              料金に関するよくある質問
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: '月額顧問料に含まれる範囲を教えてください',
                answer: '各プランに記載のサービス内容が含まれます。追加料金が発生する場合は事前にご相談いたします。'
              },
              {
                question: '契約期間はどのくらいですか？',
                answer: '顧問契約は1年契約が基本ですが、3ヶ月から対応可能です。スポットサービスは都度契約となります。'
              },
              {
                question: '途中でプランを変更できますか？',
                answer: 'はい、企業様の成長に合わせてプラン変更が可能です。変更手数料はかかりません。'
              },
              {
                question: '初期費用は必要ですか？',
                answer: '初回相談は無料です。契約時に初期設定費用として1ヶ月分の料金をいただく場合があります。'
              }
            ].map((faq, index) => (
              <div key={index} className="modern-card p-6">
                <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                  Q. {faq.question}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  A. {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            最適なプランを<br />
            無料でご提案いたします
          </h2>
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            お客様の課題とご予算に合わせて、最適なソリューションをカスタマイズいたします
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
              href="tel:03-XXXX-XXXX" 
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 transform hover:scale-105"
            >
              03-XXXX-XXXX
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}