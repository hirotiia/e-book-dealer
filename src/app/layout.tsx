import { notoJP, openSans } from '@/utils/font/font';
import { AuthProvider } from './lib/next-auth/providers/auth-provider';
import './globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ja">
        <body className={`${notoJP.variable} ${openSans.className} text-black`}>
          <AuthProvider>
            <div>{children}</div>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}
