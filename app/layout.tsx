import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Soorog',
  description: '프론트앤드 개발자 김수로의 개발 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1376px] mx-auto bg-[#f8f9fa]`}>
        <nav className="prose py-4">
          <Link href="/">
            <h1>SooLog</h1>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
