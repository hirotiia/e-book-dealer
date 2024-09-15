import { getArticleList } from '@/app/lib/microcms/client';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import Image from 'next/image';
import { CheckoutButton } from '../checkoutButton/checkoutButton';

export const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const { contents } = await getArticleList();
  const article = contents.find((content) => content.id === params.id);

  return (
    <>
      {article && (
        <>
          <Image src={article?.thumbnail.url} alt="" width={1280} height={720} />
          <HeadingLv1>{article.title}</HeadingLv1>
          <time>{article.publishedAt}</time>
          <p>{article.description}</p>
          <p>{`価格：${article.price}円`}</p>

          <CheckoutButton article={article} />
        </>
      )}
    </>
  );
};
