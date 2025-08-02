
import { client } from '@/sanity/client';
import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/image';

async function getProjects(): Promise<Project[]> {
  const projects = await client.fetch(`*[_type == "project"] | order(completionDate desc) [0...3]{
    _id,
    title,
    "slug": slug.current,
    mainImage,
    category,
    completionDate,
  }`);
  return projects;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x1080/334155/64748B?text=Your+Dream+Home")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">あなたの理想を、カタチに。</h1>
          <p className="text-xl md:text-2xl mb-8">確かな技術とデザインで、未来を築きます。</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg">
            お問い合わせ
          </Link>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">最新の実績</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-center text-gray-600 text-lg">まだ実績がありません。</p>
        )}
        <div className="text-center mt-12">
          <Link href="/projects" className="text-blue-600 hover:underline text-lg font-semibold">
            全ての実績を見る &rarr;
          </Link>
        </div>
      </section>

      {/* Services Section (Placeholder) */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">私たちのサービス</h2>
          <p className="text-lg text-gray-700 mb-8">新築からリノベーションまで、お客様のニーズに合わせた幅広いサービスを提供しています。</p>
          <Link href="/services" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg">
            サービス一覧を見る
          </Link>
        </div>
      </section>
    </>
  );
}
