import { AuthProvider } from '@/app/lib/next-auth/providers/auth-provider';
import { GloabalNav } from './GlobalNav';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/50 shadow-lg backdrop-blur-[20px]">
      <div className="col-start-2 col-end-3 grid grid-cols-2 gap-0">
        <div className="flex items-center text-2xl font-bold">
          <Link href={'/'} className="fade-hover">
            E-Book dealer
          </Link>
        </div>
        <div className="mx-4 max-w-md grow">
          <input
            type="text"
            placeholder="記事を検索する...."
            className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>
        <AuthProvider>
          <GloabalNav />
        </AuthProvider>
      </div>
    </header>
  );
};
