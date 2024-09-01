import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Metadata } from 'next';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';

export const metadata: Metadata = {
  title: 'プロフィール ｜ E-Book dealer',
  description: 'プロフィールページです。',
};

export default async function Login() {
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }, { title: 'プロフィール' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1 className="font-notoJP">プロフィール</HeadingLv1>
        </div>
      </main>
      <Footer />
    </>
  );
}
