import './globals.css';
import type { Metadata } from 'next';
import { Inter, Cinzel, Dancing_Script } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const cinzel = Cinzel({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel',
});
const dancingScript = Dancing_Script({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-dancing-script',
});

export const metadata: Metadata = {
  title: 'Boda Karime y Jesus',
  description: 'Boda de Karime y Jesus',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${cinzel.variable} ${dancingScript.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}