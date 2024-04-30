'use client';
import './globals.css';
import Head from 'next/head';
import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import FilAriane from '@/components/FilAriane/FilAriane';
import ArrowTop from '@/components/ArrowTop/ArrowTop';
import Notifications from './Annonces/page';
import Cookie from '@/components/Cookies/Cookies';

export default function RootLayout({ children }) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <html lang="fr">
      <Head>
        <title></title>
        <link rel="canonical" href="https://jobfeeling.vercel.app/" />
        <meta
          property="og:title"
          content="JobFeeling - Solutions Web Innovantes"
        />
        <meta
          property="og:description"
          content="La Rural Web Factory propose des services numériques complets, incluant la transformation numérique, les audits, le webmarketing, la publicité, le branding, le développement web et le community management."
        />
        <meta
          property="og:image"
          content="https://jobfeeling.vercel.app/_next/image?url=%2Flogo%2Fcircle_rwf.webp&w=96&q=75"
        />
        <meta
          property="og:url"
          content="https://jobfeeling.vercel.app/"
        />
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
        <Cookie />
      </body>
    </html>
  );
}
