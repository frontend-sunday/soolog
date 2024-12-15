import { createClient } from '@/utils/supabase/server';

export default async function Home() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from('posts').select();
  return <div>{JSON.stringify(posts, null, 2)}</div>;
}
