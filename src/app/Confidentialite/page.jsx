import React from 'react';
import Footer from '@/components/Footer/Footer';
export default function Confidentialite() {
  return (
    <>
      <section className="relative sectionPage items-center">
        <h1 className="titleSectionPage">
          Politique de Confidentialité
        </h1>
        <div className="w-1/2 mobile:w-3/4 flex flex-col gap-4 px-2 leading-10 mt-10 items-start">
          <p>
            Chez JobFeeling, nous respectons votre vie privée et nous
            nous engageons à la protéger. <br />
            Cette politique de confidentialité explique comment nous
            collectons, utilisons et protégeons vos informations
            personnelles lorsque vous utilisez notre site web.
          </p>

          <h2 className="h2Style"> Collecte d'informations</h2>
          <p>
            Nous collectons des informations lorsque vous vous
            inscrivez sur notre site, lorsque vous vous connectez à
            votre compte, lorsque vous postulez à des offres d'emploi,
            et/ou lorsque vous vous déconnectez. Les informations
            collectées incluent votre nom, votre adresse e-mail, votre
            numéro de téléphone, et votre CV.
          </p>

          <h2 className="h2Style">Utilisation des informations</h2>
          <p>
            Nous utilisons les informations que nous collectons pour :
          </p>
          <ul>
            <li>
              Personnaliser votre expérience et répondre à vos besoins
              individuels
            </li>
            <li>Fournir un contenu publicitaire personnalisé</li>
            <li>Améliorer notre site web</li>
            <li>
              Améliorer le service client et vos besoins de prise en
              charge
            </li>
            <li>Vous contacter par e-mail</li>
            <li>
              Administrer un concours, une promotion, ou une enquête
            </li>
          </ul>

          <h2 className="h2Style">
            Confidentialité du commerce en ligne
          </h2>
          <p>
            Nous sommes les seuls propriétaires des informations
            collectées sur ce site. Vos informations personnelles ne
            seront pas vendues, échangées, transférées, ou données à
            une autre entreprise pour n’importe quelle raison, sans
            votre consentement, en dehors de ce qui est nécessaire
            pour répondre à une demande et/ou une transaction, comme
            par exemple pour expédier une commande.
          </p>

          <h2 className="h2Style">Divulgation à des tiers</h2>
          <p>
            Nous ne vendons, n'échangeons et ne transférons pas vos
            informations personnelles identifiables à des tiers. Cela
            ne comprend pas les tierces parties de confiance qui nous
            aident à exploiter notre site web ou à mener nos affaires,
            tant que ces parties conviennent de garder ces
            informations confidentielles.
          </p>

          <h2 className="h2Style">Protection des informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité
            pour préserver la sécurité de vos informations
            personnelles. Nous utilisons un cryptage à la pointe de la
            technologie pour protéger les informations sensibles
            transmises en ligne. Nous protégeons également vos
            informations hors ligne. Seuls les employés qui ont besoin
            d'effectuer un travail spécifique (par exemple, la
            facturation ou le service à la clientèle) ont accès aux
            informations personnelles identifiables. Les ordinateurs
            et serveurs utilisés pour stocker des informations
            personnelles identifiables sont conservés dans un
            environnement sécurisé.
          </p>

          <h2 className="h2Style">
            Est-ce que nous utilisons des cookies ?
          </h2>
          <p>
            Oui. Nos cookies améliorent l'accès à notre site et
            identifient les visiteurs réguliers. En outre, nos cookies
            améliorent l'expérience de l'utilisateur en suivant et en
            ciblant ses intérêts. Cependant, cette utilisation des
            cookies n'est en aucune façon liée à des informations
            personnelles identifiables sur notre site.
          </p>

          <h2 className="h2Style">Consentement</h2>
          <p>
            En utilisant notre site, vous consentez à notre politique
            de confidentialité.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
