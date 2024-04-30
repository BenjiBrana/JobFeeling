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
    <aside className=" sideBar borderShadow">
      <div className="py-4 px-2">
        <h2
          onClick={toggleOpenContainer}
          className="subTitleSectionPage cursor-pointer flex gap-4 justify-center items-center"
        >
          Filtrer votre recherche
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
        <form
          className={`articleHeader ${
            openContainer ? 'flex' : 'hidden'
          }`}
        >
          <label
            for="jobType"
            class="block text-sm font-medium text-gray-700"
          >
            Type de travail
          </label>
          <select
            id="jobType"
            name="jobType"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>CDI</option>
            <option>CDD</option>
            <option>Intérim</option>
            <option>Alternance</option>
            <option>Formation</option>
          </select>

          <label
            for="industry"
            class="block text-sm font-medium text-gray-700"
          >
            Secteur d'activité
          </label>
          <select
            id="industry"
            name="industry"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Tout</option>
            <option>Administration, fonction publique</option>
            <option>Agroalimentaire</option>
            <option>Artisanat d'art</option>
            <option>Associations</option>
            <option>Banques, assurances, services financiers</option>
            <option>Chimie, plastique, conditionnement</option>
            <option>Commerce de détail, grande distribution</option>
            <option>Communication, marketing, information</option>
            <option>Construction, bâtiment, travaux publics</option>
            <option>Culture, sports, loisirs</option>
            <option>Energie</option>
            <option>Enseignement, formation</option>
            <option>Environnement</option>
            <option>
              Equipement, matériel pour activités professionnelles
            </option>
            <option>
              Fabrication, commerce de gros d'articles destinés à la
              vente
            </option>
            <option>Gestion, administration des entreprises</option>
            <option>Hôtellerie, restauration, tourisme</option>
            <option>Immobilier</option>
            <option>Industrie textile</option>
          </select>

          <label
            for="location"
            class="block text-sm font-medium text-gray-700"
          >
            Lieu
          </label>
          <input
            type="text"
            id="location"
            name="location"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Entrez un lieu"
          />

          <label
            for="salary"
            class="block text-sm font-medium text-gray-700"
          >
            Salaire minimum
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Entrez un salaire"
          />
        </form>
      </div>
    </aside>
  );
}
