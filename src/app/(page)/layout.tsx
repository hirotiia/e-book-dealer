import { notoJP, openSans } from '@/utils/font/font';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoJP.variable} ${openSans.className} text-black`}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
