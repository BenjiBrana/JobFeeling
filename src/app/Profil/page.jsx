'use client';

import Image from 'next/image';

const annonces = [
  {
    id: 'annonce1',
    image: '/images/annonce1.webp',
    titleImage: 'photo SocialHub',
    alt: "Photo de l'entreprise SocialHub",
    titleAnnonce: 'SocialHub : Recherche Développeur Web',
    contenu:
      "Rejoignez notre équipe chez SocialHub en tant que Développeur Web, pour contribuer à des projets innovants. Nous recherchons des passionnés capables de résoudre des défis techniques, avec une expérience en développement web (2 ans minimum), une maîtrise de HTML, CSS, JavaScript, et des frameworks tels que React ou Angular. La capacité à travailler en équipe, résoudre des problèmes et s'adapter rapidement aux nouvelles technologies est essentielle. Une expérience antérieure avec les CMS et un portefeuille de projets ou de contributions open source seraient un plus. Rejoignez-nous chez SocialHub pour développer vos compétences au sein d'une équipe talentueuse.",
  },
];
export default function Profil() {
  return (
    <section className="sectionPage">
      <h1 className="titleSectionPage">Mon profil</h1>
      <div className="containerSectionPage ">
        <div className="sideBar h-full flex flex-col  border-r rounded-r-md left-0 bg-secondary dark:bg-secondaryDark w-2/12">
          <Image
            className="rounded-lg shadow shadow-backgroundDark dark:shadow-background border border-borderColor dark:border-borderColorDark mx-auto mt-4"
            src="/images/img_profil.webp"
            alt="Logo JobFeeling"
            title="Logo officiel de JobFeeling"
            width={120}
            height={120}
          />
          <ul className="flex flex-col items-start px-2 gap-4 mt-8">
            <li>
              <b>Identité :</b> Brana Benjamin
            </li>
            <li>
              <b>Statut :</b> Recherche Alternance | CDI | CDD
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
              <b>Annonces postulées : </b> 6
            </li>
            <li>
              <b>Niveau d'étude : </b> BAC+2
            </li>
            <li>
              <b>Dernier diplôme : </b> TP Développeur web et web
              mobile
            </li>
            <li>
              <b>Expérience : </b> Débutant
            </li>
          </ul>
        </div>
        <div className="sectionProfil w-10/12  h-full mb-6">
          <div className="flex w-full justify-between my-4">
            <h2 className=" text-textColor ml-4 dark:text-textColorDark text-2xl font-titleFont ">
              Mes candidatures
            </h2>
            <button
              className="w-auto p-2 bg-secondary dark:bg-secondaryDark border rounded border-borderColor dark:border-borderColorDark hover:bg-hoverColor dark:hover:bg-hoverColorDark"
              type="button"
            >
              Déconnexion
            </button>
          </div>
          <div className="w-full h-1/2  flex flex-row transition-opacity duration-500">
            <div className="cards justify-center flex items-stretch h-full">
              <div className="flex flex-col justify-between items-center border border-borderColor dark:border-borderColorDark transform  w-full h-full scale-75 rounded-lg transition-opacity duration-500">
                <Image
                  id="menuIcon"
                  className="  bg-background/70  hover:bg-tertinary/70 dark:hover:bg-tertinaryDark/70 rounded-full p-1 shadow-md shadow-black dark:shadow-white"
                  src="/images/annonce1.webp"
                  alt="Photo de l'entreprise SocialHub"
                  title="photo SocialHub"
                  width={124}
                  height={124}
                />
                <h3 className="font-titleFont text-2xl font-bold">
                  SocialHub : Recherche Développeur Web
                </h3>
                <p className="text-xl my-8">
                  Rejoignez notre équipe chez SocialHub en tant que
                  Développeur Web, pour contribuer à des projets
                  innovants. Nous recherchons des passionnés capables
                  de résoudre des défis techniques, avec une
                  expérience en développement web (2 ans minimum), une
                  maîtrise de HTML, CSS, JavaScript, et des frameworks
                  tels que React ou Angular. La capacité à travailler
                  en équipe, résoudre des problèmes et s'adapter
                  rapidement aux nouvelles technologies est
                  essentielle. Une expérience antérieure avec les CMS
                  et un portefeuille de projets ou de contributions
                  open source seraient un plus. Rejoignez-nous chez
                  SocialHub pour développer vos compétences au sein
                  d'une équipe talentueuse.
                </p>
                <button
                  className="bg-orange w-1/2 font-bold py-2"
                  type="button"
                >
                  Postuler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
