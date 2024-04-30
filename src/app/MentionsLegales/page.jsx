import React from 'react';
import Footer from '@/components/Footer/Footer';
export default function MentionsLegales() {
  return (
    <>
      <section className="relative sectionPage items-center">
        <h1 className="titleSectionPage">Mentions Légales</h1>
        <div className="w-1/2 mobile:w-3/4 flex flex-col gap-4 px-2 leading-10 mt-10 items-start">
          <h3 className="h3Style">Informations légales</h3>
          <p>
            Nom de l'entreprise : JobFeeling
            <br />
          </p>
          <h3 className="h3Style">Responsable de la publication</h3>
          <p>
            Le responsable de la publication de ce site web est M.
            Brana Benjamin, en sa qualité de CEO.
          </p>
          <h3 className="h3Style">Hébergeur</h3>
          <p>
            Nom de l'hébergeur : Vercel Inc. <br />
            Adresse de l'hébergeur : 340 S Lemon Ave #4133 Walnut, CA
            91789 USA <br />
            Numéro de téléphone de l'hébergeur : (559) 288-7060
          </p>
          <h3 className="h3Style">Propriété intellectuelle</h3>
          <p>
            Tous les éléments de ce site web, y compris les textes,
            graphiques, logos, animations, sont la propriété exclusive
            de JobFeeling.
          </p>
          <h3 className="h3Style">Limitation de responsabilité</h3>
          <p>
            JobFeeling ne peut être tenu responsable des erreurs
            rencontrées sur le site, problèmes techniques,
            interprétation des informations publiée et conséquences de
            leur utilisation. L'utilisateur reconnaît utiliser ces
            informations sous sa responsabilité exclusive.
          </p>
          <h3 className="h3Style">Création du site web</h3>
          <p>
            Ce site web a été conçu et réalisé par Brana Benjamin.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
