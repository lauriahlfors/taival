import NextAuthProvider from '@/providers/next-auth-provider';

import { Manrope } from 'next/font/google';

import './globals.css';

const manrope = Manrope({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Taival',
  description: 'A travel planning app!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="flex flex-col items-center justify-start bg-slate-950">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
