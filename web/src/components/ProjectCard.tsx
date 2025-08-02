
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/types';
import { urlFor } from '@/sanity/image';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg border border-gray-200">
        {project.mainImage && (
          <div className="relative w-full h-64">
            <Image
              src={urlFor(project.mainImage).url()}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{project.title}</h3>
          {project.category && (
            <p className="text-sm text-gray-500 mb-2">カテゴリ: {project.category}</p>
          )}
          {project.completionDate && (
            <p className="text-sm text-gray-500">完成日: {project.completionDate}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
