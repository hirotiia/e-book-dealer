import { Noto_Sans_JP, Open_Sans } from 'next/font/google';

export const notoJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
});

export const openSans = Open_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});
