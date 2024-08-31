import Link from 'next/link';

export const HeaderHeadingLogo = () => {
  return (
    <div className="flex items-center text-2xl font-bold">
      <Link href={'/'} className="fade-hover">
        E-Book dealer
      </Link>
    </div>
  );
};
