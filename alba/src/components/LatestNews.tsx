'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPosts, getEvents } from '@/lib/sanity';

interface Post {
  _id: string;
  title: string;
  publishedAt?: string;
  _createdAt: string;
  body?: Array<{
    _type: string;
    children?: Array<{ text: string }>;
  }>;
  slug?: { current: string };
  author?: { name: string };
}

interface Event {
  _id: string;
  title: string;
  date: string;
  description?: string;
  location?: string;
}

export default function LatestNews() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('Fetching data...');
        const [postsData, eventsData] = await Promise.all([
          getPosts(),
          getEvents()
        ]);
        console.log('Posts data received:', postsData);
        console.log('Events data received:', eventsData);
        setPosts(postsData);
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="h-screen bg-white flex items-center justify-center pt-20" data-snap>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[var(--primary-color)] px-4">最新セミナー・ニュース</h2>
          <div className="text-center text-gray-600 text-lg">
            <p>読み込み中...</p>
          </div>
        </div>
      </section>
    );
  }

  const hasContent = posts.length > 0 || events.length > 0;

  return (
    <section className="h-screen bg-white flex items-center justify-center pt-20" data-snap>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">最新セミナー・ニュース</h2>
        
        {!hasContent ? (
          <div className="text-center text-gray-600 text-lg">
            <p>現在、新しいセミナーやニュースはありません。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {/* Posts */}
            {posts.map((post) => {
              const href = `/posts/${post.slug?.current || post._id}`;
              console.log('Post link:', { title: post.title, href, slug: post.slug });
              return (
                <Link 
                  key={post._id} 
                  href={href}
                  className="block"
                >
                <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer hover:bg-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-blue-600">
                    {post.title}
                  </h3>
                  {post.body && post.body.length > 0 && (
                    <p className="text-gray-600 mb-3 line-clamp-3">
                      {post.body.find(block => block._type === 'block')?.children?.[0]?.text || '内容を読み込み中...'}
                    </p>
                  )}
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      {new Date(post.publishedAt || post._createdAt).toLocaleDateString('ja-JP')}
                    </p>
                    {post.author && (
                      <p className="text-sm text-gray-500">by {post.author.name}</p>
                    )}
                  </div>
                </div>
                </Link>
              );
            })}

            {/* Events */}
            {events.map((event) => (
              <div key={event._id} className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">セミナー</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{event.title}</h3>
                {event.description && (
                  <p className="text-gray-600 mb-3 line-clamp-3">{event.description}</p>
                )}
                <div className="text-sm text-gray-500">
                  <p>日時: {new Date(event.date).toLocaleDateString('ja-JP')}</p>
                  {event.location && <p>場所: {event.location}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}