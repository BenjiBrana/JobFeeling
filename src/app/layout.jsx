import './globals.css';
import React from 'react';
import Header from '@/components/Header/Header';
import FilAriane from '@/components/FilAriane/FilAriane';

export const metadata = {
  title: 'JobFeeling',
  description:
    'Découvrez JobFeeling, votre plateforme de recrutement en ligne de confiance. Connectez-vous avec les meilleurs talents et trouvez l’emploi de vos rêves. Inscrivez-vous dès maintenant !',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <FilAriane />
        {children}
      </body>
    </html>
  );
}
