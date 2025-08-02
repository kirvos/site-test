
import { client } from '@/sanity/client';
import { Service } from '@/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import PortableTextRenderer from '@/components/PortableTextRenderer';

interface ServicePageProps {
  params: { slug: string };
}

async function getService(slug: string): Promise<Service> {
  const service = await client.fetch(`*[_type == "service" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    mainImage,
    description,
  }`, { slug });
  return service;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params.slug);

  if (!service) {
    return <div className="text-center py-12">サービスが見つかりませんでした。</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>

      {service.mainImage && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={urlFor(service.mainImage).url()}
            alt={service.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="prose max-w-none">
        {service.description && <PortableTextRenderer blocks={service.description} />}
      </div>
    </div>
  );
}
