import Link from 'next/link';
import Image from 'next/image';

type Author = {
  id: number;
  name: string;
  description: string;
  profile_icon: string;
};

type Data = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  author: Author;
  content: string;
  created_at: string;
  updated_at: string;
};

type Props = {
  data: Data;
};

export const BookItem = ({ data }: Props) => {
  return (
    <Link href={'/articles'} className="row-span-4 grid grid-rows-subgrid gap-3">
      <Image
        src={data.thumbnail}
        alt="サムネイル画像"
        width={350}
        height={250}
        className="w-full"
      />
      <p className="text-lg">
        <b>{data.title}</b>
      </p>
      <p>{data.content}</p>
      <p className="text-slate-400">価格：{data.price}円</p>
    </Link>
  );
};
