import { getArticleList } from '@/app/lib/microcms/client';
import { Panel } from '@/components/elements/panel/panel';

export const Products = async () => {
  const { contents } = await getArticleList();
  return (
    <>
      <div className="grid grid-cols-custom gap-10">
        {contents &&
          contents.map((content) => (
            <Panel
              key={content.id}
              id={content.id}
              title={content.title}
              desc={content.description}
              price={content.price}
              imagePath={content.thumbnail.url}
              publishedDate={content.publishedAt}
            />
          ))}
      </div>
    </>
  );
};
