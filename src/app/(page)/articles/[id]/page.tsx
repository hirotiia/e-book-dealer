import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { ArticlePage } from '@/features/articles/components/article/article';
import { Metadata } from 'next';
import { ReactElement, Suspense } from 'react';

// TODO: 動的にメタデータを出力するためにContextでの状態管理に限界を感じてきたので、Reduxでグローバルステートの管理を検討中
export const metadata: Metadata = {
  title: 'ダミー ｜ E-Book dealer',
  description: 'ダミーページです。',
};

export default async function Home({ params }: { params: { id: string } }): Promise<ReactElement> {
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }]} />
      <main>
        <div className="col-start-2">
          <Suspense fallback={<div>loading...</div>}>
            <ArticlePage params={params} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
