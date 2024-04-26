'use client';
import './globals.css';
import Head from 'next/head';
import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import FilAriane from '@/components/FilAriane/FilAriane';
import ArrowTop from '@/components/ArrowTop/ArrowTop';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({ children }) {
  const [openFooter, setOpenFooter] = useState(false);
  const toggleOpenFooter = () => {
    setOpenFooter(!openFooter);
  };

  return (
    <html lang="fr">
      <Head>
        <link rel="canonical" href="https://jobfeeling.vercel.app/" />
      </Head>
      <body
        id="top"
        className="bg-background dark:bg-backgroundDark font-textFont"
      >
        <Header />
        <FilAriane />
        <ArrowTop />
        <main className="flex flex-col min-h-screen justify-between">
          {children}
        </main>
        <Footer open={openFooter} toggleOpen={toggleOpenFooter} />
      </body>
    </html>
  );
}
