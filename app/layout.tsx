import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/navigation';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dilliwasi Fine Dine Restaurant & Rooftop Cafe',
  description: 'Relish The Tradition With Pure Desi Ghee Delights!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm antialiased`}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
