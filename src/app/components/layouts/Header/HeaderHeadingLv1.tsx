import Link from 'next/link';

export const HeaderHeadingLv1 = () => {
  return (
    <h1 className="flex items-center text-2xl font-bold">
      <Link href={'/'} className="hover:text-stone-400">
        E-Book dealer
      </Link>
    </h1>
  );
};
