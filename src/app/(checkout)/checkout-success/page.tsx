import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Metadata } from 'next';
import { ReactElement } from 'react';
import { ChekoutSuccessClient } from '@/app/(checkout)/checkout-success/ChekoutSuccessClient';

export const metadata: Metadata = {
  title: '購入成功ページ ｜ E-Book dealer',
  description: '購入成功ページです。',
};

export default async function CheckoutSuccessPage(): Promise<ReactElement> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/data`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      // TODO:結局クエリパラメータが必要どうしよう
      sessionId,
    }),
  });
  if (response.ok) {
    const data = response.json();
    console.log(data);
  }
  console.log(response);
  return (
    <>
      <Header />
      <main>
        <div className="col-start-2">
          <HeadingLv1>購入ありがとうございます！</HeadingLv1>
          <ChekoutSuccessClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
