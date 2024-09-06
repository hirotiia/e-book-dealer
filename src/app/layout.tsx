import { notoJP, openSans } from '@/utils/font/font';
import { AuthProvider } from './lib/next-auth/providers/auth-provider';
import { getBookItems } from './lib/microcms/client';
import './globals.css';
import { ContextProvider } from '@/hooks/context/contextProvider';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contents } = await getBookItems();
  return (
    <>
      <html lang="ja">
        <body className={`${notoJP.variable} ${openSans.className} text-black`}>
          <ContextProvider value={contents}>
            <AuthProvider>
              <div>{children}</div>
            </AuthProvider>
          </ContextProvider>
        </body>
      </html>
    </>
  );
}
