import { client } from "@/sanity/client";
import { Post } from "@/types";

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch(`*[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    description,
  }`);
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-12">
      <main className="container mx-auto px-4 max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl z-10">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight">My Awesome Blog</h1>
          <p className="text-xl text-gray-600 mt-4">Welcome to my corner of the internet. Explore my thoughts and ideas.</p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {posts.map((post: Post) => (
            <a href="#" key={post._id} className="block group">
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden h-full transition-transform transform hover:-translate-y-2 hover:shadow-lg border border-gray-200">
                <div className="p-6">
                  <h2 className="text-3xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors mb-2">{post.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{post.description || "No description available. Click to read more!"}</p>
                </div>
              </div>
            </a>
          ))}
        </section>
      </main>
    </div>
  );
}
