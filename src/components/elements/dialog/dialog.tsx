'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';

export const Dialog = ({
  children,
  isOpen,
  open,
  close,
}: {
  children: ReactNode;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      open();
      dialog.current?.show();
    } else {
      close();
      dialog.current?.close();
    }

    return console.log(isOpen);
  }, [isOpen, open, close]);

  const closeDialog = () => {
    console.log(`closeDialog:お呼びでやんすか！`);
    if (isOpen) {
      close();
      dialog.current?.close();
    }
    console.log(isOpen);
  };
  return (
    <dialog ref={dialog}>
      <div className="">
        {children}
        <div className="">
          <Button
            type="button"
            onClick={() => {
              isOpen && closeDialog();
            }}
          >
            close
          </Button>
        </div>
      </div>
    </dialog>
  );
};
