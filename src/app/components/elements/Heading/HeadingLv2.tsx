type Props = {
  title: string;
};

export const HeadingLv2 = ({ title }: Props) => {
  return <h2 className="pb-14 pt-6 text-center text-3xl font-bold">{title}</h2>;
};
