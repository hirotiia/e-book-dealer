import { Metadata } from 'next';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { ReactElement, Suspense } from 'react';
import { Products } from '@/features/articles/components/products/products';

export const metadata: Metadata = {
  title: '商品一覧 ｜ E-Book dealer',
  description: '商品一覧ページです。',
};

export default async function Home(): Promise<ReactElement> {
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: 'HOME' }, { title: '商品一覧' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1>商品一覧</HeadingLv1>
          <Suspense fallback={<div>loading...</div>}>
            <Products />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
