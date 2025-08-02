
import { client } from '@/sanity/client';
import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';

async function getAllProjects(): Promise<Project[]> {
  const projects = await client.fetch(`*[_type == "project"] | order(completionDate desc){
    _id,
    title,
    "slug": slug.current,
    mainImage,
    category,
    completionDate,
  }`);
  return projects;
}

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">実績一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      {projects.length === 0 && (
        <p className="text-center text-gray-600 text-lg">まだ実績がありません。</p>
      )}
    </div>
  );
}
