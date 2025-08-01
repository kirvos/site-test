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
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">My Awesome Blog</h1>
          <p className="text-lg text-gray-600 mt-2">Welcome to my corner of the internet.</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: Post) => (
            <a href="#" key={post._id} className="block group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-700 mt-2">{post.description || "No description available."}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
