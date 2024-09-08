import Link from 'next/link';
import Image from 'next/image';
import { authOptions } from '@/app/lib/next-auth/options';
import { getServerSession } from 'next-auth';
import { Button } from '@/components/elements/Button/Button';

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
        <li>
          {!user && (
            <Link
              href="/login/"
              className="fade-hover rounded-md px-3 py-2 font-notoJP font-medium"
            >
              ログイン
            </Link>
          )}
        </li>
        <li>
          <Button
            className="fade-hover rounded-md px-3 py-2 font-medium"
            variant={'clear'}
            size={'auto'}
          >
            <Image
              className="rounded-full"
              width={50}
              height={50}
              alt="デフォルトアイコン"
              src={user?.image || '/default_icon.png'}
            />
          </Button>
        </li>
      </ul>
    </nav>
  );
};
