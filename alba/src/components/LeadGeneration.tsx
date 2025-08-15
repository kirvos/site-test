import Link from 'next/link';

const leadMagnets = [
  {
    title: 'はじめての就業規則ガイド',
    subtitle: 'eBook',
    description: '就業規則作成の基本から実践まで、50ページの完全ガイド',
    features: [
      '法的要件をわかりやすく解説',
      '業種別のサンプル条文付き',
      '改訂時のチェックリスト',
      '労働基準監督署対応のポイント'
    ],
    downloadUrl: '/downloads/employment-rules-guide',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: '36協定＆割増賃金 実務チェック',
    subtitle: 'チェックリスト',
    description: '時間外労働の適正管理に必要な重要ポイントを網羅',
    features: [
      '36協定締結の必須事項',
      '割増賃金計算の注意点',
      '労働時間管理のベストプラクティス',
      'よくある間違いとその対策'
    ],
    downloadUrl: '/downloads/overtime-checklist',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
    gradient: 'from-green-500 to-emerald-500'
  }
];

const assessmentTools = [
  {
    title: '労務リスク診断',
    description: '30の質問で労務リスクを可視化',
    duration: '30秒',
    benefits: [
      'リスクレベルの定量評価',
      '優先対応項目の明確化',
      '改善提案のレポート付き'
    ],
    href: '/risk-assessment',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
      </svg>
    ),
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: '就業規則適正性チェック',
    description: '現在の就業規則の課題を発見',
    duration: '5分',
    benefits: [
      '法改正対応状況の確認',
      '不備箇所の特定',
      '改訂優先度の提案'
    ],
    href: '/employment-rules-check',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    gradient: 'from-purple-500 to-indigo-500'
  }
];

export default function LeadGeneration() {
  return (
    <section className="snap-start py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]" data-snap>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="!text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            労務管理に役立つ資料を無料でダウンロード
          </h2>
          <p className="!text-white text-lg sm:text-xl max-w-3xl mx-auto" style={{color: '#ffffff !important'}}>
            実務に即使える資料や診断ツールで、労務課題の解決をサポートします
          </p>
        </div>

        {/* Download Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#ffffff !important'}}>
            📚 無料ダウンロード資料
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadMagnets.map((resource, index) => (
              <div
                key={resource.title}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 text-white hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-${(index + 1) * 200}`}
              >
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/20 mr-2" style={{color: '#ffffff !important'}}>
                        {resource.subtitle}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-2" style={{color: '#ffffff !important'}}>
                      {resource.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{color: '#ffffff !important'}}>
                      {resource.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3" style={{color: '#ffffff !important'}}>
                    含まれる内容：
                  </h5>
                  <ul className="space-y-2">
                    {resource.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-white/80 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                        </svg>
                        <span style={{color: '#ffffff !important'}}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={resource.downloadUrl}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--primary-color)] rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  無料ダウンロード
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Assessment Tools */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" style={{color: '#ffffff !important'}}>
            🔍 無料診断ツール
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {assessmentTools.map((tool, index) => (
              <div
                key={tool.title}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 lg:p-8 text-white hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up delay-${(index + 3) * 200}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center text-white mr-4`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1" style={{color: '#ffffff !important'}}>
                      {tool.title}
                    </h4>
                    <p className="text-sm" style={{color: '#ffffff !important'}}>
                      {tool.description}
                    </p>
                    <div className="flex items-center mt-2">
                      <svg className="w-4 h-4 text-white/80 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      <span className="text-sm" style={{color: '#ffffff !important'}}>所要時間: {tool.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold mb-3" style={{color: '#ffffff !important'}}>
                    診断結果でわかること：
                  </h5>
                  <ul className="space-y-2">
                    {tool.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-white/80 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"/>
                        </svg>
                        <span style={{color: '#ffffff !important'}}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={tool.href}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-white text-[var(--primary-color)] rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  診断を開始する
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up delay-600">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#ffffff !important'}}>
              より詳しい相談をご希望の方は
            </h3>
            <p className="!text-white mb-6" style={{color: '#ffffff !important'}}>
              専門家による個別相談で、御社の具体的な課題に対する解決策をご提案いたします
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              無料相談を予約
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}