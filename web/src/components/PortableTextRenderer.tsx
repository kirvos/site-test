
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlFor } from '@/sanity/image';

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      return (
        <div className="relative w-full h-96 my-4">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || ''}
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }: { children: React.ReactNode }) => <h2 className="text-3xl font-bold my-3">{children}</h2>,
    h3: ({ children }: { children: React.ReactNode }) => <h3 className="text-2xl font-bold my-2">{children}</h3>,
    h4: ({ children }: { children: React.ReactNode }) => <h4 className="text-xl font-bold my-2">{children}</h4>,
    blockquote: ({ children }: { children: React.ReactNode }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => <ul className="list-disc pl-5 my-4">{children}</ul>,
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode; value: any }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-blue-600 hover:underline">
          {children}
        </a>
      );
    },
  },
};

interface PortableTextRendererProps {
  blocks: any[];
}

const PortableTextRenderer: React.FC<PortableTextRendererProps> = ({ blocks }) => {
  return <PortableText value={blocks} components={components} />;
};

export default PortableTextRenderer;
