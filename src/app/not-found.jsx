import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
export default function NotFound() {
  return (
    <>
      <section className="sectionPage">
        <h1 className="titleSectionPage">404 - Oups !</h1>
        <div className="w-full h-full my-12 flex flex-col justify-center gap-12 items-center pt-4 px-4 ">
          <p className="font-bodyFont text-2xl mobile:text-lg leading-10">
            "Oups ! Il semble que vous ayez postulé à une offre
            d'emploi qui n'existe pas... ou peut-être avez-vous
            simplement pris un mauvais tournant sur notre site. <br />
            Pas de soucis, il y a plein d'autres opportunités qui vous
            attendent. Essayez une autre route !"
          </p>
          <Image
            className="border shadow-xl rounded-full size-96 tablette:size-64"
            src="/images/img_404.webp"
            alt="Logo facil'iti"
            title="Facil'iti"
            width={300}
            height={300}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
