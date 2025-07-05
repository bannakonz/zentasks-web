import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import Navbar from '@/components/navbar/navbar';

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Zen Tasks',
  description: 'Zen tasks is task management for your productivity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${interSans.variable} antialiased`}>
        <Navbar />
        <main className={'py-8 px-6 pt-14'}>{children} </main>
      </body>
    </html>
  );
}
