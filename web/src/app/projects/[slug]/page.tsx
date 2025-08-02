
import { client } from '@/sanity/client';
import { Project } from '@/types';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';
import PortableTextRenderer from '@/components/PortableTextRenderer';

interface ProjectPageProps {
  params: { slug: string };
}

async function getProject(slug: string): Promise<Project> {
  const project = await client.fetch(`*[_type == "project" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    mainImage,
    description,
    gallery,
    category,
    client,
    completionDate,
  }`, { slug });
  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProject(params.slug);

  if (!project) {
    return <div className="text-center py-12">実績が見つかりませんでした。</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>

      {project.mainImage && (
        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">プロジェクト概要</h2>
          {project.category && <p className="text-gray-700 mb-2"><strong>カテゴリ:</strong> {project.category}</p>}
          {project.client && <p className="text-gray-700 mb-2"><strong>施主:</strong> {project.client}</p>}
          {project.completionDate && <p className="text-gray-700 mb-2"><strong>完成日:</strong> {project.completionDate}</p>}
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-3">詳細</h2>
          {project.description && <PortableTextRenderer blocks={project.description} />}
        </div>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative w-full h-48 rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={urlFor(image).url()}
                  alt={`Gallery image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
