import { createClient } from '@/utils/supabase/server';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const slug = (await params).id;
  const supabase = await createClient();
  const { data: post } = await supabase.from('posts').select().eq('id', slug);

  return <div>{post?.[0].body}</div>;
}
