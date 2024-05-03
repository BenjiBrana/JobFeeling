'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function CommentairesClients() {
  const [page, setPage] = useState(1);
  const commentairesClients = [
    {
      id: 'commentaire1',
      name: 'Jeanne',
      poste: 'Développeuse Web',
      commentaire:
        "Trouver un emploi n'a jamais été aussi simple ! Grâce à JobFeeling, j'ai pu trouver le poste parfait qui correspondait à mes compétences et à mes aspirations. Le processus a été fluide et efficace. Je recommande vivement JobFeeling à tous ceux qui cherchent à faire progresser leur carrière.",
    },
    {
      id: 'commentaire2',
      name: 'Pierre',
      poste: 'Chef de Projet',
      commentaire:
        "JobFeeling a transformé ma recherche d'emploi. Leur plateforme est facile à utiliser et j'ai été impressionné par la qualité des offres d'emploi disponibles. J'ai trouvé un emploi qui me passionne vraiment grâce à JobFeeling.",
    },
    {
      id: 'commentaire3',
      name: 'Marie',
      poste: 'Responsable des Ressources Humaines',
      commentaire:
        "En tant qu'employeur, JobFeeling a été un outil précieux pour trouver des candidats qualifiés. Leur plateforme est intuitive et leur équipe de support est toujours prête à aider. Nous avons réussi à embaucher plusieurs candidats exceptionnels grâce à JobFeeling.",
    },
    {
      id: 'commentaire3',
      name: 'Thomas',
      poste: 'Ingénieur Logiciel',
      commentaire:
        "J'étais nerveux à l'idée de chercher un nouvel emploi, mais JobFeeling a rendu le processus beaucoup moins stressant. Leur plateforme m'a permis de postuler facilement à plusieurs offres et j'ai reçu des réponses rapidement. Je suis maintenant dans un emploi que j'aime, tout cela grâce à JobFeeling.",
    },
  ];

  useEffect(() => {
    /* Slide automatique au bout d'un certain temps*/
    const interval = setInterval(() => {
      setPage((prev) =>
        prev === commentairesClients.length ? 1 : prev + 1
      );
    }, 5000);
    /* Evite le slide automatique si on viens de changer manuellement */
    return () => clearInterval(interval);
  }, []);
  /*Page précédente*/
  const handlePagePrecedante = () => {
    setPage((prev) =>
      prev === 1 ? commentairesClients.length : prev - 1
    );
  };
  /*Page suivante*/
  const handlePageSuivante = () => {
    setPage((prev) =>
      prev === commentairesClients.length ? 1 : prev + 1
    );
  };

  return (
    <section className="sectionPage tablette:mx-4 scale-95 hover:scale-100">
      <h2 className="mt-20 w-full  flex flex-row items-center justify-between border-t border-b border-borderColor dark:border-borderColorDark  py-2 text-left text-textColor dark:text-textColorDark  text-4xl tablette:text-3xl mobile:text-2xl font-bold font-titleFont ">
        Avis utilisateur
        <Image
          id="iconConseil"
          className=" h-16 w-16 opacity-80 border shadow shadow-backgroundDark hover:border-2"
          src="/logo/logo_conseil.webp"
          alt="Logo conseil"
          title="Logo de conseil"
          width={30}
          height={30}
        />
      </h2>
      <article className="relative my-8 flex flex-row h-72">
        {/* Slide précédent */}
        <div
          onClick={handlePagePrecedante}
          className="z-10 absolute flex h-16  -translate-y-1/2 top-1/2 left-0 text-2xl font-semibold  rounded-r-lg overflow-hidden bg-primary/10  hover:shadow-tertinary  hover:shadow-md"
        >
          <span className="flex hover:bg-tertinary/50 hover:border-tertinary py-1 transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer  ">
            <Image
              className="mx-4 w-auto h-auto"
              alt="Slide à droite"
              src="/logo/circle-chevron-left-solid.svg"
              width={40}
              height={40}
            />
          </span>
        </div>
        {commentairesClients.map((commentaireClient, index) => (
          <div
            key={commentaireClient.index}
            className={`absolute borderShadow  w-full py-3 px-8 bg-secondary flex flex-col justify-center items-center h-full scale-75 rounded-lg transition-opacity duration-500 ${
              page === index + 1
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <p className="text-2xl mobile:text-base  font-bold w-full text-start text-black">
              {commentaireClient.commentaire}
            </p>
            <span className="flex w-full justify-end text-lg mobile:text-sm tracking-widest py-6 font-titleFont text-black font-bold ">
              {`${commentaireClient.name} - ${commentaireClient.poste}`}
            </span>
          </div>
        ))}
        {/* Slide suivant */}
        <div
          onClick={handlePageSuivante}
          className="z-10 absolute bg-primary/10 flex h-16 -translate-y-1/2 top-1/2 right-0 text-2xl font-semibold  rounded-l-lg overflow-hidden hover:shadow-tertinary  hover:shadow-md"
        >
          <span className="flex hover:bg-tertinary/50 py-1  hover:border-tertinary  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer  ">
            <Image
              className="mx-4 w-auto h-auto"
              alt="slide à gauche"
              src="/logo/circle-chevron-right-solid.svg"
              width={40}
              height={40}
            />
          </span>
        </div>
      </article>
    </section>
  );
}
