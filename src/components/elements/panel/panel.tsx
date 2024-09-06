import Link from 'next/link';
import Image from 'next/image';

type Props = {
  id: string;
  title: string;
  desc: string;
  price: number;
  imagePath: string;
  publishedDate: string;
};

export const Panel = ({ id, title, desc, price, imagePath, publishedDate }: Props) => {
  return (
    <Link
      href={`/articles/${id}`}
      className="row-span-4 grid grid-rows-subgrid gap-3 overflow-hidden rounded-lg pb-3 shadow-md duration-300 hover:scale-105"
    >
      <Image src={imagePath} alt="" width={350} height={250} className="w-full" />
      <p className="font-advent px-3 text-2xl">
        <b>{title}</b>
      </p>
      <time className="px-3">{`公開日：${publishedDate}`}</time>
      <p className="txt-limit px-3">{desc}</p>
      <p className="text-slate-400 px-3 font-notoJP">価格：{price}円</p>
    </Link>
  );
};
