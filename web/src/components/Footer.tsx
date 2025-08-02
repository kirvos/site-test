
import Link from 'next/link';
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

export default async function Footer() {
  const companyInfo = await getCompanyInfo();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">{companyInfo?.companyName || '工務店サイト'}</h3>
          <p className="text-gray-400">{companyInfo?.address}</p>
          <p className="text-gray-400">電話: {companyInfo?.phoneNumber}</p>
          <p className="text-gray-400">メール: {companyInfo?.email}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">ナビゲーション</h3>
          <ul className="space-y-2">
            <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">実績</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">サービス</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">会社概要</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">お問い合わせ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">SNS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} {companyInfo?.companyName || '工務店サイト'}. All rights reserved.
      </div>
    </footer>
  );
}
