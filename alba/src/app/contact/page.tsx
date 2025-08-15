'use client';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const lpData = {
  hero: {
    title: "労務の不安を\"見える化\"。無料相談で最適解を",
    subtitle: "就業規則からクラウド運用、IPO労務まで。専門家チームが御社の状況をヒアリングし、最短ルートをご提案。",
    badges: ["1,000+ 顧客企業", "継続率 99%", "年間手続き 50,000+", "助成金採択 100+", "24時間以内 初回回答"]
  },
  personas: [
    {
      id: "ceo",
      title: "経営者向け",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
      pains: ["労務リスクが見えない", "IPO労務DD", "制度設計", "コンプラリスク"],
      solutions: ["リスク可視化レポート", "IPO準備ロードマップ", "制度設計支援", "コンプライアンス体制構築"],
      theme: "経営・IPO"
    },
    {
      id: "backoffice",
      title: "管理部門向け",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      pains: ["手続き負担", "法改正対応の遅れ", "属人化", "ミス・遅延"],
      solutions: ["手続き完全代行", "法改正自動対応", "業務標準化", "品質向上・効率化"],
      theme: "手続き・標準化"
    },
    {
      id: "startup",
      title: "スタートアップ向け",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      pains: ["人員急増", "SO制度", "リモート規程", "資金調達"],
      solutions: ["成長対応体制", "ストックオプション設計", "働き方制度整備", "助成金活用"],
      theme: "体制構築・規程"
    },
    {
      id: "medical",
      title: "医療・介護向け",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      ),
      pains: ["24時間体制の管理", "夜勤計算", "安全衛生", "特殊勤務"],
      solutions: ["24時間労務管理", "夜勤手当適正計算", "安全衛生体制", "医療特化制度"],
      theme: "医療特化"
    }
  ],
  valueBullets: [
    {
      title: "労務リスクの可視化レポート",
      description: "現状の労務リスクを優先度とともに整理し、対応すべき項目を明確化",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
    },
    {
      title: "最適な進め方のロードマップ",
      description: "貴社の状況に合わせた最短・最安の代替案を含む実行計画を提示",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
        </svg>
      )
    },
    {
      title: "初期見積り & スケジュール",
      description: "上場基準や法改正対応の観点も整理した具体的なコスト・期間を明示",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ],
  metrics: [
    { label: "顧客企業", value: "1000+", description: "幅広い業界で信頼" },
    { label: "継続率", value: "99%", description: "長期パートナーシップ" },
    { label: "年間手続き", value: "50000+", description: "豊富な実績" },
    { label: "助成金採択", value: "100+", description: "資金調達支援" }
  ],
  testimonials: [
    {
      quote: "複雑な社会保険手続きがスムーズになり、本業に集中できるようになりました。",
      author: "田中 様",
      company: "製造業A社",
      role: "人事部長"
    },
    {
      quote: "助成金申請で大きな成果を上げることができ、事業拡大の資金調達に成功しました。",
      author: "佐藤 様",
      company: "IT企業B社",
      role: "代表取締役"
    },
    {
      quote: "迅速で丁寧な対応により、急な手続きにも柔軟に対応していただけて助かっています。",
      author: "鈴木 様",
      company: "サービス業C社",
      role: "総務課長"
    }
  ],
  services: [
    {
      title: "社会保険アウトソーシング",
      description: "社会保険手続きの煩雑さを解消し、業務効率化を支援",
      theme: "手続き・アウトソーシング",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      )
    },
    {
      title: "スポット手続き代行",
      description: "必要な時に必要な手続きを迅速に代行",
      theme: "緊急・スポット対応",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: "助成金・補助金申請代行",
      description: "複雑な助成金・補助金申請をサポートし、受給を最大化",
      theme: "助成金・資金調達",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    },
    {
      title: "自治体向けBPOサービス",
      description: "自治体特有のニーズに合わせたBPOサービス",
      theme: "自治体・BPO",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    }
  ],
  flow: [
    { step: "1", title: "フォーム送信", description: "お困りの内容を簡単入力（約2分）" },
    { step: "2", title: "日程確定", description: "24時間以内にご連絡、最適な日程を調整" },
    { step: "3", title: "オンライン相談", description: "現状ヒアリング & 初期提案（30〜45分）" },
    { step: "4", title: "見積り・計画提示", description: "具体的な解決策と継続支援プランをご提案" }
  ],
  faq: [
    {
      q: "本当に無料ですか？",
      a: "はい、初回の個別相談は完全無料です。オンラインで30〜45分を想定しており、費用は一切かかりません。"
    },
    {
      q: "何を準備すべきですか？",
      a: "就業規則や勤怠の現状、直近の課題感を共有いただけると議論がスムーズです。特別な準備は不要で、現状のお悩みをお聞かせください。"
    },
    {
      q: "秘密保持は可能ですか？",
      a: "はい、必要に応じてNDA（秘密保持契約）の締結に対応いたします。お客様の機密情報は厳格に管理いたします。"
    },
    {
      q: "急ぎの相談は対応可能ですか？",
      a: "24時間以内の初回回答を基本とし、緊急度に応じて優先対応いたします。お急ぎの場合はその旨をお伝えください。"
    },
    {
      q: "IPOや法改正の個別論点も相談できますか？",
      a: "はい、IPO準備の労務DD、最新の法改正対応など、専門性の高い論点についても詳しくご相談いただけます。"
    }
  ]
};

