'use client';
import { useState } from 'react';
import Link from 'next/link';

interface SimulatorInputs {
  employeeCount: string;
  industry: string;
  services: string[];
}

interface EstimateResult {
  monthlyFee: number;
  setupFee: number;
  recommendedPlan: string;
  includedServices: string[];
  additionalServices: { service: string; price: number }[];
}

export default function CostSimulator() {
  const [inputs, setInputs] = useState<SimulatorInputs>({
    employeeCount: '',
    industry: '',
    services: []
  });
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const employeeOptions = [
    { value: '1-30', label: '1-30名', multiplier: 1 },
    { value: '31-100', label: '31-100名', multiplier: 1.5 },
    { value: '101-300', label: '101-300名', multiplier: 2.5 },
    { value: '301+', label: '301名以上', multiplier: 4 }
  ];

  const industryOptions = [
    { value: 'it-startup', label: 'IT・スタートアップ', complexity: 1.2 },
    { value: 'healthcare', label: '医療・介護', complexity: 1.4 },
    { value: 'construction', label: '建設・製造', complexity: 1.3 },
    { value: 'retail', label: '小売・飲食', complexity: 1.1 },
    { value: 'professional', label: 'プロフェッショナルファーム', complexity: 1.5 },
    { value: 'other', label: 'その他', complexity: 1.0 }
  ];

  const serviceOptions = [
    { value: 'romu-komon', label: '労務顧問', basePrice: 50000 },
    { value: 'kyuyo-keisan', label: '給与計算', basePrice: 20000 },
    { value: 'josei-shinsei', label: '助成金申請', basePrice: 30000 },
    { value: 'shugyo-kisoku', label: '就業規則作成', basePrice: 200000, isOneTime: true },
    { value: 'ipo-shien', label: 'IPO準備支援', basePrice: 100000 },
    { value: 'cloud-dounyu', label: 'クラウド労務導入', basePrice: 50000, isOneTime: true }
  ];

  const handleServiceChange = (serviceValue: string, checked: boolean) => {
    setInputs(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceValue]
        : prev.services.filter(s => s !== serviceValue)
    }));
  };

  const calculateEstimate = () => {
    if (!inputs.employeeCount || !inputs.industry) {
      alert('従業員数と業種を選択してください');
      return;
    }

    if (inputs.services.length === 0) {
      alert('希望サービスを1つ以上選択してください');
      return;
    }

    setIsCalculating(true);

    // シミュレーション演出のための遅延
    setTimeout(() => {
      const employeeData = employeeOptions.find(e => e.value === inputs.employeeCount);
      const industryData = industryOptions.find(i => i.value === inputs.industry);
      
      if (!employeeData || !industryData) return;

      // 顧問契約があるかチェック
      const hasAdvisoryContract = inputs.services.includes('romu-komon');
      
      let baseMonthlyFee = 0;
      let recommendedPlan = 'スポット利用のみ';
      let monthlyAdditions = 0;
      let setupFee = 0;
      const additionalServices: { service: string; price: number }[] = [];

      if (hasAdvisoryContract) {
        // 顧問契約がある場合の基本料金計算
        baseMonthlyFee = 30000; // ライトプランベース
        recommendedPlan = 'ライト';
        
        // 従業員数による調整
        if (employeeData.multiplier >= 2.5) {
          baseMonthlyFee = 150000; // プロプラン
          recommendedPlan = 'プロ';
        } else if (employeeData.multiplier >= 1.5) {
          baseMonthlyFee = 80000; // スタンダードプラン
          recommendedPlan = 'スタンダード';
        }

        // 業種による複雑さ調整
        baseMonthlyFee = Math.round(baseMonthlyFee * industryData.complexity);
      }

      // サービス料金計算
      inputs.services.forEach(serviceValue => {
        const service = serviceOptions.find(s => s.value === serviceValue);
        if (service) {
          let adjustedPrice = service.basePrice;
          
          // 従業員数と業種による料金調整
          if (service.value !== 'romu-komon') {
            adjustedPrice = Math.round(service.basePrice * employeeData.multiplier * industryData.complexity);
          }

          if (service.isOneTime) {
            setupFee += adjustedPrice;
            additionalServices.push({
              service: service.label,
              price: adjustedPrice
            });
          } else if (service.value !== 'romu-komon') {
            // 労務顧問以外は追加料金として計算
            monthlyAdditions += adjustedPrice;
            additionalServices.push({
              service: service.label,
              price: adjustedPrice
            });
          }
        }
      });

      // 基本プランに含まれるサービス
      const includedServices = [];
      if (hasAdvisoryContract) {
        if (recommendedPlan === 'ライト') {
          includedServices.push('基本的な労務相談対応', '社会保険手続き代行', 'メールサポート');
        } else if (recommendedPlan === 'スタンダード') {
          includedServices.push('包括的な労務相談対応', '社会保険・労働保険手続き代行', '就業規則作成・改訂', '助成金申請支援', '電話・メールサポート');
        } else {
          includedServices.push('戦略的労務コンサルティング', '全労務手続き代行', '人事制度設計・評価制度構築', '労務DD・IPO準備支援', '24時間緊急サポート');
        }
      } else {
        includedServices.push('選択されたスポットサービスのみ');
      }

      const result: EstimateResult = {
        monthlyFee: baseMonthlyFee + monthlyAdditions,
        setupFee,
        recommendedPlan,
        includedServices,
        additionalServices: hasAdvisoryContract ? additionalServices : additionalServices
      };

      setEstimate(result);
      setIsCalculating(false);
    }, 1500);
  };

  const resetSimulator = () => {
    setInputs({ employeeCount: '', industry: '', services: [] });
    setEstimate(null);
  };

  if (estimate) {
    return (
      <div className="modern-card p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-[var(--primary-color)]">
            概算見積もり結果
          </h3>
          <p className="text-[var(--text-muted)]">
            お客様の条件に基づいた概算費用をご提案いたします
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-[var(--primary-color)]/10 to-[var(--secondary-color)]/10 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-[var(--primary-color)]">
                おすすめプラン
              </h4>
              <div className="text-3xl font-bold gradient-text mb-2">
                {estimate.recommendedPlan}
              </div>
              <div className="text-2xl font-semibold text-[var(--accent-color)]">
                {estimate.recommendedPlan === 'スポット利用のみ' ? (
                  <>
                    {estimate.setupFee > 0 && (
                      <div>総額 {estimate.setupFee.toLocaleString()}円</div>
                    )}
                    {estimate.monthlyFee > 0 && (
                      <div>月額 {estimate.monthlyFee.toLocaleString()}円</div>
                    )}
                  </>
                ) : (
                  <div>月額 {estimate.monthlyFee.toLocaleString()}円</div>
                )}
              </div>
              {estimate.setupFee > 0 && estimate.recommendedPlan !== 'スポット利用のみ' && (
                <div className="text-sm text-[var(--text-muted)] mt-2">
                  初期費用: {estimate.setupFee.toLocaleString()}円
                </div>
              )}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                基本プランに含まれるサービス
              </h4>
              <ul className="space-y-2">
                {estimate.includedServices.map((service, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-[var(--text-muted)]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            {estimate.additionalServices.length > 0 && (
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[var(--primary-color)]">
                  追加サービス
                </h4>
                <div className="space-y-2">
                  {estimate.additionalServices.map((service, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-[var(--text-muted)]">{service.service}</span>
                      <span className="font-semibold text-[var(--accent-color)]">
                        +{service.price.toLocaleString()}円
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <h4 className="text-sm font-semibold text-yellow-800 mb-1">
                    ご注意
                  </h4>
                  <p className="text-sm text-yellow-700">
                    この金額は概算です。詳細な見積もりは無料相談にてご提案いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-3 rounded-lg font-bold hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 text-center"
          >
            詳細見積もりを依頼
          </Link>
          <button
            onClick={resetSimulator}
            className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-8 py-3 rounded-lg font-bold hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            再計算する
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="modern-card p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">
            基本情報
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                従業員数 <span className="text-red-500">*</span>
              </label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                value={inputs.employeeCount}
                onChange={(e) => setInputs(prev => ({ ...prev, employeeCount: e.target.value }))}
              >
                <option value="">選択してください</option>
                {employeeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                業種 <span className="text-red-500">*</span>
              </label>
              <select 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                value={inputs.industry}
                onChange={(e) => setInputs(prev => ({ ...prev, industry: e.target.value }))}
              >
                <option value="">選択してください</option>
                {industryOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[var(--primary-color)]">
            希望サービス
          </h3>
          <div className="space-y-3">
            {serviceOptions.map((service) => (
              <label key={service.value} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-3 w-4 h-4 text-[var(--primary-color)] border-gray-300 rounded focus:ring-[var(--primary-color)]"
                  checked={inputs.services.includes(service.value)}
                  onChange={(e) => handleServiceChange(service.value, e.target.checked)}
                />
                <div className="flex-1">
                  <span className="text-[var(--text-muted)]">
                    {service.label}
                  </span>
                  {service.isOneTime && (
                    <span className="text-xs text-blue-600 ml-2">(初期費用)</span>
                  )}
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={calculateEstimate}
          disabled={isCalculating}
          className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-lg font-bold hover:from-[var(--secondary-color)] hover:to-[var(--primary-color)] transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
        >
          {isCalculating ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              計算中...
            </div>
          ) : (
            '概算費用を計算する'
          )}
        </button>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          より詳細なお見積りについては、無料相談にてご提案いたします
        </p>
      </div>
    </div>
  );
}