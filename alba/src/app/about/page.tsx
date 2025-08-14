import Link from 'next/link';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
              私たちについて
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-3xl mx-auto">
              ALBA社会保険労務士法人の理念と使命、<br />
              そして私たちが大切にしている価値観をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
                私たちの理念
              </h2>
              <div className="space-y-6">
                <div className="modern-card p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--primary-color)]">Vision - 目指す未来</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    労務の不安を「見える化」し、すべての企業が安心して事業運営に集中できる社会を実現する。
                  </p>
                </div>
                <div className="modern-card p-6">
                  <h3 className="text-xl font-semibold mb-3 text-[var(--primary-color)]">Mission - 私たちの使命</h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    専門家チームが一社一社に最適解を提供し、クライアント企業の持続的成長を労務面から支援する。
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-300">
              <div className="modern-card p-8 bg-gradient-to-br from-[var(--primary-color)]/5 to-[var(--secondary-color)]/5">
                <h3 className="text-2xl font-bold mb-6 text-[var(--primary-color)]">私たちの強み</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[var(--accent-color)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">豊富な実績と専門知識</h4>
                      <p className="text-[var(--text-muted)] text-sm">1,000社以上の企業様をサポート、99%の継続率</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[var(--accent-color)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">最新テクノロジーの活用</h4>
                      <p className="text-[var(--text-muted)] text-sm">クラウド労務システムで効率化を実現</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-[var(--accent-color)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">ワンストップサービス</h4>
                      <p className="text-[var(--text-muted)] text-sm">労務顧問からIPO支援まで一貫サポート</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Representative Message Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[var(--primary-color)]">
              代表挨拶
            </h2>
          </div>
          <div className="modern-card p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white text-4xl font-bold">
                  代表
                </div>
                <h3 className="text-xl font-semibold text-[var(--primary-color)]">
                  社会保険労務士<br />
                  代表社員 〇〇 〇〇
                </h3>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-4 text-[var(--text-muted)] leading-relaxed">
                  <p>
                    私たちALBA社会保険労務士法人は、「労務の不安を見える化し、事業の推進力に変える」という理念のもと、
                    企業様の人事労務課題の解決に取り組んでまいりました。
                  </p>
                  <p>
                    現代の企業経営において、労務リスクの管理は事業継続に直結する重要な課題です。
                    複雑化する労働法制、多様化する働き方、そしてデジタル化の波。
                    これらの変化に適切に対応するためには、専門的な知識と実践的な経験が不可欠です。
                  </p>
                  <p>
                    私たちは、単なる手続き代行にとどまらず、クライアント企業様の事業戦略に沿った
                    人事労務体制の構築をサポートいたします。就業規則の整備から労務DD、IPO支援まで、
                    企業の成長ステージに応じた最適なソリューションを提供してまいります。
                  </p>
                  <p className="font-semibold text-[var(--primary-color)]">
                    皆様の事業の成功と発展に貢献できるよう、チーム一同、全力でサポートさせていただきます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              私たちのチーム
            </h2>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto">
              経験豊富な社会保険労務士と専門スタッフが<br />
              お客様の課題解決に全力で取り組みます
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                SR1
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-color)]">
                社会保険労務士 〇〇 〇〇
              </h3>
              <p className="text-[var(--text-muted)] mb-4">労務顧問・就業規則専門</p>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <p>• 社会保険労務士歴15年</p>
                <p>• 労務DD実績50社以上</p>
                <p>• IPO支援経験豊富</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white text-xl font-bold">
                SR2
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-color)]">
                社会保険労務士 〇〇 〇〇
              </h3>
              <p className="text-[var(--text-muted)] mb-4">給与計算・助成金専門</p>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <p>• 社会保険労務士歴12年</p>
                <p>• 助成金採択実績100社以上</p>
                <p>• 給与計算システム導入支援</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                SP
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--primary-color)]">
                専門スタッフチーム
              </h3>
              <p className="text-[var(--text-muted)] mb-4">手続き・事務処理専門</p>
              <div className="space-y-2 text-sm text-[var(--text-muted)]">
                <p>• 経験豊富な専門スタッフ10名</p>
                <p>• 迅速・正確な手続き処理</p>
                <p>• クラウドシステム活用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[var(--primary-color)]">
                事務所概要
              </h2>
              <div className="modern-card p-6 lg:p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--primary-color)]">事務所名</h3>
                    <p className="text-[var(--text-muted)]">ALBA社会保険労務士法人</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--primary-color)]">代表社員</h3>
                    <p className="text-[var(--text-muted)]">社会保険労務士 〇〇 〇〇</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--primary-color)]">設立</h3>
                    <p className="text-[var(--text-muted)]">20XX年X月</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--primary-color)]">所在地</h3>
                    <p className="text-[var(--text-muted)]">
                      〒000-0000<br />
                      東京都〇〇区〇〇 X-X-X 〇〇ビル X階
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--primary-color)]">連絡先</h3>
                    <p className="text-[var(--text-muted)]">
                      TEL: 03-XXXX-XXXX<br />
                      FAX: 03-XXXX-XXXX<br />
                      Email: info@alba-sr.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[var(--primary-color)]">
                アクセス
              </h2>
              <div className="modern-card p-6 lg:p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-[var(--accent-color)] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <h3 className="font-semibold mb-1 text-[var(--primary-color)]">最寄り駅</h3>
                      <p className="text-[var(--text-muted)]">
                        JR〇〇線 「〇〇駅」 徒歩3分<br />
                        地下鉄〇〇線 「〇〇駅」 徒歩5分
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">地図エリア（Google Maps等）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            私たちと一緒に<br />
            労務課題を解決しませんか？
          </h2>
          <p className="text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            専門家チームがお客様の課題に最適なソリューションをご提案いたします
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
          >
            無料相談を予約
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}