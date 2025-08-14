import Link from 'next/link';
import Footer from '@/components/Footer';

const industries = [
  {
    title: 'IT・スタートアップ',
    href: '/industries/it-startup',
    description: '急成長企業の労務体制構築から IPO準備まで一貫サポート',
    challenges: [
      '急速な人員増加への対応',
      'IPO準備に向けた労務DD',
      'ストックオプション制度設計',
      'リモートワーク規程整備'
    ],
    solutions: [
      '成長段階に応じた組織体制構築',
      '上場基準に適合した規程整備',
      '投資家要求に対応した労務DD',
      'クラウド労務システム導入支援'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-purple-600',
    stats: { companies: '200+', satisfaction: '98%' }
  },
  {
    title: '医療・介護',
    href: '/industries/healthcare',
    description: '医療・介護業界特有の労務課題を専門知識でサポート',
    challenges: [
      '24時間365日体制の労務管理',
      '夜勤・交代制勤務の複雑な計算',
      '医療従事者の労働時間管理',
      '感染対策と労働安全衛生'
    ],
    solutions: [
      '医療業界特化の勤怠管理システム',
      '夜勤手当・特殊勤務手当の適正計算',
      '医療従事者向け就業規則作成',
      '労働基準監督署対応サポート'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    gradient: 'from-red-500 to-pink-600',
    stats: { companies: '150+', satisfaction: '99%' }
  },
  {
    title: '建設・製造',
    href: '/industries/construction',
    description: '現場作業特有のリスクと労務課題を総合的に解決',
    challenges: [
      '現場作業員の労働時間管理',
      '安全衛生管理体制の構築',
      '外国人労働者の雇用管理',
      '建設業特有の社会保険手続き'
    ],
    solutions: [
      '建設業特化の労働時間管理システム',
      '安全衛生教育プログラム構築',
      '外国人雇用に関する手続き代行',
      '一人親方との適正な契約関係構築'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-600',
    stats: { companies: '300+', satisfaction: '97%' }
  },
  {
    title: '小売・飲食',
    href: '/industries/retail',
    description: '多店舗運営と多様な働き方に対応した労務管理を実現',
    challenges: [
      '多店舗・多拠点の労務管理統一',
      'シフト制・パートタイム労働者管理',
      '店舗責任者の労働時間把握',
      '接客業特有のハラスメント対策'
    ],
    solutions: [
      '統一された多店舗労務管理システム',
      'シフト勤務に対応した就業規則',
      '店長・SV向け労務管理研修',
      'カスタマーハラスメント対策規程'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
      </svg>
    ),
    gradient: 'from-green-500 to-teal-600',
    stats: { companies: '180+', satisfaction: '98%' }
  },
  {
    title: 'プロフェッショナルファーム',
    href: '/industries/professional',
    description: '専門性の高い業務と人材に特化した労務ソリューション',
    challenges: [
      '専門職の労働時間管理',
      '知的財産と秘密保持の管理',
      '高度人材の評価・報酬設計',
      'パートナーシップ制度設計'
    ],
    solutions: [
      'プロフェッショナル向け評価制度構築',
      '機密保持に配慮した労務管理',
      'パートナー昇格基準の明文化',
      '知的労働者向けインセンティブ設計'
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-indigo-600',
    stats: { companies: '170+', satisfaction: '99%' }
  }
];

export default function IndustriesPage() {
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
              業種別ソリューション
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
              各業種の特性を深く理解した専門チームが<br />
              業界特有の労務課題に最適解を提供します
            </p>
          </div>
        </div>
      </section>

      {/* Integrated Industries Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div 
                key={industry.title} 
                className="modern-card p-8 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${industry.gradient} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mr-6`}>
                        {industry.icon}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-2">
                          {industry.title}
                        </h2>
                        <p className="text-lg text-[var(--text-muted)]">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex space-x-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--primary-color)]">{industry.stats.companies}</div>
                        <div className="text-sm text-[var(--text-muted)]">サポート企業</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[var(--accent-color)]">{industry.stats.satisfaction}</div>
                        <div className="text-sm text-[var(--text-muted)]">満足度</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Challenges */}
                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                      <div className="flex items-center mb-4">
                        <svg className="w-6 h-6 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                        <h3 className="text-lg font-semibold text-orange-700">よくある課題</h3>
                      </div>
                      <ul className="space-y-3">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[var(--text-muted)] text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                      <div className="flex items-center mb-4">
                        <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <h3 className="text-lg font-semibold text-green-700">私たちの解決策</h3>
                      </div>
                      <ul className="space-y-3">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-[var(--text-muted)] text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Stats for Mobile */}
                  <div className="lg:hidden flex justify-center space-x-8 mt-6 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[var(--primary-color)]">{industry.stats.companies}</div>
                      <div className="text-xs text-[var(--text-muted)]">サポート企業</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[var(--accent-color)]">{industry.stats.satisfaction}</div>
                      <div className="text-xs text-[var(--text-muted)]">満足度</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8 text-center">
                    <Link 
                      href={industry.href}
                      className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                    >
                      詳細事例を見る
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              業種別成功事例
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              様々な業種のクライアント様が、私たちのサポートでどのような成果を上げているかご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="modern-card p-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                IT
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)] text-center">
                スタートアップA社
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-muted)] mb-4">
                <p>• 従業員数: 50名 → 200名</p>
                <p>• IPO準備期間: 18ヶ月短縮</p>
                <p>• 労務DD対応: 100%クリア</p>
              </div>
              <p className="text-sm text-[var(--text-muted)] italic">
                「労務DDで指摘事項ゼロを達成。IPO準備がスムーズに進みました。」
              </p>
            </div>

            <div className="modern-card p-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
                医療
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)] text-center">
                医療法人B会
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-muted)] mb-4">
                <p>• 施設数: 3施設 → 8施設</p>
                <p>• 労務コスト: 30%削減</p>
                <p>• コンプライアンス: 100%達成</p>
              </div>
              <p className="text-sm text-[var(--text-muted)] italic">
                「複雑な夜勤体制も適正に管理できるようになりました。」
              </p>
            </div>

            <div className="modern-card p-6 group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white text-sm font-bold">
                小売
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[var(--primary-color)] text-center">
                小売チェーンC社
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-muted)] mb-4">
                <p>• 店舗数: 20店舗 → 50店舗</p>
                <p>• 管理効率: 40%向上</p>
                <p>• 離職率: 25%改善</p>
              </div>
              <p className="text-sm text-[var(--text-muted)] italic">
                「多店舗管理が劇的に楽になり、事業拡大に集中できました。」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            あなたの業種に特化した<br />
            労務ソリューションを相談しませんか？
          </h2>
          <p className="text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            業界経験豊富な専門家が、御社の課題に最適なソリューションをご提案いたします
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
              href="/case-studies" 
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 transform hover:scale-105"
            >
              導入事例を見る
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