'use client';
import './globals.css';
import Head from 'next/head';
import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import FilAriane from '@/components/FilAriane/FilAriane';
import ArrowTop from '@/components/ArrowTop/ArrowTop';
import Notifications from './Annonces/page';

export default function RootLayout({ children }) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <html lang="fr">
      <Head>
        <link rel="canonical" href="https://jobfeeling.vercel.app/" />
      </Head>
      <body
        id="top"
        className="bg-background dark:bg-backgroundDark font-textFont"
      >
        <Header
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
        />
        <FilAriane />
        <ArrowTop />
        <main className="w-full flex flex-col min-h-screen justify-between">
          {showNotifications && (
            <Notifications
              setShowNotifications={setShowNotifications}
            />
          )}
          {children}
        </main>
      </body>
    </html>
  );
}
