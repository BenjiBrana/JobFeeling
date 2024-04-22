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
        width={1440}
        height={900}
      />
      <h1 className="elementPrincipal flex flex-col w-1/3 tablette:w-1/2 mobile:w-3/4  py-2 px-6 bottom-1/3 -translate-y-16 bg-white/70 dark:bg-black/70 2xl:text-3xl xl:text-2xl text-xl text-center font-bold">
        <span className="tablette:flex tablette:flex-col tablette:justify-center">
          <b>JobFeeling : </b>Trouverez le job
        </span>
        <span className="tablette:text-lg">
          qui éveillera votre passion
        </span>
      </h1>
      <div className="w-full">
        <form
          action="/submit_search"
          method="post"
          onSubmit={handleSubmit}
          className="elementPrincipal bottom-1/4 tablette:w-11/12 lg:w-10/12 2xl:w-1/2 justify-center items-center bg-secondary dark:bg-secondaryDark "
        >
          <div className="group mobile:hidden">
            <label for="metier">Métier : </label>
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
            <label for="lieu">Lieu : </label>
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
          <div className=" rounded-r-lg mx-6 tablette:w-8 lg:w-10 mobile:hidden">
            <Image
              src="/logo/search.svg"
              alt="Logo search"
              title="Logo de recherche"
              width="48"
              height="48"
            />
          </div>
          <div className="group hidden mobile:flex mobile:flex-col">
            <label className="my-2" for="rechercher">
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
