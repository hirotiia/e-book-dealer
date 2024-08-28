import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const HeadingLv1 = ({ children }: Props) => {
  return <h1 className="pb-20 pt-6 text-center text-6xl font-bold">{children}</h1>;
};
