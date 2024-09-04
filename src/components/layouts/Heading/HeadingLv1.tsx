import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const HeadingLv1 = ({ className, children }: Props) => {
  console.log('HeadingLv1コンポーネントがレンダリングされました。');
  return (
    <h1
      className={`relative mb-28 pb-8 text-center font-notoJP text-6xl font-bold before:absolute before:bottom-0 before:left-1/2 before:inline-block before:h-[4px] before:w-[100px] before:-translate-x-1/2 before:bg-blue before:transition-transform before:content-[''] ${className}`}
    >
      {children}
    </h1>
  );
};
