'use client';

import { Button } from '@/app/components/elements/Button/Button';
import { HeadingLv2 } from '@/app/components/elements/Heading/HeadingLv2';

export default function Login() {
  const clickHandler = () => {
    console.log('clickされました。');
  };
  return (
    <>
      <HeadingLv2>ログインページ</HeadingLv2>
      <Button type="button" onClick={clickHandler}>
        GitHub でログイン
      </Button>
    </>
  );
}
