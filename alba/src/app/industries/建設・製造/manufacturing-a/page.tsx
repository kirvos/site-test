import Link from 'next/link';
import Footer from '@/components/Footer';

const caseStudy = {
  id: 'manufacturing-a',
  title: '製造業A社様 - 社会保険業務効率化プロジェクト',
  client: {
    name: '田中様',
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
    author: "田中様"
  },
  services: ['社会保険アウトソーシング'],
  duration: '12ヶ月',
  gradient: 'from-blue-500 to-purple-600'
};

export default function CaseStudyDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Breadcrumbs */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--primary-color)]">ホーム</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-[var(--primary-color)]">業種別ソリューション</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-[var(--primary-color)]">建設・製造</Link>
            <span>/</span>
            <span className="text-[var(--primary-color)]">導入事例</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold mb-4">
              建設・製造業界 導入事例
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              {caseStudy.challenge.description}
            </p>
          </div>

          {/* Client Info */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="modern-card p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">会社名</p>
                  <p className="font-semibold">{caseStudy.client.company}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">業種</p>
                  <p className="font-semibold">{caseStudy.client.industry}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">従業員数</p>
                  <p className="font-semibold">{caseStudy.client.employees}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">所在地</p>
                  <p className="font-semibold">{caseStudy.client.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Challenge */}
            <div className="animate-fade-in-up">
              <div className="modern-card p-6 sm:p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--primary-color)]">{caseStudy.challenge.title}</h2>
                </div>
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{caseStudy.challenge.description}</p>
                <ul className="space-y-3">
                  {caseStudy.challenge.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[var(--text-muted)] text-sm">{detail}</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--primary-color)]">{caseStudy.solution.title}</h2>
                </div>
                <p className="text-[var(--text-muted)] mb-6 leading-relaxed">{caseStudy.solution.description}</p>
                <ul className="space-y-3">
                  {caseStudy.solution.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[var(--text-muted)] text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up delay-200">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">{caseStudy.results.title}</h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">{caseStudy.results.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-300">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--accent-color)] mb-2">{metric.value}</div>
                <div className="font-semibold text-[var(--primary-color)] mb-2">{metric.label}</div>
                <div className="text-sm text-[var(--text-muted)]">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="pb-16 animate-fade-in-up delay-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-8 sm:p-12 text-center relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${caseStudy.gradient} opacity-5`}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 text-[var(--primary-color)]/20">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>
              <blockquote className="text-lg sm:text-xl text-[var(--text-muted)] leading-relaxed mb-6 italic">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="font-semibold text-[var(--primary-color)]">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                {caseStudy.client.role} - {caseStudy.client.company}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card p-6">
              <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">提供サービス</h3>
              <div className="space-y-2">
                {caseStudy.services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <svg className="w-4 h-4 text-[var(--accent-color)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-[var(--text-muted)]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="modern-card p-6">
              <h3 className="text-lg font-semibold text-[var(--primary-color)] mb-4">プロジェクト期間</h3>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-[var(--accent-color)] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-[var(--text-muted)]">{caseStudy.duration}</span>
              </div>
            </div>
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
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            お客様一人ひとりの課題に合わせたオーダーメイドのソリューションをご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
            >
              無料相談を予約する
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </Link>
            <Link 
              href="/industries" 
              className="inline-flex items-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 transform hover:scale-105"
            >
              他の業種事例を見る
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