'use client';
import './globals.css';
import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import FilAriane from '@/components/FilAriane/FilAriane';
import ArrowTop from '@/components/ArrowTop/ArrowTop';
import Notifications from './Annonces/page';
import Cookie from '@/components/Cookies/Cookies';
const metadata = {
  title: 'JobFeeling - Votre job idéal est ici',
  description:
    'Trouvez le job idéal avec JobFeeling! Connectez-vous avec les meilleurs employeurs et lancez votre carrière aujourd’hui.',
};
export default function RootLayout({ children }) {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <html lang="fr">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://jobfeeling.vercel.app/" />
        <meta
          name="twitter:title"
          content="JobFeeling - Votre plateforme de recrutement en ligne"
        />
        <meta
          name="twitter:description"
          content="Trouvez le job idéal avec JobFeeling! Connectez-vous avec les meilleurs employeurs et lancez votre carrière aujourd’hui."
        />
        <meta name="twitter:image" content="images/jobfeeling.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:title"
          content="JobFeeling - Votre plateforme de recrutement en ligne"
        />
        <meta
          property="og:description"
          content="Trouvez le job idéal avec JobFeeling! Connectez-vous avec les meilleurs employeurs et lancez votre carrière aujourd’hui."
        />
        <meta property="og:image" content="images/jobfeeling.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jobfeeling.vercel.app/"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta
          name="keywords"
          content="emploi, recrutement, carrière, JobFeeling"
        />
        <meta name="author" content="JobFeeling" />

        <meta property="og:site_name" content="JobFeeling" />
        <meta
          name="google-site-verification"
          content="iHeOMtLn0of22eJdZ56P-bx73RxsX97kb-NpK0Pc-O8"
        />
      </head>
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
