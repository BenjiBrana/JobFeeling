import React from 'react';
import Image from 'next/image';

export default function ImgPrincipal() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="relative w-full h-auto">
      <Image
        className="w-full h-screen object-cover"
        src="/images/imgPrincipale.webp"
        alt="Logo RWF"
        title="Logo Rural Web Factory"
        width={1440}
        height={900}
      />
      <h1 className="elementPrincipal flex flex-col w-1/3  py-2 px-6 bottom-1/3 -translate-y-16 bg-white/70 text-3xl text-center font-bold">
        <span>
          <b>JobFeeling</b> : Trouverez le job
        </span>
        <span>qui éveillera votre passion</span>
      </h1>
      <div className="w-full">
        <form
          action="/submit_search"
          method="post"
          onSubmit={handleSubmit}
          className="elementPrincipal bottom-1/4 w-1/2 justify-center items-center bg-secondary"
        >
          <div className="group">
            <label for="metier">Métier : </label>
            <br />
            <input
              className="inputStyle"
              type="text"
              id="metier"
              name="metier"
              aria-label="Métier"
              placeholder="Ex : Développeur web"
              required
            />
          </div>
          <div className="group">
            <label for="lieu">Lieu : </label>
            <br />
            <input
              className="inputStyle"
              type="text"
              id="lieu"
              name="lieu"
              aria-label="Lieu"
              placeholder="Ex : Angoulême"
              required
            />
          </div>

          <Image
            className=" rounded-r-lg mx-6"
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
