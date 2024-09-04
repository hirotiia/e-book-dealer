import Link from 'next/link';
import Image from 'next/image';
import { Content } from '@/app/api/microcms/types';

type Props = {
  item: Content;
};

export const BookItem = ({ item }: Props) => {
  return (
    <Link
      href={`/articles/${item.id}`}
      className="row-span-4 grid grid-rows-subgrid gap-3 overflow-hidden rounded-lg pb-3 shadow-md duration-300 hover:scale-105"
    >
      <Image
        src={item.thumbnail.url}
        alt={item.title}
        width={350}
        height={250}
        className="w-full"
      />
      <p className="font-advent px-3 text-2xl">
        <b>{item.title}</b>
      </p>
      <p className="txt-limit px-3">{item.description}</p>
      <p className="text-slate-400 px-3 font-notoJP">価格：{item.price}円</p>
    </Link>
  );
};
