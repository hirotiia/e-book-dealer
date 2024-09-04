import { Articles } from '@/components/elements/Articles/articles';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Metadata } from 'next';
import { ReactElement } from 'react';

type Props = {
  params: { id: string };
};

// TODO: 動的にメタデータを出力する
export const metadata: Metadata = {
  title: '商品詳細 ｜ E-Book dealer',
  description: '商品詳細ページです。',
};

export default async function Home({ params }: Props): Promise<ReactElement> {
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }]} />
      <main>
        <div className="col-start-2">
          <Articles params={params} />
        </div>
      </main>
      <Footer />
    </>
  );
}