export default function ContactPage() {
  const [activePersona, setActivePersona] = useState('ceo');
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    size: '',
    theme: '',
    mode: 'online',
    message: '',
    privacy: false,
    nda: false
  });

  const handleFormChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePersonaConsult = (theme: string) => {
    handleFormChange('theme', theme);
    document.getElementById('consult-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServiceConsult = (theme: string) => {
    handleFormChange('theme', theme);
    document.getElementById('consult-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.company && formData.name && formData.email && formData.theme && formData.privacy) {
      setFormStep(2);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here would be the actual form submission logic
    console.log('Form submitted:', formData);
    // Redirect to thanks page
    window.location.href = '/contact/thanks';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16">
      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-lg bg-gradient-to-l from-[var(--accent-color)] to-[var(--accent-secondary)] animate-float delay-500 transform rotate-45"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {lpData.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-muted)] max-w-4xl mx-auto mb-8">
              {lpData.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('consult-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                data-gtm="hero_cta_click"
              >
                無料相談を予約
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </button>
              <button className="inline-flex items-center px-8 py-4 bg-white/20 text-[var(--primary-color)] border-2 border-[var(--primary-color)]/30 rounded-lg font-bold hover:bg-[var(--primary-color)]/10 transition-colors duration-300 transform hover:scale-105">
                労務リスクを30秒で診断
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {lpData.hero.badges.map((badge, index) => (
                <div key={index} className="text-center p-4 bg-white/80 rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-[var(--primary-color)]">{badge}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section id="personas" className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              お客様のお立場別サポート内容
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              それぞれの課題に特化した解決策をご提案します
            </p>
          </div>

          {/* Persona Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {lpData.personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => setActivePersona(persona.id)}
                className={`px-6 py-3 font-semibold transition-colors duration-300 border-b-2 ${
                  activePersona === persona.id
                    ? 'text-[var(--primary-color)] border-[var(--primary-color)]'
                    : 'text-[var(--text-muted)] border-transparent hover:text-[var(--primary-color)]'
                }`}
              >
                {persona.title}
              </button>
            ))}
          </div>

          {/* Active Persona Content */}
          <div className="modern-card p-8">
            {lpData.personas
              .filter(persona => persona.id === activePersona)
              .map((persona) => (
                <div key={persona.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white mr-4">
                        {persona.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--primary-color)]">よくあるお悩み</h3>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {persona.pains.map((pain, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-[var(--text-muted)]">{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-6">私たちの解決策</h3>
                    <ul className="space-y-3 mb-6">
                      {persona.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-[var(--accent-color)] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-[var(--text-muted)]">{solution}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => handlePersonaConsult(persona.theme)}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                      data-gtm="persona_consult_click"
                    >
                      この課題で相談する
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value" className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              無料相談で得られること
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-4">
              30〜45分の相談で、御社の労務課題の全体像が明確になります
            </p>
            <div className="text-sm text-[var(--accent-color)] font-semibold">
              相談は完全無料 / オンライン対応 / 24時間以内に初回回答
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lpData.valueBullets.map((bullet, index) => (
              <div key={index} className="modern-card p-6 text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {bullet.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--primary-color)] mb-3">{bullet.title}</h3>
                <p className="text-[var(--text-muted)]">{bullet.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="proof" className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              1,000社以上の実績と信頼
            </h2>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {lpData.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-[var(--primary-color)] mb-1">{metric.label}</div>
                <div className="text-sm text-[var(--text-muted)]">{metric.description}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {lpData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-[var(--primary-color)]/20 mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <blockquote className="text-[var(--text-muted)] mb-4">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                <div className="font-semibold text-[var(--primary-color)]">{testimonial.author}</div>
                <div className="text-sm text-[var(--text-muted)]">{testimonial.company} {testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              サービス別のご相談も承ります
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              具体的なサービスについてお悩みの方は、こちらからご相談ください
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lpData.services.map((service, index) => (
              <div key={index} className="modern-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--primary-color)] mb-2">{service.title}</h3>
                    <p className="text-[var(--text-muted)] mb-4">{service.description}</p>
                    <button
                      onClick={() => handleServiceConsult(service.theme)}
                      className="inline-flex items-center text-[var(--primary-color)] hover:text-[var(--accent-color)] font-semibold transition-colors duration-300"
                    >
                      このテーマで無料相談
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section id="flow" className="pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              相談の流れ
            </h2>
            <p className="text-lg text-[var(--text-muted)]">
              最短当日〜翌営業日で日程確定。オンライン30〜45分で完結。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {lpData.flow.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              よくあるご質問
            </h2>
          </div>

          <div className="space-y-6">
            {lpData.faq.map((item, index) => (
              <div key={index} className="modern-card p-6">
                <h3 className="text-lg font-bold text-[var(--primary-color)] mb-3">{item.q}</h3>
                <p className="text-[var(--text-muted)]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="py-16 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            労務の不安を、今日から解消
          </h2>
          <p className="!text-white text-lg sm:text-xl mb-8" style={{color: '#ffffff !important'}}>
            専門家チームが御社の課題を整理し、最短ルートで解決策をご提案いたします
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => document.getElementById('consult-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--primary-color)] rounded-lg font-bold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105"
            >
              無料相談を予約
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-white/20 text-white border-2 border-white/30 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 transform hover:scale-105">
              労務リスクを30秒で診断
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consult-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[var(--primary-color)]">
              無料相談のお申し込み
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-4">
              簡単なフォームでお申し込みいただけます
            </p>
            <div className="text-sm text-[var(--accent-color)] font-semibold">
              24時間以内に初回回答いたします
            </div>
          </div>

          <div className="modern-card p-8">
            {formStep === 1 ? (
              <form onSubmit={handleStep1Submit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                      会社名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleFormChange('company', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="株式会社○○"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="example@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleFormChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                      placeholder="03-1234-5678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                      従業員規模
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => handleFormChange('size', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="1-9">1-9名</option>
                      <option value="10-49">10-49名</option>
                      <option value="50-299">50-299名</option>
                      <option value="300+">300名以上</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                      相談テーマ <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.theme}
                      onChange={(e) => handleFormChange('theme', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="就業規則">就業規則</option>
                      <option value="IPO">IPO準備</option>
                      <option value="手続き">手続き代行</option>
                      <option value="助成金">助成金申請</option>
                      <option value="クラウド運用">クラウド運用</option>
                      <option value="経営・IPO">経営・IPO</option>
                      <option value="手続き・標準化">手続き・標準化</option>
                      <option value="体制構築・規程">体制構築・規程</option>
                      <option value="医療特化">医療特化</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                    希望面談方法
                  </label>
                  <div className="flex gap-4">
                    {['online', 'phone', 'visit'].map((mode) => (
                      <label key={mode} className="flex items-center">
                        <input
                          type="radio"
                          name="mode"
                          value={mode}
                          checked={formData.mode === mode}
                          onChange={(e) => handleFormChange('mode', e.target.value)}
                          className="mr-2"
                        />
                        <span className="text-[var(--text-muted)]">
                          {mode === 'online' ? 'オンライン' : mode === 'phone' ? '電話' : '来社'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      required
                      checked={formData.privacy}
                      onChange={(e) => handleFormChange('privacy', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[var(--text-muted)]">
                      <Link href="/privacy" className="text-[var(--primary-color)] hover:underline">
                        個人情報保護方針
                      </Link>
                      に同意する <span className="text-red-500">*</span>
                    </span>
                  </label>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                    data-gtm="form_step1_next"
                  >
                    詳細入力に進む
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit}>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-[var(--primary-color)] mb-2">
                    現状の課題（詳細）
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleFormChange('message', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent h-32"
                    placeholder="現在お困りの具体的な内容や、ご相談したい事項をお聞かせください"
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.nda}
                      onChange={(e) => handleFormChange('nda', e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-[var(--text-muted)]">
                      NDA（秘密保持契約）の締結を希望する
                    </span>
                  </label>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="px-6 py-3 border border-gray-300 text-[var(--text-muted)] rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    戻る
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-bold rounded-lg hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105"
                    data-gtm="form_submit"
                  >
                    無料相談を申し込む
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="text-center mt-8">
            <div className="text-sm text-[var(--text-muted)] mb-4">
              お急ぎの場合は、直接お電話ください
            </div>
            <a href="tel:0120-000-000" className="text-xl font-bold text-[var(--primary-color)] hover:text-[var(--accent-color)] transition-colors duration-300">
              0120-000-000
            </a>
            <div className="text-sm text-[var(--text-muted)]">
              平日 9:00〜18:00
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}