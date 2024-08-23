import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type: 'button' | 'submit';
};

export const Button = ({ children, type = 'submit' }: Props) => {
  return <button type={type}>{children}</button>;
};
