import { notoJP, openSans } from '@/utils/font/font';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="ja">
        <body className={`${notoJP.variable} ${openSans.className} text-black`}>{children}</body>
      </html>
    </>
  );
}
