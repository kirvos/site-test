import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yc9q9o42',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Disable CDN for real-time updates
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
})

// プレビュー用クライアント（常に最新データを取得）
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yc9q9o42',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts', // ドラフト記事も取得
})

// プレビューモードかどうかによってクライアントを選択
export function getClient(preview = false) {
  return preview ? previewClient : client
}

// Helper function to fetch posts
export async function getPosts(preview = false) {
  try {
    console.log('Fetching posts from Sanity...');
    const sanityClient = getClient(preview);
    console.log('Client config:', {
      projectId: sanityClient.config().projectId,
      dataset: sanityClient.config().dataset,
      useCdn: sanityClient.config().useCdn
    });
    
    const posts = await sanityClient.fetch(`
      *[_type == "post"] | order(_createdAt desc)[0...6] {
        _id,
        title,
        slug,
        publishedAt,
        _createdAt,
        body,
        mainImage,
        author->{name}
      }
    `);
    console.log('Posts fetched successfully:', posts.length, 'posts');
    console.log('Posts data:', posts);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

// 特定の記事を取得する関数（プレビュー対応）
export async function getPostBySlug(slug: string, preview = false) {
  try {
    console.log('Fetching post by slug:', slug);
    const sanityClient = getClient(preview);
    
    const post = await sanityClient.fetch(`
      *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        publishedAt,
        _createdAt,
        body,
        mainImage,
        author->{name},
        categories[]->{title}
      }
    `, { slug });
    
    console.log('Post fetched successfully:', post);
    return post;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

// Helper function to fetch events
export async function getEvents() {
  try {
    console.log('Fetching events from Sanity...');
    const events = await client.fetch(`
      *[_type == "event"] | order(date desc)[0...3] {
        _id,
        title,
        date,
        description,
        location
      }
    `);
    console.log('Events fetched successfully:', events.length, 'events');
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}