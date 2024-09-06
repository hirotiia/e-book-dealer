'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export const GloabalNav = () => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <nav>
      <ul className="flex items-center justify-end gap-x-4">
        <li>
          <Link
            href="/articles/"
            className="fade-hover rounded-md px-3 py-2 font-notoJP font-medium"
          >
            商品一覧
          </Link>
        </li>
        <li>
          <Link href="/login/" className="fade-hover rounded-md px-3 py-2 font-notoJP font-medium">
            ログイン
          </Link>
        </li>
        <li>
          <Link href="/profile" className="fade-hover rounded-md px-3 py-2 font-medium">
            <Image
              className="rounded-full"
              width={50}
              height={50}
              alt="デフォルトアイコン"
              src={user?.image || '/default_icon.png'}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
