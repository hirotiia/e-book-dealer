'use client';

import { Button } from '@/components/elements/Button/Button';
import { Dialog } from '@/components/elements/dialog/dialog';
import { useOpener } from '@/hooks/useOpener';
import Image from 'next/image';

export const HeaderAvater = ({ url }: { url: string }) => {
  const [isOpen, open, close] = useOpener();

  return (
    <div className="">
      <Button
        className="fade-hover rounded-md px-3 py-2 font-medium"
        variant={'clear'}
        size={'auto'}
        type="button"
        onClick={() => {
          isOpen ? close() : open();
        }}
      >
        <Image
          className="rounded-full"
          width={50}
          height={50}
          alt="デフォルトアイコン"
          src={url || '/default_icon.png'}
        />
      </Button>
      <Dialog isOpen={isOpen} close={close} open={open}>
        <p>タイトル</p>
      </Dialog>
    </div>
  );
};
