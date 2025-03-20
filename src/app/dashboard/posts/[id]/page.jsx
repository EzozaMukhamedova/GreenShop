export default async function Page({ params }) {
  const { id } = params;
  console.log(id);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  console.log(post);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="">{post.title}</h2>
      <h2 className="">{post.body}</h2>
    </div>
  );
}
