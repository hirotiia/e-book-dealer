import Link from 'next/link';
import Image from 'next/image';

type Props = {
  id: string;
  title: string;
  desc: string;
  price?: number;
  imagePath: string;
  publishedDate: string;
  disabled: boolean;
};

export const Panel = ({ id, title, desc, price, imagePath, publishedDate, disabled }: Props) => {
  const commonProps = {
    className:
      'row-span-5 grid grid-rows-subgrid gap-3 overflow-hidden rounded-lg pb-3 shadow-md duration-300 hover:scale-105',
  };
  const disabledProps = {
    className: 'row-span-5 grid grid-rows-subgrid gap-3 overflow-hidden rounded-lg pb-3 shadow-md',
  };

  const content = (
    <>
      <Image src={imagePath} alt="" width={350} height={250} className="w-full" />
      <p className="px-3 text-2xl">
        <b>{title}</b>
      </p>
      <time className="px-3">{`公開日：${publishedDate}`}</time>
      <p className="txt-limit px-3">{desc}</p>
      <p className="px-3 font-notoJP">価格：{price ? `${price}円` : '購入済み'}</p>
    </>
  );

  return disabled ? (
    <div {...disabledProps}>{content}</div>
  ) : (
    <Link href={`/articles/${id}`} {...commonProps}>
      {content}
    </Link>
  );
};
