import { useCallback, useState } from 'react';

export const useOpener = (): [isOpen: boolean, open: () => void, close: () => void] => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => {
    setIsOpen(true);
    console.log(`open関数実行`);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    console.log(`close関数実行`);
  }, []);

  return [isOpen, open, close];
};
