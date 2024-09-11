import { Button } from '@/components/elements/Button/Button';
import { Article } from 'schema-dts';

export const CheckoutButton = ({ article }) => {
  // 決済処理
  const checkoutHandler = async () => {
    const response = await fetch('/api/checkout/', {
      method: 'POST',
      headers: { 'Content-Tyep': 'application/json' },
      body: JSON.stringify({
        title: article?.title,
        price: article?.price,
      }),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  };
  return <Button type="button" onClick={checkoutHandler} />;
};
