import React from 'react';
import Image from 'next/image';

export default function ImgPrincipal() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="relative w-full h-auto text-textColor dark:text-textColorDark">
      <Image
        className="w-full h-screen object-cover"
        src="/images/imgPrincipale.webp"
        alt="Logo RWF"
        title="Logo Rural Web Factory"
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
          className="elementPrincipal bottom-1/4 tablette:w-11/12 lg:w-10/12 2xl:w-1/2 justify-center items-center bg-secondary dark:bg-secondaryDark"
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
          <div className="group hidden mobile:flex mobile:flex-col">
            <label for="rechercher">Rechercher : </label>
            <br />
            <input
              className="inputStyle"
              type="search"
              id="rechercher"
              name="rechercher"
              aria-label="rechercher"
              placeholder="Cliquer pour rechercher"
              required
            />
          </div>

          <Image
            className=" rounded-r-lg mx-6 tablette:w-8 lg:w-10"
            src="/logo/search.svg"
            alt="Logo search"
            title="Logo de recherche"
            width="48"
            height="48"
          />
        </form>
      </div>
    </div>
  );
}
