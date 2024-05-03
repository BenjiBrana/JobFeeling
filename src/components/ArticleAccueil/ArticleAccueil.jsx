import Image from 'next/image';
export default function Section() {
  return (
    <section className=" sectionPage">
      <h2 className="h2Style border-t border-b border-borderColor dark:border-borderColorDark ">
        Notre conseil du jour
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
      <div className="flex flex-row my-8 tablette:flex-col lg:flex-col xl:flex-row lg:items-center tablette:items-center xl:justify-start xl:mr-20 2xl:mr-0">
        <Image
          id="imgArticle"
          className="mt-8 tablette:h-auto tablette:w-auto rounded-lg border shadow shadow-backgroundDark"
          src="/images/imgArticle.webp"
          alt="Image de l'article"
          title="Image de l'article du jour"
          width={600}
          height={600}
        />

        <div className="flex flex-col my-8 w-1/2 xl:ml-20 lg:ml-10 tablette:w-full justify-center">
          <div className="flex flex-row mobile:flex-col items-center gap-8 mb-4">
            <Image
              id="iconIdee"
              className=" h-16 w-16 mobile:mt-4 border shadow shadow-backgroundDark dark:shadow-background hover:border-2 rounded-full p-1"
              src="/logo/logo_idee.svg"
              alt="Logo idée"
              title="Logo pour donner une indication"
              width={30}
              height={30}
            />
            <h3 className=" xl:text-2xl lg:text-xl tablette:text-2xl mobile:text-xl border-borderColor dark:border-borderColorDark  py-2 text-left text-textColor dark:text-textColorDark font-bold font-titleFont">
              Comment faire bonne impression en entretien ?
            </h3>
          </div>
          <p className="text-lg text-textColor dark:text-textColorDark mobile:text-base 2xl:leading-10 xl:leading-8 pb-8 ">
            Pour faire bonne impression en entretien, commencez par
            une préparation minutieuse en recherchant l'entreprise et
            en anticipant les questions possibles. <br />
            Soyez authentique, confiant et professionnel lors de
            l'entretien, en mettant en valeur vos compétences et vos
            réalisations pertinentes. <br />
            Enfin, n'oubliez pas de poser des questions pertinentes à
            votre tour pour montrer votre intérêt et votre engagement
            envers le poste et l'entreprise. . . .
          </p>
          <a
            className="bg-orange xl:w-2/6 lg:w-1/2  text-black text-center font-bold  py-4 borderShadow hover:scale-95"
            href="/Blog/Article"
          >
            Cliquer pour voir la suite
          </a>
        </div>
      </div>
    </section>
  );
}
