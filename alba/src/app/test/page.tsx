'use client';

import { useEffect, useState } from 'react';
import { getPosts } from '@/lib/sanity';

export default function TestPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('Fetching posts...');
        const data = await getPosts();
        console.log('Posts data:', data);
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sanity Test Page</h1>
      <p>Found {posts.length} posts</p>
      <pre className="bg-gray-100 p-4 rounded mt-4 overflow-auto">
        {JSON.stringify(posts, null, 2)}
      </pre>
    </div>
  );
}