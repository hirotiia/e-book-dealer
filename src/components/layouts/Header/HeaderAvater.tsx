'use client';

import { Button } from '@/components/elements/Button/Button';
import { Dialog } from '@/components/elements/dialog/dialog';
import { useOpener } from '@/hooks/useOpener';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

export const HeaderAvater = ({
  url,
  status,
  name,
  email,
}: {
  url: string;
  status: 'login' | 'logout';
  name?: string | undefined | null;
  email?: string | undefined | null;
}) => {
  const [isOpen, open, close] = useOpener();
  const isLogin = status === 'login';

  return (
    <div className="relative">
      <Button
        className="fade-hover rounded-md px-3 py-2 font-medium"
        variant={'clear'}
        size={'auto'}
        type="button"
        onClick={() => {
          isOpen ? close() : open();
        }}
        aria-haspopup="dialog"
      >
        <Image
          className="rounded-full"
          width={50}
          height={50}
          alt="デフォルトアイコン"
          src={url || '/default_icon.png'}
        />
      </Button>
      <Dialog isOpen={isOpen} close={close} open={open} label="heading1" desc="desc1">
        {isLogin ? (
          <>
            <p id="heading1">
              <b>アカウント情報</b>
            </p>
            <dl className="mt-4" id="desc1">
              <dt className="font-bold">名前：</dt>
              <dd>{name}</dd>
              <dt className="mt-1 font-bold">メールアドレス:</dt>
              <dd>{email}</dd>
            </dl>
            <Button
              type="button"
              variant="error"
              size="auto"
              rounded
              className="mt-4 w-full justify-center border-2 border-red"
              onClick={() => {
                signOut({ callbackUrl: '/login' });
              }}
            >
              Sign out
            </Button>
          </>
        ) : (
          <>
            <p>
              <b>アカウント情報</b>
            </p>

            <dl>
              <dt className="font-bold">ステータス：</dt>
              <dd>未ログイン</dd>
            </dl>
          </>
        )}
      </Dialog>
    </div>
  );
};
