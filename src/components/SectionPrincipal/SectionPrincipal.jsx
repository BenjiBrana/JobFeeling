import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import ModalSearch from '../ModalSearch/ModalSearch';

export default function ImgPrincipal() {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="relative w-full h-auto text-textColor dark:text-textColorDark rounded-b-lg border-b shadow shadow-backgroundDark">
        <Image
          className="w-full h-screen tablette:h-128 object-cover"
          srcset="/images/imgPrincipaleMini.webp 630w,
          /images/imgPrincipale.webp 1024w"
          sizes="(max-width: 630px) 1024px"
          src="/images/imgPrincipaleMini.webp"
          alt="Image principal"
          title="Image de présentation"
          priority
          width={1024}
          height={900}
        />

        <h1 className="elementPrincipal flex flex-col w-1/3 tablette:w-1/2 mobile:w-3/4  py-2 px-6 bottom-2/4 -translate-y-16 bg-background/70 dark:bg-backgroundDark/70 text-3xl mobile:text-2xl  text-center font-bold">
          <span className="tablette:flex tablette:flex-col tablette:justify-center font-bold text-4xl pb-4">
            JobFeeling
          </span>
          <span className="text-2xl tablette:text-lg">
            Trouverez le job qui éveillera votre passion
          </span>
        </h1>
        <div className="w-full">
          <form
            action="/submit_search"
            method="post"
            onSubmit={handleSubmit}
            className="elementPrincipal bottom-1/4 tablette:w-11/12 lg:w-10/12 2xl:w-1/2 justify-center items-center bg-background/70 dark:bg-backgroundDark hover:scale-105"
          >
            <div className="group mobile:hidden">
              <label htmlFor="metier">Métier : </label>
              <br />
              <input
                className="inputStyle"
                type="search"
                id="metier"
                name="metier"
                aria-label="Métier"
                placeholder="Ex : Développeur web"
                required
              />
            </div>
            <div className="group mobile:hidden">
              <label htmlFor="lieu">Lieu : </label>
              <br />
              <input
                className="inputStyle"
                type="search"
                id="lieu"
                name="lieu"
                aria-label="Lieu"
                placeholder="Ex : Angoulême"
                required
              />
            </div>
            <div className="cursor-pointer rounded-r-lg mx-6 tablette:w-8 lg:w-10 mobile:hidden">
              <Image
                className="cursor-pointer dark:shadow dark:bg-background dark:rounded-full dark:p-2 "
                src="/logo/search.svg"
                alt="Logo search"
                title="Logo de recherche"
                width="48"
                height="48"
              />
            </div>
            <div className="group hidden mobile:flex mobile:flex-col">
              <span className="my-2 font-bold text-textColor">
                Un métier, une ville, saisissez votre recherche
              </span>

              <button
                className="bg-background cursor-pointer border border-borderColor dark:border-borderColorDark  dark:text-textColor px-2 mt-2 h-12 w-full rounded-md font-bold hover:border-borderColorDark dark:hover:border-borderColor active:border-borderColorDark dark:active:border-borderColor text-textColor"
                id="rechercher"
                aria-label="rechercher"
                onClick={handleSubmit}
              >
                Développeur web / Angoulême / . . .
              </button>
            </div>
          </form>
          {showModal && (
            <ModalSearch
              closeModal={closeModal}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </section>
      <section className="sectionPage">
        <h2 className="h2Style">
          Bienvenue sur votre passerelle vers une carrière
          épanouissante, votre plateforme de recrutement en ligne de
          confiance.
        </h2>
        <p className="paragraphStyle pt-8">
          Chez JobFeeling, nous croyons que chaque individu mérite de
          trouver le <strong className="font-normal">job</strong> qui
          lui correspond parfaitement. C'est pourquoi nous avons créé
          une plateforme innovante et conviviale qui connecte les
          candidats aux employeurs de manière efficace et
          transparente.
        </p>
        <p className="paragraphStyle">
          Notre mission est simple :
          <strong className="px-2 font-normal">
            faciliter votre recherche d'emploi,
          </strong>
          que vous soyez à la recherche de votre premier emploi, d'une
          nouvelle opportunité de carrière ou d'un changement de cap,
          JobFeeling est là pour vous aider à chaque étape du
          processus.
        </p>
        <p className="paragraphStyle">
          Nous comprenons que le recrutement n'est pas seulement une
          question de compétences, mais aussi de
          <strong className="font-normal">"feeling"</strong>. C'est
          pourquoi nous nous efforçons de créer des correspondances
          basées non seulement sur les qualifications et l'expérience,
          mais aussi sur la culture d'entreprise et les valeurs
          personnelles.
        </p>
        <p className="paragraphStyle">
          Nous comprenons que le recr Avec une vaste gamme d'
          <strong className="font-normal">offres d'emploi</strong>
          dans divers secteurs et une interface utilisateur intuitive,
          JobFeeling rend la recherche d'emploi plus facile que
          jamais. Rejoignez-nous aujourd'hui et commencez votre voyage
          vers le job de vos rêves.
        </p>
      </section>
    </>
  );
}
