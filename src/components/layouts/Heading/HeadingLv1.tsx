import { ReactNode } from 'react';

type Props = {
  className?: string;
  children: ReactNode;
};

export const HeadingLv1 = ({ className, children }: Props) => {
  return <h1 className={`pb-20 pt-6 text-center text-6xl font-bold ${className}`}>{children}</h1>;
};
