import Footer from '@/components/Footer/Footer';
import FiltreSide from '@/components/FiltreSide/FiltreSide';
import Image from 'next/image';
export default function Notifications() {
  const annonces = [
    {
      id: 'annonce1',
      url: '/images/annonce1.webp',
      titleImg: 'photo SocialHub',
      altImg: "Photo de l'entreprise SocialHub",
      titleAnnonce: 'SocialHub : Recherche Développeur Web',
      dateAnnonce: '23/04/2024',
      description:
        "Rejoignez notre équipe chez SocialHub en tant que Développeur Web, pour contribuer à des projets innovants. Nous recherchons des passionnés capables de résoudre des défis techniques, avec une expérience en développement web (2 ans minimum), une maîtrise de HTML, CSS, JavaScript, et des frameworks tels que React ou Angular. La capacité à travailler en équipe, résoudre des problèmes et s'adapter rapidement aux nouvelles technologies est essentielle. Une expérience antérieure avec les CMS et un portefeuille de projets ou de contributions open source seraient un plus. Rejoignez-nous chez SocialHub pour développer vos compétences au sein d'une équipe talentueuse.",
      criteres: ['Bordeaux', 'React', "2 ans d'expériences"],
    },
    {
      id: 'annonce2',
      url: '/images/annonce2.webp',
      titleImg: 'photo Greenspace',
      altImg: "Photo de l'entreprise Greenspace",
      titleAnnonce: 'Greenspace : Recherche Développeur Web',
      dateAnnonce: '24/04/2024',
      description:
        "Rejoignez notre équipe chez Greenspace en tant que Développeur Web, Opportunité pour un développeur Symfony expérimenté de rejoindre une entreprise innovante dans le domaine du web. Le candidat idéal aura au moins 2 ans d'expérience en développement web, une maîtrise de Symfony, ainsi que des compétences en PHP, HTML, CSS et JavaScript. Offre comprenant un environnement de travail stimulant, des opportunités de croissance professionnelle et une rémunération compétitive. Postulez dès maintenant en envoyant votre CV et lettre de motivation.",
      criteres: ['Angoulême', 'Symfony', "2 ans d'expériences"],
    },
  ];
  return (
    <section className="w-full flex flex-col min-h-screen justify-between">
      <div className="sectionPage">
        <h1 className="titleSectionPage">Annonces</h1>
        <div className="w-full h-full tablette:my-12 flex flex-col tablette:items-center lg:items-center xl:flex-row xl:items-start pt-4 px-4 gap-2 ">
          <FiltreSide />
          <section className="relative tablette:w-full w-10/12 border borderShadow h-screen flex flex-col pt-4 bg-secondary dark:bg-secondaryDark">
            <div className="flex flex-col overflow-y-auto w-full font-textFont text-lg">
              {annonces.map((annonce, index) => (
                <div
                  key={index}
                  className={`my-4 flex flex-col items-center h-auto w-full ${annonce.class} `}
                >
                  <div className="flex flex-col items-center p-4 lg:w-5/6  gap-4 bg-background dark:bg-backgroundDark text-textColor dark:text-textColorDark borderShadow">
                    <div className="flex mobile:flex-col items-center gap-8">
                      <Image
                        className="rounded shadow size-20 shadow-backgroundDark dark:shadow-background border  border-borderColor dark:border-borderColorDark"
                        src={annonce.url}
                        alt={annonce.altImg}
                        title={annonce.titleImg}
                        width={64}
                        height={64}
                      />
                      <h3 className="font-titleFont text-center text-xl font-bold">
                        {annonce.titleAnnonce}
                      </h3>
                    </div>
                    <p className="text-base items-start w-full my-4 px-4 leading-10">
                      <span>
                        <u>Description</u> : &nbsp;
                      </span>
                      {annonce.description}
                    </p>
                    <ul className="flex xl:flex-row lg:flex-col items-center  min-w-screen-lg:items-start w-full  px-4 tablette:flex-col gap-4">
                      <span>
                        <u>Critères demandés</u> :
                      </span>
                      {annonce.criteres &&
                        annonce.criteres.map((critere, index) => (
                          <li className="font-bold" key={index}>
                            {critere}{' '}
                            <span className="xl:inline lg:hidden tablette:hidden">
                              |
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </section>
  );
}
