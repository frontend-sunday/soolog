/* eslint-disable @next/next/no-img-element */
import PostCard from '@/components/PostCard';
import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from('posts').select();
  return (
    <div>
      {posts?.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
