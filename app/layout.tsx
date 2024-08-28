import './globals.css';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'CGI NextJS Technical Training',
  description: 'A Next.js project',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}