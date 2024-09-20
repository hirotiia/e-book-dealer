import { getArticleList, getDetailArticle } from '@/app/lib/microcms/client';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import Image from 'next/image';
import { CheckoutButton } from '../checkoutButton/checkoutButton';
import { authOptions } from '@/app/lib/next-auth/options';
import { getServerSession } from 'next-auth';

export const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const { contents } = await getArticleList();
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const article = contents.find((content) => content.id === params.id);
  const articleContents = await getDetailArticle(params.id);
  console.log(articleContents);

  return (
    <>
      {article && (
        <>
          <Image src={article?.thumbnail.url} alt="" width={1280} height={720} />
          <HeadingLv1>{article.title}</HeadingLv1>
          <time>公開日：{new Date(article.publishedAt).toLocaleString()}</time>
          <time>最終更新日：{new Date(article.updatedAt).toLocaleString()}</time>
          <div className="mt-2" dangerouslySetInnerHTML={{ __html: articleContents.content }}></div>
          <p>{`価格：${article.price}円`}</p>
          <CheckoutButton article={article} userId={user?.id} />
        </>
      )}
    </>
  );
};
