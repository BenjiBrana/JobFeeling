import './globals.css';
import Head from 'next/head';
import React from 'react';
import Header from '@/components/Header/Header';
import FilAriane from '@/components/FilAriane/FilAriane';
import ArrowTop from '@/components/ArrowTop/ArrowTop';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'JobFeeling',
  description:
    'Découvrez JobFeeling, votre plateforme de recrutement en ligne de confiance. Connectez-vous avec les meilleurs talents et trouvez l’emploi de vos rêves. Inscrivez-vous dès maintenant !',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <link rel="canonical" href="https://jobfeeling.vercel.app/" />
      </Head>
      <body id="top" className="bg-background dark:bg-backgroundDark">
        <Header />

        <FilAriane />
        <ArrowTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
