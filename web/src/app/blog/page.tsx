import {client} from '@/sanity/client'
import {urlForImage} from '@/sanity/image'
import Link from 'next/link'

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

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
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

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {post.mainImage && (
              <img
                src={urlForImage(post.mainImage).width(500).url()}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {new Date(post.publishedAt).toLocaleDateString()}
                {post.categories && post.categories.length > 0 && (
                  <span className="ml-2"> | {post.categories.join(', ')}</span>
                )}
              </p>
              {/* You might want to add a short excerpt here */}
              <Link href={`/blog/${post.slug.current}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
