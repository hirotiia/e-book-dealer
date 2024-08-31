import { Metadata } from 'next';
import { Book } from '@/components/elements/Book/Book';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: '商品一覧 ｜ E-Book dealer',
  description: '商品一覧ページです。',
};

export default async function Home(): Promise<ReactElement> {
  const URL = process.env.NEXT_PUBLIC_URL;
  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1 className="font-notoJP">商品一覧</HeadingLv1>
          <Book />
        </div>
      </main>
      <Footer />
    </>
  );
}
