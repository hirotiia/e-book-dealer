import { getArticleList } from '@/app/lib/microcms/client';
import { authOptions } from '@/app/lib/next-auth/options';
import { Panel } from '@/components/elements/panel/panel';
import { getServerSession } from 'next-auth';

type History = {
  id: string;
  userId: string;
  articleId: string;
  createdAt: string;
};

export const Products = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { contents } = await getArticleList();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}history/${user?.id}/`);
  const history = (await response.json()) as History[];

  // 購入済みかどうかの判定
  const isMatchId = (id: string): boolean => {
    return history.some((target) => target.articleId === id);
  };

  return (
    <>
      <div className="grid grid-cols-custom gap-10">
        {contents &&
          contents.map((content) =>
            isMatchId(content.id) ? (
              <Panel
                key={content.id}
                id={content.id}
                title={content.title}
                desc={content.description}
                imagePath={content.thumbnail.url}
                publishedDate={content.publishedAt}
                disabled={true}
              />
            ) : (
              <Panel
                key={content.id}
                id={content.id}
                title={content.title}
                desc={content.description}
                price={content.price}
                imagePath={content.thumbnail.url}
                publishedDate={content.publishedAt}
                disabled={false}
              />
            ),
          )}
      </div>
    </>
  );
};
