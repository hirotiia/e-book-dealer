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
  product: Data;
};

export const BookItem = ({ product }: Props) => {
  return (
    <Link
      href={'/articles'}
      className="row-span-4 grid grid-rows-subgrid gap-3 overflow-hidden rounded-lg pb-3 shadow-2xl duration-300 hover:translate-y-1 hover:shadow-none"
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={350}
        height={250}
        className="w-full"
      />
      <p className="px-3 text-lg">
        <b>{product.title}</b>
      </p>
      <p className="px-3">{product.content}</p>
      <p className="px-3 text-slate-400">価格：{product.price}円</p>
    </Link>
  );
};
