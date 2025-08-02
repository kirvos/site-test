
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/client';
import { CompanyInfo } from '@/types';
import { urlFor } from '@/sanity/image';

async function getCompanyInfo(): Promise<CompanyInfo | null> {
  const info = await client.fetch(`*[_type == "companyInfo"][0]{
    companyName,
    logo,
  }`);
  return info;
}

export default async function Header() {
  const companyInfo = await getCompanyInfo();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          {companyInfo?.logo && (
            <Image
              src={urlFor(companyInfo.logo).url()}
              alt={companyInfo.companyName || 'Logo'}
              width={40}
              height={40}
              className="mr-2"
            />
          )}
          <span className="text-2xl font-bold text-gray-800">
            {companyInfo?.companyName || '工務店サイト'}
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">実績</Link></li>
            <li><Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">サービス</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">会社概要</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">お問い合わせ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
