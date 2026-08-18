import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
});

export const metadata: Metadata = {
  title: 'Sweetwater IT — LATAM talent. Applied AI.',
  description:
    'Sweetwater IT staffs LATAM technical talent into US firms, and teaches, consults, and staffs applied and agentic AI — on your time zone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
