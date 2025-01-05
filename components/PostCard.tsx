/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

type PostCardProps = {
  title: string;
  subtitle: string | null;
  created_at: string;
  id: number;
  thumbnail: string | null;
  updated_at: string | null;
};

export default function PostCard({ title, subtitle, created_at, id, thumbnail, updated_at }: PostCardProps) {
  return (
    <Link key={id} href={`posts/${id}`} className="w-full block">
      {thumbnail && <img src={thumbnail} alt={`${title}_thumbnail`} className="w-full rounded-t-xl h-auto" />}
      <div className="p-4">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm">{subtitle}</p>
        <div className="text-sm">{updated_at ? updated_at : created_at}</div>
      </div>
    </Link>
  );
}
