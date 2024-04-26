'use client';
import Candidature from '@/components/Candidature/Candidature';
import CurriculumVitae from '@/components/CurriculumVitae/CurriculumVitae';
import Aside from '@/components/Aside/Aside';

export default function Profil() {
  return (
    <section className="sectionPage">
      <h1 className="titleSectionPage">Mon profil</h1>
      <div className="flex w-full flex-row flex-wrap items-center gap-4 h-12 mobile:px-4 tablette:justify-center justify-between my-4">
        <span className=" text-textColor ml-4 dark:text-textColorDark text-2xl font-titleFont ">
          Bonjour Benjamin
        </span>
        <button
          className="w-auto p-2 bg-secondary dark:bg-secondaryDark borderShadow hover:bg-hoverColor dark:hover:bg-hoverColorDark"
          type="button"
        >
          Déconnexion
        </button>
      </div>
      <div className="containerSectionPage flex-row  justify-between">
        <Aside />
        <section className="flex gap-8 2xl:flex-row flex-col  lg:items-center 2xl:items-start 2xl:justify-around w-full">
          <Candidature />
          <CurriculumVitae />
        </section>
      </div>
    </section>
  );
}
