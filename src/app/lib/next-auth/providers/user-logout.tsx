'use client';

import { Button } from '@/components/elements/Button/Button';
import { signOut } from 'next-auth/react';

export const UserLogout = () => {
  const UserSignOutHandler = () => signOut({ callbackUrl: '/login' });

  return (
    <div className="grid w-full place-content-center">
      <Button type="button" rounded variant={'error'} onClick={UserSignOutHandler}>
        ログアウト する
      </Button>
    </div>
  );
};
