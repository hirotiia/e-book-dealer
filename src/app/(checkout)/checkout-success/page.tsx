import { Footer } from '@/components/layouts/Footer/Footer';
import { Header } from '@/components/layouts/Header/Header';
import { HeadingLv1 } from '@/components/layouts/Heading/HeadingLv1';
import { Purchase } from '@prisma/client';
import { Metadata } from 'next';
import { ReactElement } from 'react';

type PurchaseResponseData = {
  purchase?: Purchase;
  message?: string;
};

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

      if (response.ok) {
        const data: PurchaseResponseData = await response.json();
        const { purchase } = data;
        console.log(purchase?.id);
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
