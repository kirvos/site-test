
import { client } from '@/sanity/client';
import { CompanyInfo } from '@/types';

async function getCompanyInfo(): Promise<CompanyInfo | null> {
  const info = await client.fetch(`*[_type == "companyInfo"][0]{
    companyName,
    address,
    phoneNumber,
    email,
  }`);
  return info;
}

export default async function ContactPage() {
  const companyInfo = await getCompanyInfo();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">お問い合わせ</h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6 text-center">ご質問やご相談など、お気軽にお問い合わせください。</p>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3">連絡先情報</h2>
          <p className="text-gray-700 mb-2"><strong>会社名:</strong> {companyInfo?.companyName}</p>
          <p className="text-gray-700 mb-2"><strong>住所:</strong> {companyInfo?.address}</p>
          <p className="text-gray-700 mb-2"><strong>電話番号:</strong> {companyInfo?.phoneNumber}</p>
          <p className="text-gray-700 mb-2"><strong>メール:</strong> {companyInfo?.email}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3">お問い合わせフォーム</h2>
          {/* 簡易的なフォームのプレースホルダー */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">お名前</label>
              <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">メールアドレス</label>
              <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">お問い合わせ内容</label>
              <textarea id="message" name="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              送信
            </button>
          </form>
        </div>

        {/* Google Maps Placeholder */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3">アクセス</h2>
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg text-gray-500">
            Google Maps Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
