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

export default function CheckoutSuccessPage(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <div className="col-start-2">
          <HeadingLv1>ご購入ありがとうございます！</HeadingLv1>
          <ChekoutSuccessClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
