import Link from 'next/link';

const personas = [
  {
    title: '経営者向け',
    subtitle: '事業成長に集中できる環境を',
    challenges: [
      '労務リスクが見えない不安',
      'IPO準備の労務DD対応',
      '成長に伴う労務体制構築',
      'コンプライアンス違反リスク'
    ],
    solutions: [
      '労務リスクの可視化と対策',
      '上場基準に適合した体制構築',
      '成長段階に応じた制度設計',
      '24時間体制のリスク監視'
    ],
    href: '/industries/it-startup',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    title: '管理部門向け',
    subtitle: '日常業務の効率化を実現',
    challenges: [
      '煩雑な手続き業務の負担',
      '法改正への対応遅れ',
      '専門知識不足による不安',
      '属人化による業務リスク'
    ],
    solutions: [
      '手続き業務の完全代行',
      'リアルタイムな法改正対応',
      '専門家による継続サポート',
      'システム化による標準化'
    ],
    href: '/services',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    title: 'スタートアップ向け',
    subtitle: '急成長を支える労務基盤',
    challenges: [
      '急速な人員増加への対応',
      'IPO準備の労務DD',
      'ストックオプション制度',
      'リモートワーク規程整備'
    ],
    solutions: [
      '成長段階に応じた体制構築',
      'IPO要件を満たす規程整備',
      '株式報酬制度の専門設計',
      '柔軟な働き方制度の構築'
    ],
    href: '/industries/it-startup',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    title: '医療・介護向け',
    subtitle: '業界特性に特化した労務管理',
    challenges: [
      '24時間365日体制の管理',
      '夜勤・交代制の複雑計算',
      '医療従事者の労働時間',
      '感染対策と労働安全'
    ],
    solutions: [
      '医療業界特化システム導入',
      '夜勤手当の適正計算',
      '医療従事者向け規程整備',
      '安全衛生管理体制構築'
    ],
    href: '/industries/healthcare',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    gradient: 'from-red-500 to-pink-600'
  }
];

export default function PersonaChallenges() {
  return (
    <section className="snap-start py-16 bg-gradient-to-br from-gray-50 to-white" data-snap>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
            あなたの立場に合わせた労務ソリューション
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            役職や業界に応じた具体的な課題に、専門チームが最適解を提供します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona, index) => (
            <div
              key={persona.title}
              className={`modern-card p-6 lg:p-8 group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${persona.gradient} flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mr-4`}>
                  {persona.icon}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--primary-color)] mb-1">
                    {persona.title}
                  </h3>
                  <p className="text-[var(--text-muted)]">
                    {persona.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* 課題 */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-red-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                    よくある課題
                  </h4>
                  <ul className="space-y-2">
                    {persona.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[var(--text-muted)]">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 解決策 */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-green-600 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    私たちの解決策
                  </h4>
                  <ul className="space-y-2">
                    {persona.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-[var(--text-muted)]">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href={persona.href}
                  className="inline-flex items-center text-[var(--primary-color)] font-semibold hover:text-[var(--secondary-color)] transition-colors duration-300 group"
                >
                  詳しい解決策を見る
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up delay-500">
          <div className="modern-card p-8 bg-gradient-to-r from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5">
            <h3 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">
              あなたの課題に最適なソリューションを
            </h3>
            <p className="text-[var(--text-muted)] mb-6 max-w-2xl mx-auto">
              まずは無料相談で現在の課題をお聞かせください。専門家チームが最適な解決策をご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white rounded-lg font-semibold hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
              >
                無料相談を予約
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </Link>
              <Link
                href="/risk-assessment"
                className="inline-flex items-center px-8 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] rounded-lg font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                労務リスクを30秒で診断
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}