/* eslint-disable @next/next/no-img-element */
import PostCard from '@/components/PostCard';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from('posts').select();
  return (
    <section className="mx-auto mt-4 ">
      <ul className="grid gap-4 grid-cols-5 ">
        {posts?.map((post) => (
          <li
            key={post.id}
            className="transition-shadow  duration-[250ms] ease-in hover:shadow-lg hover:scale-105 shadow-custom rounded-lg"
          >
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
