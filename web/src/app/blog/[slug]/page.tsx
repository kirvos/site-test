import {client} from '@/sanity/client'
import {urlForImage} from '@/sanity/image'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  categories: { title: string }[];
  author: { name: string };
  body: any[];
}

async function getPost(slug: string): Promise<Post> {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "categories": categories[]->title,
    "author": author->name,
    body
  }`;
  return client.fetch(query);
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <Image src={urlForImage(value).url()} alt="" width={800} height={400} className="my-4" />
      ),
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        {new Date(post.publishedAt).toLocaleDateString()}
        {post.categories && post.categories.length > 0 && (
          <span className="ml-2"> | {post.categories.join(', ')}</span>
        )}
      </p>
      {post.mainImage && (
        <Image
          src={urlForImage(post.mainImage).url()}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-96 object-cover mb-8"
        />
      )}
      <div className="prose lg:prose-xl max-w-none">
        <PortableText value={post.body} components={PortableTextComponent} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{
    slug {
      current
    }
  }`;
  const posts = await client.fetch(query);

  return posts.map((post: { slug: { current: string } }) => ({
    slug: post.slug.current,
  }));
}
