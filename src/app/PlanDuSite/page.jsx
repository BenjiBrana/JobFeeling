import React from 'react';
import Footer from '@/components/Footer/Footer';
export default function SiteMap() {
  return (
    <>
      <section className="relative sectionPage items-center">
        <h1 className="titleSectionPage">Mentions Légales</h1>
        <div className="w-1/2 mobile:w-3/4 flex flex-col gap-4 px-2 leading-10 mt-10 items-start">
          <h2 className="h3Style">Accueil</h2>
          <p>Page d'accueil du site JobFeeling.</p>
          <h2 className="h3Style">Annonces</h2>
          <p>Page des annonces de recrutement.</p>
          <h2 className="h3Style">Messages</h2>
          <p>
            Page des messages entre les recruteurs et les candidats.
          </p>
          <h2 className="h3Style">Profil</h2>
          <p>Page du profil de l'utilisateur.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
