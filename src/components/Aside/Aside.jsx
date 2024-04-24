'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function Section() {
  const [openContainer, setOpenContainer] = useState(false);
  const toggleOpenContainer = () => {
    // Inverse l'état actuel
    setOpenContainer(!openContainer);
  };
  return (
    <aside className=" sideBar">
      <Image
        className="rounded-lg shadow shadow-backgroundDark dark:shadow-background border border-borderColor dark:border-borderColorDark mx-auto mt-4"
        src="/images/img_profil.webp"
        alt="Logo JobFeeling"
        title="Logo officiel de JobFeeling"
        width={120}
        height={120}
      />
      <div>
        <h2
          onClick={toggleOpenContainer}
          className="subTitleSectionPage flex gap-4 justify-center items-center"
        >
          Mes informations
          <Image
            className={`animate-spin-slow h-6 w-6 ${
              openContainer ? 'transform rotate-180' : ''
            }`}
            src="/logo/chevron_down.svg"
            alt={
              openContainer ? 'Logo chevron up' : 'Logo chevron down'
            }
            title={
              openContainer
                ? 'Logo pour fermer la réponse'
                : 'Logo pour voir la réponse'
            }
            width={24}
            height={24}
          />
        </h2>
        <ul
          className={`flex flex-col tablette:flex-row flex-wrap items-start p-4 gap-4 mt-8  ${
            openContainer ? 'flex' : 'hidden'
          }`}
        >
          <li>
            <b>Identité :</b> Brana Benjamin
          </li>
          <li>
            <b>Statut :</b> Sans emploi
          </li>
          <li>
            <b>Recherche :</b> Alternance | CDI | CDD
          </li>
          <li>
            <b>Lieu :</b> Angoulême, 16000 - Charente
          </li>
          <li>
            <b>Email :</b> contact@branabenjamin.fr
          </li>
          <li>
            <b>N° :</b> 0642947059
          </li>
          <li>
            <b>Annonces postulées : </b> 2
          </li>
          <li>
            <b>Niveau d'étude : </b> BAC+2
          </li>
          <li>
            <b>Dernier diplôme : </b> TP Développeur web et web mobile
          </li>
          <li>
            <b>Expérience : </b> Débutant
          </li>
          <li>
            <b>Compétences : </b> Next.js | Tailwind CSS | SCSS
          </li>
        </ul>
      </div>
    </aside>
  );
}
