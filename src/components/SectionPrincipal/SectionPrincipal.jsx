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
    <div className="relative w-full h-auto text-textColor dark:text-textColorDark rounded-b-lg border-b shadow shadow-backgroundDark">
      <Image
        className="w-full h-screen object-cover"
        src="/images/imgPrincipale.webp"
        alt="Image principal"
        title="Image de présentation"
        priority
        width={1440}
        height={900}
      />
      <h1 className="elementPrincipal flex flex-col w-1/3 tablette:w-1/2 mobile:w-3/4  py-2 px-6 bottom-2/4 -translate-y-16 bg-background/70 dark:bg-backgroundDark/70 text-3xl mobile:text-2xl  text-center font-bold">
        <span className="tablette:flex tablette:flex-col tablette:justify-center">
          <strong>JobFeeling</strong>
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
            <label className="my-2" htmlFor="rechercher">
              Un métier, une ville, saisissez votre recherche
            </label>

            <input
              className="inputStyle"
              type="btn"
              id="rechercher"
              name="rechercher"
              aria-label="rechercher"
              placeholder="Développeur web / Angoulême / . . ."
              required
              onClick={handleSubmit}
            />
          </div>
        </form>
        {showModal && (
          <ModalSearch
            closeModal={closeModal}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
