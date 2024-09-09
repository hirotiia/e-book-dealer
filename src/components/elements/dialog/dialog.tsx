'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';

export const Dialog = ({
  children,
  isOpen,
  open,
  close,
  label,
  desc,
}: {
  children: ReactNode;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  label: string;
  desc: string;
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
    if (isOpen) {
      close();
      dialog.current?.close();
    }
  };
  return (
    <dialog
      ref={dialog}
      aria-labelledby={label}
      aria-describedby={desc}
      className="after:clip-path-triangle before:clip-path-triangle absolute left-[calc(-300px+74px)] top-[90px] m-0 min-w-[300px] rounded-md border-2 border-black before:absolute before:right-5 before:top-[-30px] before:size-[30px] before:bg-black before:content-[''] after:absolute after:right-5 after:top-[-26px] after:size-[30px] after:bg-white after:content-['']"
    >
      <div className="">
        <div className="p-3">{children}</div>
        <div className="">
          <Button
            type="button"
            className="w-full justify-center border-x-0 border-b-0 border-t-2 border-black"
            size="auto"
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
