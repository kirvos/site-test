import { notFound } from 'next/navigation';
import Link from 'next/link';

const caseStudies = [
  {
    id: 'manufacturing-a',
    title: '製造業A社様 - 社会保険業務効率化プロジェクト',
    client: {
      name: '田中 様',
      company: '製造業A社',
      role: '人事部長',
      industry: '製造業',
      employees: '150名',
      location: '愛知県名古屋市'
    },
    challenge: {
      title: '課題・背景',
      description: 'A社では従業員の増加に伴い、社会保険手続きの複雑化と業務量の増大に悩んでいました。',
      details: [
        '月平均20件の新規加入・脱退手続きが発生',
        '算定基礎届や月額変更届の処理に月5日を要していた',
        '人事担当者の残業時間が月40時間超過',
        '手続きミスによる再申請が月2〜3件発生'
      ]
    },
    solution: {
      title: '解決策・アプローチ',
      description: 'ALBAが提供した社会保険アウトソーシングサービスにより、包括的な業務改善を実現。',
      details: [
        '全社会保険手続きの完全代行体制を構築',
        '専用システムによるペーパーレス化の導入',
        '月次レポートによる進捗可視化',
        '緊急時対応窓口の設置（24時間以内回答保証）'
      ]
    },
    results: {
      title: '成果・効果',
      description: '業務効率化により、人事担当者が戦略的業務に集中できる環境を実現。',
      metrics: [
        { label: '処理時間短縮', value: '80%減', description: '月5日→1日に短縮' },
        { label: '残業時間削減', value: '75%減', description: '40時間→10時間に削減' },
        { label: 'ミス発生率', value: '0%', description: '手続きミスが完全にゼロ化' },
        { label: 'コスト削減', value: '30%減', description: '年間人件費ベース' }
      ]
    },
    testimonial: {
      quote: "ALBAさんのおかげで、複雑な社会保険手続きがスムーズになり、本業に集中できるようになりました。特に、専用システムの導入により、進捗状況がリアルタイムで確認できるようになったのは大変助かっています。人事担当者の負担が大幅に軽減され、採用活動や人材育成により多くの時間を割けるようになりました。",
      author: "田中 様"
    },
    services: ['社会保険アウトソーシング'],
    duration: '12ヶ月',
    gradient: 'from-blue-500 to-purple-600',
    timeline: [
      { phase: '導入準備', duration: '1ヶ月', description: '現状分析・システム構築・研修実施' },
      { phase: '試行運用', duration: '2ヶ月', description: '一部業務での運用開始・課題抽出' },
      { phase: '本格運用', duration: '3ヶ月〜', description: '全面的な業務移管・定期的な改善' }
    ]
  },
  {
    id: 'it-b',
    title: 'IT企業B社様 - 助成金活用による事業拡大支援',
    client: {
      name: '佐藤 様',
      company: 'IT企業B社',
      role: '代表取締役',
      industry: 'IT・ソフトウェア開発',
      employees: '80名',
      location: '東京都港区'
    },
    challenge: {
      title: '課題・背景',
      description: '急速な事業成長に伴う人材採用拡大において、採用・教育コストの負担が経営を圧迫していました。',
      details: [
        '年間30名の新規採用計画に対する資金調達が課題',
        'DX推進のための技術研修費用が年間500万円必要',
        '助成金制度の複雑さから申請を断念していた',
        'スタートアップ期のため、キャッシュフローが不安定'
      ]
    },
    solution: {
      title: '解決策・アプローチ',
      description: 'B社の事業計画に最適化された助成金申請戦略を立案・実行。',
      details: [
        'キャリアアップ助成金（正社員化コース）の活用',
        '人材開発支援助成金（DX人材育成コース）の申請',
        '両立支援等助成金（テレワーク導入コース）の獲得',
        '申請スケジュールの最適化と進捗管理'
      ]
    },
    results: {
      title: '成果・効果',
      description: '複数の助成金獲得により、積極的な人材投資と事業拡大を実現。',
      metrics: [
        { label: '助成金総額', value: '1,200万円', description: '3種類の助成金を獲得' },
        { label: '採用費回収率', value: '85%', description: '採用コストの大部分をカバー' },
        { label: '研修費カバー率', value: '100%', description: 'DX研修費用を完全カバー' },
        { label: 'ROI', value: '15倍', description: '申請費用対効果' }
      ]
    },
    testimonial: {
      quote: "助成金申請で大きな成果を上げることができ、事業拡大の資金調達に成功しました。ALBAさんの専門知識により、私たちが知らなかった制度も活用でき、想定以上の成果を得ることができました。申請から受給まで全てサポートしていただき、安心して事業に集中できました。",
      author: "佐藤 様"
    },
    services: ['助成金・補助金申請代行'],
    duration: '18ヶ月',
    gradient: 'from-yellow-500 to-orange-600',
    timeline: [
      { phase: '戦略策定', duration: '1ヶ月', description: '助成金制度調査・申請計画立案' },
      { phase: '申請準備', duration: '3ヶ月', description: '必要書類準備・社内体制整備' },
      { phase: '申請・受給', duration: '14ヶ月', description: '順次申請・受給手続き' }
    ]
  },
  {
    id: 'service-c',
    title: 'サービス業C社様 - 緊急時対応体制の構築',
    client: {
      name: '鈴木 様',
      company: 'サービス業C社',
      role: '総務課長',
      industry: 'サービス業',
      employees: '200名',
      location: '大阪府大阪市'
    },
    challenge: {
      title: '課題・背景',
      description: '多店舗展開により発生する突発的な労務問題への迅速な対応が困難でした。',
      details: [
        '全国20店舗での労務管理の一元化が課題',
        '急な人員配置変更時の社会保険手続きが頻発',
        '店長クラスの労務知識不足によるコンプライアンスリスク',
        '本社総務部門のリソース不足（2名体制）'
      ]
    },
    solution: {
      title: '解決策・アプローチ',
      description: 'スポット対応とレギュラー業務を組み合わせた柔軟な支援体制を提供。',
      details: [
        '24時間以内対応のスポット手続き代行サービス',
        '店舗管理者向け労務研修プログラムの実施',
        '緊急時対応マニュアルの作成・配布',
        '月次巡回による各店舗の労務状況チェック'
      ]
    },
    results: {
      title: '成果・効果',
      description: '全社的な労務管理体制の構築により、コンプライアンス強化と業務効率化を実現。',
      metrics: [
        { label: '対応時間短縮', value: '90%減', description: '3日→4時間以内に短縮' },
        { label: 'コンプライアンス違反', value: '0件', description: '導入後違反事例なし' },
        { label: '本社業務負担', value: '60%減', description: '総務部門の負担軽減' },
        { label: '店舗満足度', value: '95%', description: '店長アンケート結果' }
      ]
    },
    testimonial: {
      quote: "迅速で丁寧な対応により、急な手続きにも柔軟に対応していただけて助かっています。特に、店舗からの緊急の相談にも24時間以内に回答いただけるのは、多店舗展開している私たちにとって非常に心強いです。店長の労務知識も向上し、全社的なコンプライアンス意識も高まりました。",
      author: "鈴木 様"
    },
    services: ['スポット手続き代行'],
    duration: '継続中（2年間）',
    gradient: 'from-green-500 to-teal-600',
    timeline: [
      { phase: '体制構築', duration: '2ヶ月', description: '緊急時対応体制・マニュアル整備' },
      { phase: '研修実施', duration: '3ヶ月', description: '店舗管理者向け労務研修' },
      { phase: '運用・改善', duration: '継続中', description: '月次巡回・定期改善活動' }
    ]
  }
];

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find(cs => cs.id === slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors">
              ホーム
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/case-studies" className="text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors">
              事例紹介
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[var(--text-muted)] truncate">{caseStudy.client.company}</span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className={`absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r ${caseStudy.gradient} animate-float`}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--accent-color)] to-[var(--accent-secondary)] animate-float delay-500 transform rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${caseStudy.gradient} flex items-center justify-center text-white font-bold text-2xl mr-4`}>
                {caseStudy.client.company.charAt(0)}
              </div>
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary-color)] mb-2">
                  {caseStudy.title}
                </h1>
                <p className="text-lg text-[var(--text-muted)]">{caseStudy.client.industry} | {caseStudy.client.location}</p>
              </div>
            </div>
          </div>

          {/* Client Info */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="modern-card p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">会社名</p>
                  <p className="font-semibold text-[var(--primary-color)]">{caseStudy.client.company}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">業界</p>
                  <p className="font-semibold text-[var(--primary-color)]">{caseStudy.client.industry}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">従業員数</p>
                  <p className="font-semibold text-[var(--primary-color)]">{caseStudy.client.employees}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">プロジェクト期間</p>
                  <p className="font-semibold text-[var(--primary-color)]">{caseStudy.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Challenge */}
            <div className="animate-fade-in-up">
              <div className="modern-card p-6 sm:p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--primary-color)]">{caseStudy.challenge.title}</h2>
                </div>
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{caseStudy.challenge.description}</p>
                <ul className="space-y-3">
                  {caseStudy.challenge.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[var(--text-muted)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution */}
            <div className="animate-fade-in-up delay-100">
              <div className="modern-card p-6 sm:p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${caseStudy.gradient} flex items-center justify-center text-white mr-4`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--primary-color)]">{caseStudy.solution.title}</h2>
                </div>
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{caseStudy.solution.description}</p>
                <ul className="space-y-3">
                  {caseStudy.solution.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${caseStudy.gradient} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-[var(--text-muted)]">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16 animate-fade-in-up delay-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">{caseStudy.results.title}</h2>
              <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">{caseStudy.results.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.metrics.map((metric, idx) => (
                <div key={idx} className="modern-card p-6 text-center">
                  <div className="text-4xl font-bold text-[var(--accent-color)] mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-[var(--primary-color)] mb-1">{metric.label}</div>
                  <div className="text-sm text-[var(--text-muted)]">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16 animate-fade-in-up delay-300">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">プロジェクトタイムライン</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--primary-color)] to-[var(--secondary-color)]"></div>
                
                <div className="space-y-8">
                  {caseStudy.timeline.map((phase, idx) => (
                    <div key={idx} className="relative flex items-start">
                      <div className={`absolute left-0 w-12 h-12 rounded-full bg-gradient-to-r ${caseStudy.gradient} flex items-center justify-center text-white font-bold z-10`}>
                        {idx + 1}
                      </div>
                      <div className="ml-20 modern-card p-6 flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-[var(--primary-color)]">{phase.phase}</h3>
                          <span className="text-sm text-[var(--accent-color)] font-semibold bg-[var(--accent-color)]/10 px-3 py-1 rounded-full">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-[var(--text-muted)]">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16 animate-fade-in-up delay-400">
            <div className="max-w-4xl mx-auto">
              <div className="modern-card p-8 sm:p-12 text-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.gradient} opacity-5`}></div>
                
                <div className="relative z-10">
                  <div className="text-[var(--primary-color)]/20 mb-6">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <blockquote className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                    &ldquo;{caseStudy.testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${caseStudy.gradient} flex items-center justify-center text-white font-bold text-xl mr-4`}>
                      {caseStudy.testimonial.author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-[var(--primary-color)] text-lg">{caseStudy.testimonial.author}</p>
                      <p className="text-[var(--text-muted)]">{caseStudy.client.company} {caseStudy.client.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center animate-fade-in-up delay-500">
            <div className="p-8 sm:p-12 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-6">
                あなたの課題も解決しませんか？
              </h2>
              <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                お客様一人ひとりの課題に合わせたオーダーメイドのソリューションをご提案いたします
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  無料相談を予約する
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </Link>
                <Link 
                  href="/case-studies" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300"
                >
                  他の事例を見る
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}