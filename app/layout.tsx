import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/global.css';

import { cn } from '@/shared/utils/cn';

import ToastProvider from '@/providers/ToastProvider';
import QueryProvider from '@/providers/QueryProvider';

export const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Exchange app',
  description: '실시간 환율을 확인하고, 쉽게 환전해 보세요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen antialiased', pretendard.className)}>
        <ToastProvider />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
