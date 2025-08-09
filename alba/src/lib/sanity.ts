import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yc9q9o42',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Enable for faster, cached responses
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
})

// Helper function to fetch posts
export async function getPosts() {
  try {
    console.log('Fetching posts from Sanity...');
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
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
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