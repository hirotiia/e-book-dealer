'use client';

import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { useArticleData } from '@/hooks/useArticleData';
import Image from 'next/image';

type Props = {
  params: { id: string };
};

export const Article = ({ params }: Props) => {
  const contents = useArticleData();
  const article = contents.find((content) => content.id === params.id);
  console.log(article);

  return (
    <>
      {article && (
        <>
          <Image src={article?.thumbnail.url} alt="" width={1280} height={720} />
          <HeadingLv1>{article.title}</HeadingLv1>
          <time>{article.publishedAt}</time>
          <p>{article.description}</p>
          <p>{`価格：${article.price}`}</p>
        </>
      )}
    </>
  );
};
