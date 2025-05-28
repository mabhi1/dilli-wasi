import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dilliwasi Menu',
};

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
