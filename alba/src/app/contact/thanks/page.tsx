import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ContactThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Success Hero */}
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-color)]">
              お申し込みありがとうございました
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-8">
              無料相談のお申し込みを受け付けました。<br />
              24時間以内に担当者よりご連絡いたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="modern-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">メール確認</h3>
              <p className="text-sm text-[var(--text-muted)]">
                ご入力いただいたメールアドレスに確認メールをお送りしました
              </p>
            </div>

            <div className="modern-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">24時間以内</h3>
              <p className="text-sm text-[var(--text-muted)]">
                担当者より初回回答のご連絡をいたします
              </p>
            </div>

            <div className="modern-card p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">日程調整</h3>
              <p className="text-sm text-[var(--text-muted)]">
                ご都合の良い日時で面談の日程を調整いたします
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
              面談までの準備
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              より有効な相談時間にするため、以下をご準備いただけるとスムーズです
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="modern-card p-6">
              <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">ご準備いただくもの</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">現在の就業規則（あれば）</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">勤怠管理の現状</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">具体的な課題やお悩み</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">理想的な解決時期</span>
                </li>
              </ul>
            </div>

            <div className="modern-card p-6">
              <h3 className="text-xl font-bold text-[var(--primary-color)] mb-4">面談について</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">所要時間：30〜45分</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">オンライン・電話・来社対応</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">秘密保持を徹底</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-[var(--text-muted)]">完全無料</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="pb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
              お役立ち資料の無料ダウンロード
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              面談までの間に、労務管理に役立つ資料をご活用ください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="modern-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">
                    就業規則作成ガイド
                  </h3>
                  <p className="text-[var(--text-muted)] mb-4 text-sm">
                    法改正に対応した最新の就業規則のポイントをわかりやすく解説。チェックリスト付きで現在の規則の見直しにも活用できます。
                  </p>
                  <button className="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--accent-color)] font-semibold transition-colors duration-300">
                    無料ダウンロード
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="modern-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">
                    36協定チェックリスト
                  </h3>
                  <p className="text-[var(--text-muted)] mb-4 text-sm">
                    36協定の締結・届出から運用まで、法改正に対応した最新のチェックポイントを整理。適正な労働時間管理に必須のツールです。
                  </p>
                  <button className="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--accent-color)] font-semibold transition-colors duration-300">
                    無料ダウンロード
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="modern-card p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">
              お急ぎの場合は、直接お電話ください
            </h2>
            <p className="text-[var(--text-muted)] mb-6">
              緊急性の高いご相談については、お電話でも承っております
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <div>
                <a href="tel:0120-000-000" className="text-3xl font-bold text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors duration-300">
                  0120-000-000
                </a>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  平日 9:00〜18:00
                </div>
              </div>
              <div className="text-[var(--text-muted)]">または</div>
              <div>
                <a href="mailto:info@alba-olive.jp" className="text-xl font-bold text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors duration-300">
                  info@alba-olive.jp
                </a>
                <div className="text-sm text-[var(--text-muted)] mt-1">
                  24時間受付
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[var(--primary-color)] mb-6">
              その他のサービスもご覧ください
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/services"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
              >
                サービス一覧
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link 
                href="/industries"
                className="inline-flex items-center px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                業種別事例
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center px-6 py-3 border-2 border-[var(--primary-color)] text-[var(--primary-color)] font-semibold rounded-lg hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                料金プラン
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}