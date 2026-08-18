import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sweetwater IT — LATAM talent. Applied AI.',
  description:
    'Sweetwater IT staffs LATAM technical talent into US firms, and teaches, consults, and staffs applied and agentic AI — on your time zone.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
