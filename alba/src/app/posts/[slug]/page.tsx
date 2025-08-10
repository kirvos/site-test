import { getPostBySlug } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';

interface Post {
  _id: string;
  title: string;
  publishedAt?: string;
  _createdAt: string;
  body?: Array<{
    _type: string;
    children?: Array<{ text: string }>;
  }>;
  slug: { current: string };
  author?: { name: string };
  mainImage?: {
    asset: { url: string };
    alt?: string;
  };
  categories?: Array<{ title: string }>;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const isPreview = cookieStore.get('sanity-preview')?.value === 'true';
  
  const post = await getPostBySlug(slug, isPreview);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* プレビューバナー */}
      {isPreview && (
        <div className="bg-yellow-500 text-black px-4 py-2 text-center">
          <span className="font-semibold">プレビューモード</span> - ドラフト記事を表示中
          <Link 
            href="/api/exit-preview" 
            className="ml-4 underline hover:text-gray-700"
          >
            プレビューを終了
          </Link>
        </div>
      )}
      
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← ホームに戻る
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-8 text-gray-600">
          <time dateTime={post.publishedAt || post._createdAt}>
            {new Date(post.publishedAt || post._createdAt).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          {post.author && (
            <>
              <span>•</span>
              <span>by {post.author.name}</span>
            </>
          )}
        </div>

        {/* Main image */}
        {post.mainImage && (
          <div className="mb-8">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.body && <PortableText value={post.body} />}
        </div>
      </article>
    </div>
  );
}