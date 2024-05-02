import React from 'react';
import Footer from '@/components/Footer/Footer';
export default function Confidentialite() {
  return (
    <>
      <section className="relative sectionPage items-center">
        <h1 className="py-6 w-full text-center   text-4xl font-titleFont border-b border-borderColor dark:border-borderColorDark tablette:mt-8 mobile:mt-12 mt-20 mb-4 flex flex-row items-center justify-center   text-textColor dark:text-textColorDark tablette:text-3xl mobile:text-2xl font-bold ">
          Accessibilité
        </h1>
        <div className="w-1/2 mobile:w-3/4 flex flex-col gap-4 px-2 leading-10 mt-10 items-start">
          <p>
            Chez JobFeeling, nous nous engageons à rendre notre site
            web accessible à tous. Nous travaillons constamment à
            améliorer l'accessibilité de notre site pour assurer une
            expérience utilisateur inclusive et diversifiée.
          </p>

          <h2 className="h2Style">
            Mesures d'accessibilité en place
          </h2>
          <ul>
            <li>
              <strong>
                Compatibilité avec les lecteurs d'écran :
              </strong>
              Nous nous efforçons de rendre notre site compatible avec
              les lecteurs d'écran pour aider les utilisateurs
              malvoyants ou non-voyants.
            </li>
            <li>
              <strong>Navigation au clavier :</strong> Notre site est
              conçu pour être navigable au clavier, permettant aux
              utilisateurs qui ne peuvent pas utiliser une souris ou
              un écran tactile de naviguer facilement sur le site.
            </li>
            <li>
              <strong>Contraste des couleurs :</strong> Nous utilisons
              des couleurs contrastées pour aider les utilisateurs
              malvoyants ou ayant des problèmes de vision des couleurs
              à lire et à comprendre notre contenu.
            </li>
            <li>
              <strong>Texte alternatif pour les images :</strong>
              Toutes les images sur notre site ont un texte alternatif
              pour aider les utilisateurs qui utilisent des lecteurs
              d'écran ou qui ont désactivé les images.
            </li>
          </ul>

          <h2 className="h2Style">Non-conformité actuelle</h2>
          <p>
            Nous sommes conscients que certaines parties de notre site
            ne sont pas encore entièrement accessibles. Nous
            travaillons activement à résoudre ces problèmes. Si vous
            rencontrez des problèmes d'accessibilité sur notre site,
            veuillez nous contacter.
          </p>

          <h2 className="h2Style">Nous contacter</h2>
          <p>
            Si vous avez des questions ou des commentaires sur
            l'accessibilité de notre site, n'hésitez pas à nous
            contacter à contact@jobfeeling.fr
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
