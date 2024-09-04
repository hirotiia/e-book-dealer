'use client';

import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { CMSContext } from '@/hooks/context/contextProvider';
import { useContext } from 'react';
import Image from 'next/image';
import { Button } from '../Button/Button';

type Props = {
  params: { id: string };
};

export const Articles = ({ params }: Props) => {
  const contents = useContext(CMSContext);
  const articleData = contents.find((content) => content.id === params.id);
  console.log(articleData);
  return (
    <div>
      {articleData && (
        <Image
          src={articleData.thumbnail.url}
          alt=""
          width={articleData.thumbnail.width}
          height={articleData.thumbnail.height}
        />
      )}
      {articleData && <HeadingLv1 className="text-[32px]">{articleData.title}</HeadingLv1>}
      {articleData && <p>{articleData.description}</p>}
      {articleData && <p>{`価格：${articleData.price}円`}</p>}
      <Button type="button">購入する</Button>
    </div>
  );
};
