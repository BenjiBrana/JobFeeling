import React, { useState } from 'react';
import Image from 'next/image';

export default function Candidature() {
  const annonces = [
    {
      id: 'annonce1',
      url: '/images/annonce1.webp',
      titleImg: 'photo SocialHub',
      altImg: "Photo de l'entreprise SocialHub",
      titleAnnonce: 'SocialHub : Recherche Développeur Web',
      dateAnnonce: '23/04/2024',
      description:
        "Rejoignez notre équipe chez SocialHub en tant que Développeur Web, pour contribuer à des projets innovants. Nous recherchons des passionnés capables de résoudre des défis techniques, avec une expérience en développement web (2 ans minimum), une maîtrise de HTML, CSS, JavaScript, et des frameworks tels que React ou Angular. La capacité à travailler en équipe, résoudre des problèmes et s'adapter rapidement aux nouvelles technologies est essentielle. Une expérience antérieure avec les CMS et un portefeuille de projets ou de contributions open source seraient un plus. Rejoignez-nous chez SocialHub pour développer vos compétences au sein d'une équipe talentueuse.",
      criteres: ['Bordeaux', 'Symfony', "2 ans d'expérience"],
    },
    {
      id: 'annonce2',
      url: '/images/annonce2.webp',
      titleImg: 'photo Greenspace',
      altImg: "Photo de l'entreprise Greenspace",
      titleAnnonce: 'Greenspace : Recherche Développeur Web',
      dateAnnonce: '24/04/2024',
      description:
        "Rejoignez notre équipe chez Greenspace en tant que Développeur Web, pour contribuer à des projets innovants. Nous recherchons des passionnés capables de résoudre des défis techniques, avec une expérience en développement web (2 ans minimum), une maîtrise de HTML, CSS, JavaScript, et des frameworks tels que React ou Angular. La capacité à travailler en équipe, résoudre des problèmes et s'adapter rapidement aux nouvelles technologies est essentielle. Une expérience antérieure avec les CMS et un portefeuille de projets ou de contributions open source seraient un plus. Rejoignez-nous chez SocialHub pour développer vos compétences au sein d'une équipe talentueuse.",
      criteres: ['Angoulême', 'React', "2 ans d'expérience"],
    },
  ];

  const [selectedAnnonce, setSelectedAnnonce] = useState(annonces[0]);
  const [openContainer, setOpenContainer] = useState(false);

  const handleSelectAnnonce = (index) => {
    setSelectedAnnonce(annonces[index]);
  };

  const toggleOpenContainer = () => {
    setOpenContainer(!openContainer); // Inverse l'état actuel
  };

  return (
    <article className="card flex-col borderShadow">
      <h2
        onClick={toggleOpenContainer}
        className="subTitleSectionPage cursor-pointer flex gap-4 justify-center items-center"
      >
        Mes candidatures
        <Image
          className={`animate-spin-slow dark:shadow dark:bg-background dark:rounded-full dark:p-2 h-6 w-6 ${
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
      <div
        className={`articleHeader ${
          openContainer ? 'flex' : 'hidden'
        }`}
      >
        <select
          className="flex-1 my-4 max-w-full bg-background dark:bg-backgroundDark text-textColor dark:text-textColorDark border borderShadow p-2 rounded-md"
          onChange={(e) =>
            handleSelectAnnonce(parseInt(e.target.value))
          }
        >
          {annonces.map((annonce, index) => (
            <option key={index} value={index}>
              {annonce.titleAnnonce}
            </option>
          ))}
        </select>
        <span className="ml-6 font-bold">
          Candidaté le : {selectedAnnonce.dateAnnonce}
        </span>
      </div>
      <div
        className={`articleBody ${openContainer ? 'flex' : 'hidden'}`}
      >
        <Image
          id="menuIcon"
          className="mb-8 mt-4 bg-background/70 hover:bg-tertinary/70 dark:hover:bg-tertinaryDark/70 rounded-full p-1 shadow-md shadow-backgroundDark dark:shadow-background"
          src={selectedAnnonce.url}
          alt={selectedAnnonce.altImg}
          title={selectedAnnonce.titleImg}
          width={96}
          height={96}
        />
        <h3 className="font-titleFont text-xl font-bold">
          {selectedAnnonce.titleAnnonce}
        </h3>
        <p className="text-base my-8 p-4 leading-10">
          {selectedAnnonce.description}
        </p>
        <ul className="flex flex-row mobile:flex-col gap-4">
          {selectedAnnonce?.criteres &&
            selectedAnnonce.criteres.map((critere, index) => (
              <li className="font-bold" key={index}>
                {critere}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}
