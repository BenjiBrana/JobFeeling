'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function CurriculumVitae() {
  const [cv, setCv] = useState(false);
  const [openContainer, setOpenContainer] = useState(false);

  const handleAddCV = () => {
    // Ajouter la logique pour ajouter un CV
    setCv(true);
  };

  const handleEditCV = () => {
    // Ajouter la logique pour modifier le CV
  };

  const handleDeleteCV = () => {
    // Ajouter la logique pour supprimer le CV
    setCv(false);
  };
  const toggleOpenContainer = () => {
    // Inverse l'état actuel
    setOpenContainer(!openContainer);
  };
  return (
    <article className="card borderShadow">
      <h2
        onClick={toggleOpenContainer}
        className="subTitleSectionPage flex gap-4 justify-center items-center"
      >
        Mon CV
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
      {cv ? (
        <div
          className={`flex flex-row gap-4 justify-center  ${
            openContainer ? 'flex' : 'hidden'
          }`}
        >
          <button
            onClick={handleEditCV}
            className="border border-borderColor dark:border-borderColorDark p-2 rounded-md mt-4 bg-background dark:bg-backgroundDark shadow shadow-backgroundDark dark:shadow-background"
          >
            Modifier
          </button>
          <button
            onClick={handleDeleteCV}
            className="border border-borderColor dark:border-borderColorDark p-2 rounded-md mt-4 bg-background dark:bg-backgroundDark shadow shadow-backgroundDark dark:shadow-background"
          >
            Supprimer
          </button>
        </div>
      ) : (
        <div
          className={`articleHeader ${
            openContainer ? 'flex' : 'hidden'
          }`}
        >
          <button
            onClick={handleAddCV}
            className="border border-borderColor dark:border-borderColorDark p-2 rounded-md mt-4 bg-background dark:bg-backgroundDark shadow shadow-backgroundDark dark:shadow-background"
          >
            Ajouter un CV
          </button>
        </div>
      )}
      <div
        className={`articleBody ${openContainer ? 'flex' : 'hidden'}`}
      ></div>
    </article>
  );
}
