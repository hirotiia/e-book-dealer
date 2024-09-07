import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Metadata } from 'next';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';
import { UserLogout } from '@/app/lib/next-auth/providers/user-logout';

export const metadata: Metadata = {
  title: 'ログアウト ｜ E-Book dealer',
  description: 'ログアウトページです。',
};

export default async function Logout() {
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }, { title: 'ログアウト' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1>ログアウト</HeadingLv1>
          <UserLogout />
        </div>
      </main>
      <Footer />
    </>
  );
}
