import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: '購入成功ページ ｜ E-Book dealer',
  description: '購入成功ページです。',
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}): Promise<ReactElement> {
  const sessionId = searchParams.session_id;

  if (sessionId) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/data/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
        }),
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Header />
      <main>
        <div className="col-start-2">
          <HeadingLv1>購入ありがとうございました！</HeadingLv1>
          <p></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
