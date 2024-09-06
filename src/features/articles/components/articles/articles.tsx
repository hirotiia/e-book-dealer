'use client';
import { Panel } from '@/components/elements/panel/panel';
import { useArticleData } from '@/hooks/useArticleData';

export const Articles = () => {
  const contents = useArticleData();
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
