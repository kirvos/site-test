
import { client } from '@/sanity/client';
import { Service } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/image';

async function getAllServices(): Promise<Service[]> {
  const services = await client.fetch(`*[_type == "service"]{
    _id,
    title,
    "slug": slug.current,
    mainImage,
    description,
  }`);
  return services;
}

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">サービス一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service._id} className="block group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg border border-gray-200">
              {service.mainImage && (
                <div className="relative w-full h-48">
                  <Image
                    src={urlFor(service.mainImage).url()}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{service.title}</h2>
                {/* Description will be rendered on detail page */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {services.length === 0 && (
        <p className="text-center text-gray-600 text-lg">まだサービスがありません。</p>
      )}
    </div>
  );
}
