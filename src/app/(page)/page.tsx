import { Metadata } from 'next';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'E-Book dealer',
  description: 'トップページです。',
};

export default async function Home(): Promise<ReactElement> {
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: 'HOME' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1>E-Book-dealerとは</HeadingLv1>
        </div>
      </main>
      <Footer />
    </>
  );
}
