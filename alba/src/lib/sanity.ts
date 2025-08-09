import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yc9q9o42',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Disable CDN for real-time updates
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Optional: for authenticated requests
})

// Helper function to fetch posts
export async function getPosts() {
  try {
    console.log('Fetching posts from Sanity...');
    console.log('Client config:', {
      projectId: client.config().projectId,
      dataset: client.config().dataset,
      useCdn: client.config().useCdn
    });
    
    const posts = await client.fetch(`
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