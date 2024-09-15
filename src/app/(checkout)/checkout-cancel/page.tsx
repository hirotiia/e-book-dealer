import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: '購入失敗ページ ｜ E-Book dealer',
  description: '購入失敗ページです。',
};

export default async function Home(): Promise<ReactElement> {
  return (
    <>
      <Header />
      <main>
        <div className="col-start-2">
          <HeadingLv1>購入がキャンセルされました。</HeadingLv1>
        </div>
      </main>
      <Footer />
    </>
  );
}
