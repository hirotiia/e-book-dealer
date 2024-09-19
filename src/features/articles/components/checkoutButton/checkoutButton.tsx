'use client';

import { Button } from '@/components/elements/Button/Button';
import { Article } from '@/types/microcms/client.types';
import { useRouter } from 'next/navigation';

export const CheckoutButton = ({
  article,
  userId,
}: {
  article: Article;
  userId: string | undefined;
}) => {
  const router = useRouter();

  // 決済処理
  const checkoutHandler = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: article?.title,
        price: article?.price,
        articleId: article?.id,
        userId,
      }),
    });

    if (response.ok) {
      const responseData: { checkout_url: string } = await response.json();
      router.push(responseData.checkout_url);
    }
  };
  return (
    <Button type="button" rounded onClick={checkoutHandler}>
      購入する
    </Button>
  );
};
