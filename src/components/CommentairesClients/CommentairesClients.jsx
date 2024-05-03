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
    <section className="sectionPage relative">
      <h2 className="h2Style border-t border-b border-borderColor dark:border-borderColorDark ">
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
      <article className="relative my-8 flex flex-row h-80 w-full">
        {/* Slide précédent */}
        <div
          onClick={handlePagePrecedante}
          className="z-10 absolute bg-primary/10 flex items-center justify-center tablette:w-12 h-full text-2xl font-semibold -translate-y-1/2 top-1/2 -left-4 rounded-l-lg overflow-hidden"
        >
          <span className="flex py-1  transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer">
            <Image
              className="tablette:size-8 hover:size-12"
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
            className={`absolute  top-1/2 -translate-y-1/2 w-full  flex flex-col justify-center items-center scale-75 rounded-lg transition-opacity duration-500 ${
              page === index + 1
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <p className=" w-full bg-secondary borderShadow tablette:text-lg text-2xl mobile:text-base m-4 p-8 font-bold text-start text-black">
              {commentaireClient.commentaire}
              <span className="bottom-2  flex w-full justify-center text-lg mobile:text-sm tracking-widest py-6 font-titleFont text-black font-bold ">
                {`${commentaireClient.name} - ${commentaireClient.poste}`}
              </span>
            </p>
          </div>
        ))}
        {/* Slide suivant */}
        <div
          onClick={handlePageSuivante}
          className="z-10 absolute bg-primary/10 flex items-center justify-center tablette:w-12 h-full -translate-y-1/2 top-1/2 -right-4 text-2xl font-semibold rounded-l-lg overflow-hidden"
        >
          <span className="flex  py-1   transition-transform hover:-translate-x-1 motion-reduce:transform-none cursor-pointer">
            <Image
              className="tablette:size-8"
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
