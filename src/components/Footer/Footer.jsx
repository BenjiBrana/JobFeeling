import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
  const liensReseauxSociaux = [
    {
      id: 'rs1',
      title: 'Lien Linkedin',
      alt: 'Logo Linkedin',
      lien: 'logo_linkedin.webp',
      url: 'https://www.linkedin.com/',
    },
    {
      id: 'rs2',
      title: 'Lien Facebook',
      alt: 'Logo Facebook',
      lien: 'logo_fb.webp',
      url: 'https://www.facebook.com/',
    },
    {
      id: 'rs3',
      title: 'Lien X',
      alt: 'Logo X',
      lien: 'logo_x.webp',
      url: 'https://twitter.com/',
    },
    {
      id: 'rs4',
      title: 'Lien Youtube',
      alt: 'Logo Youtube',
      lien: 'logo_ytb.webp',
      url: 'https://www.youtube.com/?hl=FR',
    },
  ];
  return (
    <footer class="bg-secondary dark:bg-secondaryDark text-textColor dark:text-textColorDark px-20 flex tablette:flex-col tablette:items-center justify-between p-5 mt-8 tablette:gap-8">
      <div class="flex flex-col items-center gap-4 justify-center tablette:order-4">
        <h2 className="font-bold text-2xl">JobFeeling</h2>
        <Image
          id="logoFooter"
          className=" border shadow shadow-backgroundDark hover:border-2 rounded-full"
          src="/images/jobfeeling.webp"
          alt="Logo JobFeeling"
          title="Logo officiel de JobFeeling "
          width={104}
          height={104}
        />
        <h3 className="hover:font-bold">©JobFeeling | 2024</h3>
        <h4 className="hover:font-bold">
          <a
            href="https://branabenjamin.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site réalisé par Brana Benjamin
          </a>
        </h4>
      </div>
      <div class="flex flex-col tablette:flex-row mobile:flex-col gap-4 justify-around items-start tablette:order-3">
        <a className="hover:font-bold" href="/mentions-legales">
          Mentions légales
        </a>
        <a className="hover:font-bold" href="/confidentialite">
          Confidentialité
        </a>
        <a className="hover:font-bold" href="/cookies">
          Cookies
        </a>
        <a className="hover:font-bold" href="/plan-du-site">
          Plan du site
        </a>
      </div>
      <div className="flex flex-col justify-start mt-4 gap-4 tablette:order-2">
        <a
          href="#"
          className="flex flex-row items-center gap-4 hover:font-bold"
        >
          <Image
            className="imgCircle"
            src="/logo/logo_accessibilite.webp"
            alt="Logo accessibilité"
            title="Accessibility"
            width={32}
            height={32}
          />
          <p>Accessibilité : non conforme</p>
        </a>
        <a
          href="#"
          className="flex flex-row items-center gap-4 hover:font-bold"
        >
          <Image
            className="imgCircle"
            src="/logo/logo_faciliti.webp"
            alt="Logo facil'iti"
            title="Facil'iti"
            width={32}
            height={32}
          />
          <p> Facil'iti</p>
        </a>
      </div>
      <div class="flex flex-col items-center gap-4 tablette:order-1">
        <h2 className="font-bold text-2xl text-center">
          Suivez-nous
        </h2>
        <div className="flex mobile:flex-wrap justify-center items-center lg:flex-row gap-4">
          {liensReseauxSociaux.map((lienReseauSocial) => (
            <div key={lienReseauSocial.id}>
              <Link
                className="cursor-pointer"
                target="_blank"
                href={lienReseauSocial.url}
              >
                <Image
                  className="imgCircle h-12 w-12 hover:scale-110"
                  src={`/logo/${lienReseauSocial.lien}`}
                  alt={lienReseauSocial.alt}
                  title={lienReseauSocial.title}
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
