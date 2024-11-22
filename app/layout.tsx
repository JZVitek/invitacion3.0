import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Boda Karime y Jesus',
  description: 'Wedding website for Karime and Jesus',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Allura&family=Dancing+Script:wght@400..700&family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Meow+Script&display=swap'
          rel='stylesheet'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
