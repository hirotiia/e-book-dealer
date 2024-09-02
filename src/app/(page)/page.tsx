import { Metadata } from 'next';
import { Books } from '@/components/elements/Books/Books';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { ReactElement } from 'react';
import { getBookItems } from '@/app/lib/microcms/client';
import { AuthProvider } from '../lib/next-auth/providers/auth-provider';

export const metadata: Metadata = {
  title: '商品一覧 ｜ E-Book dealer',
  description: '商品一覧ページです。',
};

export default async function Home(): Promise<ReactElement> {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { contents } = await getBookItems();
  console.log(contents);
  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1>商品一覧</HeadingLv1>
          <AuthProvider>
            <Books dataList={contents} />
          </AuthProvider>
        </div>
      </main>
      <Footer />
    </>
  );
}
