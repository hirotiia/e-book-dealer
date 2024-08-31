'use client';

import Link from 'next/link';
import Image from 'next/image';

export const GloabalNav = () => {
  return (
    <nav>
      <ul className="flex items-center justify-end gap-x-4">
        <li>
          <Link href="/login/" className="fade-hover rounded-md px-3 py-2 font-notoJP font-medium">
            ログイン
          </Link>
        </li>
        <li>
          <Link href="/profile" className="rounded-md px-3 py-2 font-medium">
            <Image width={50} height={50} alt="デフォルトアイコン" src="/default_icon.png" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
