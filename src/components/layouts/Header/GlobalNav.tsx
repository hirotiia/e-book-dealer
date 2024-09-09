import Link from 'next/link';
import { authOptions } from '@/app/lib/next-auth/options';
import { getServerSession } from 'next-auth';
import { HeaderAvater } from './HeaderAvater';

export const GloabalNav = async () => {
  const session = await getServerSession(authOptions);
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

        {!user && (
          <li>
            <Link
              href="/login/"
              className="fade-hover rounded-md px-3 py-2 font-notoJP font-medium"
            >
              ログイン
            </Link>
          </li>
        )}

        {user?.image && (
          <li>
            <HeaderAvater url={user.image} />
          </li>
        )}
      </ul>
    </nav>
  );
};
