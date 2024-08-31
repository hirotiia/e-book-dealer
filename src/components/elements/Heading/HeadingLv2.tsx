import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HeadingLv2 = ({ children }: Props) => {
  return <h2 className="pb-14 pt-6 text-center text-3xl font-bold">{children}</h2>;
};
