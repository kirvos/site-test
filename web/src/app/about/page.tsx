
import { client } from '@/sanity/client';
import { CompanyInfo } from '@/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import PortableTextRenderer from '@/components/PortableTextRenderer';

async function getCompanyInfo(): Promise<CompanyInfo | null> {
  const info = await client.fetch(`*[_type == "companyInfo"][0]{
    companyName,
    address,
    phoneNumber,
    email,
    logo,
    description,
  }`);
  return info;
}

export default async function AboutPage() {
  const companyInfo = await getCompanyInfo();

  if (!companyInfo) {
    return <div className="text-center py-12">会社情報が見つかりませんでした。</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{companyInfo.companyName || '会社概要'}</h1>

      {companyInfo.logo && (
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-md">
          <Image
            src={urlFor(companyInfo.logo).url()}
            alt={companyInfo.companyName || 'Logo'}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">基本情報</h2>
          <p className="text-gray-700 mb-2"><strong>所在地:</strong> {companyInfo.address}</p>
          <p className="text-gray-700 mb-2"><strong>電話番号:</strong> {companyInfo.phoneNumber}</p>
          <p className="text-gray-700 mb-2"><strong>メール:</strong> {companyInfo.email}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">会社紹介</h2>
          {companyInfo.description && <PortableTextRenderer blocks={companyInfo.description} />}
        </div>
      </div>
    </div>
  );
}
