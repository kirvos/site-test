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
      quote: "ALBAさんのおかげで、複雑な社会保険手続きがスムーズになり、本業に集中できるようになりました。",
      author: "田中 様"
    },
    services: ['社会保険アウトソーシング'],
    duration: '12ヶ月',
    gradient: 'from-blue-500 to-purple-600'
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
      quote: "助成金申請で大きな成果を上げることができ、事業拡大の資金調達に成功しました。",
      author: "佐藤 様"
    },
    services: ['助成金・補助金申請代行'],
    duration: '18ヶ月',
    gradient: 'from-yellow-500 to-orange-600'
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
      quote: "迅速で丁寧な対応により、急な手続きにも柔軟に対応していただけて助かっています。",
      author: "鈴木 様"
    },
    services: ['スポット手続き代行'],
    duration: '継続中（2年間）',
    gradient: 'from-green-500 to-teal-600'
  }
];

export default function CaseStudiesPage() {
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
              事例紹介
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
              実際のお客様の課題解決事例をご紹介<br />
              あなたのビジネスに参考となる成功ストーリー
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((caseStudy, index) => (
              <Link 
                key={caseStudy.id} 
                href={`/case-studies/${caseStudy.id}`}
                className={`group block animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="modern-card p-6 h-full relative overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${caseStudy.gradient} flex items-center justify-center text-white font-bold mr-3`}>
                          {caseStudy.client.company.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-[var(--primary-color)] text-sm">{caseStudy.client.company}</h3>
                          <p className="text-xs text-[var(--text-muted)]">{caseStudy.client.industry}</p>
                        </div>
                      </div>
                      <h2 className="text-lg font-bold text-[var(--primary-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300 line-clamp-2">
                        {caseStudy.title}
                      </h2>
                    </div>

                    {/* Challenge preview */}
                    <div className="mb-4 flex-grow">
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
                        {caseStudy.challenge.description}
                      </p>
                    </div>

                    {/* Key metrics preview */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-2">
                        {caseStudy.results.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                            <p className="text-lg font-bold text-[var(--accent-color)]">{metric.value}</p>
                            <p className="text-xs text-[var(--text-muted)]">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services & Duration */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {caseStudy.services.map((service, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[var(--primary-color)]/10 text-[var(--primary-color)] text-xs rounded-md">
                            {service}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[var(--text-muted)]">期間: {caseStudy.duration}</p>
                    </div>

                    {/* Read more indicator */}
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <span className="text-sm font-semibold text-[var(--primary-color)]">詳細を見る</span>
                      <svg className="w-5 h-5 text-[var(--accent-color)] transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            あなたの会社も<br />
            成功事例の仲間入りを
          </h2>
          <p className="text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            お客様一人ひとりの課題に合わせたオーダーメイドのソリューションをご提案いたします
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
          >
            無料相談を予約する
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}