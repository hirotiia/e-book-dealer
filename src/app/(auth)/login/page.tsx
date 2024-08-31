import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { getProviders } from 'next-auth/react';
import { UserLogin } from './UserLogin';
import { Metadata } from 'next';
import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { Breadcrumb } from '@/components/layouts/Breadcrumb/Breadcrumb';

export const metadata: Metadata = {
  title: 'ログイン ｜ E-Book dealer',
  description: 'ログインページです。',
};

export default async function Login() {
  const providers = await getProviders().then((res) => res);
  const URL = process.env.NEXT_PUBLIC_URL;

  return (
    <>
      <Header />
      <Breadcrumb items={[{ pathname: URL, title: '商品一覧' }, { title: 'ログイン' }]} />
      <main>
        <div className="col-start-2">
          <HeadingLv1 className="font-notoJP">ログイン</HeadingLv1>
          {providers &&
            Object.values(providers).map((provider) => (
              <UserLogin key={provider.id} providerId={provider.id} />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
