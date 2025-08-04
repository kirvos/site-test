import { createClient } from '@sanity/client';
// import imageUrlBuilder from '@sanity/image-url';
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = createClient({
  projectId: 'd5va5nfa',
  dataset: 'alba_dataset',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-08-05', // use a UTC date in YYYY-MM-DD format
});

// const builder = imageUrlBuilder(client);

// function urlFor(source: SanityImageSource) {
//   return builder.image(source);
// }

interface Post {
  _id: string;
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
}

async function getPosts(): Promise<Post[]> {
  const posts = await client.fetch('*[_type == "post"]');
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">アルバ社会保険労務士事務所</h1>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <p>ここに事務所の紹介文などを記述します。</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {posts.map((post) => (
          <a
            key={post._id}
            href="#"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              {post.title}{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              {post.body && post.body[0] && post.body[0].children[0] && post.body[0].children[0].text}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
