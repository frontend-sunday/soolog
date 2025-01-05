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
    <Link key={id} href={`posts/${id}`}>
      {thumbnail && <img src={thumbnail} alt={`${title}_thumbnail`} />}
      <div>
        <p>{title}</p>
        <div>{updated_at ? updated_at : created_at}</div>
      </div>
      <p>{subtitle}</p>
    </Link>
  );
}
