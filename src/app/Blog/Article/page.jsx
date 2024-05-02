import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
export default function Section() {
  return (
    <>
      <section className="flex flex-col items-center w-full px-20 tablette:mx-4 scale-95 hover:scale-100 bg-background dark:bg-backgroundDark  tablette:flex-col my-12 tablette:items-center lg:justify-start xl:mr-20 2xl:mr-0">
        <Image
          id="imgArticle"
          className="my-8 tablette:h-auto tablette:w-auto rounded-lg border shadow shadow-backgroundDark"
          src="/images/imgArticle.webp"
          alt="Image de l'article"
          title="Image de l'article du jour"
          width={600}
          height={600}
        />

        <article className="flex flex-col w-1/2 xl:ml-20 lg:ml-10  tablette:w-full  justify-center">
          <aside className="flex flex-row mobile:flex-col items-center gap-8 my-8">
            <Image
              id="iconIdee"
              className=" size-16 mobile:mt-4 border shadow shadow-backgroundDark dark:shadow-background hover:border-2 rounded-full p-1"
              src="/logo/logo_idee.svg"
              alt="Logo idée"
              title="Logo pour donner une indication"
              width={30}
              height={30}
            />
            <h1 className=" xl:text-4xl lg:text-xl tablette:text-2xl mobile:text-xl border-borderColor dark:border-borderColorDark  text-left text-textColor dark:text-textColorDark font-bold font-titleFont">
              Comment faire bonne impression en entretien ?
            </h1>
          </aside>
          <h2 className="h2Style">Préparation avant l'entretien</h2>
          <p className="paragraphStyle">
            La <strong>préparation</strong> est la clé pour faire
            bonne impression lors d'un entretien d'embauche. <br />
            Cela implique de faire des recherches approfondies sur
            l'entreprise et le poste pour lequel vous postulez.
            <br />
            Comprendre la culture de l'entreprise, ses valeurs et sa
            mission peut vous aider à vous aligner avec elle lors de
            l'entretien.
            <br />
            De plus, anticipez les questions possibles et préparez des
            réponses réfléchies. <br />
            Cela vous aidera à vous sentir plus confiant et à éviter
            d'être pris au dépourvu.
          </p>

          <h2 className="h2Style">Pendant l'entretien</h2>
          <p className="paragraphStyle">
            Lors de l'entretien, il est important d'être{' '}
            <strong className="pl-1">authentique</strong> et{' '}
            <strong className="pl-1">confiant</strong>.<br />
            Montrez votre passion pour le poste et l'entreprise.
            <br />
            Mettez en valeur vos compétences et vos réalisations
            pertinentes. <br />
            N'oubliez pas que l'entretien est aussi une occasion pour
            vous d'évaluer si l'entreprise et le poste sont un bon
            ajustement pour vous. <br />
            Soyez conscient de votre langage corporel, car il peut en
            dire beaucoup sur votre confiance et votre enthousiasme.
          </p>

          <h2 className="h2Style">Poser des questions</h2>
          <p className="paragraphStyle">
            Poser des questions pertinentes à votre tour montre votre
            <strong className="pl-1">intérêt</strong> et votre
            <strong className="pl-1">engagement</strong> envers le
            poste et l'entreprise.
            <br /> Cela peut également vous aider à obtenir des
            informations précieuses qui peuvent vous aider à prendre
            une décision éclairée si on vous offre le poste.
            <br /> Les questions peuvent porter sur la culture de
            l'entreprise, les attentes du poste, les opportunités de
            développement professionnel, etc...
          </p>

          <h2 className="h2Style">Après l'entretien</h2>
          <p className="paragraphStyle">
            Après l'entretien, il est toujours une bonne idée
            d'envoyer un
            <strong className="pl-1">email de remerciement</strong> à
            l'intervieweur.
            <br /> Cela montre votre appréciation pour l'opportunité
            et peut laisser une impression positive durable.
            <br /> Dans votre email, mentionnez des points spécifiques
            de l'entretien qui vous ont marqué ou posez des questions
            de suivi si nécessaire.
          </p>

          <p className="paragraphStyle">
            En suivant ces conseils, vous pouvez faire une bonne
            impression lors de votre prochain entretien d'embauche et
            augmenter vos chances d'obtenir le poste de vos rêves.
            <br />
            <br />
            Bonne chance !
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}
