'use client';
import React from 'react';
import Image from 'next/image';

export default function Notifications({ closeNotification }) {
  const notifications = [
    {
      id: 'notifications1',
      titleAnnonce: 'Nouvelle annonce ',
      dateAnnonce: '29/04/2024',
      heureAnnonce: '16h33',
      contenuAnnonce:
        'Une nouvelle annonce correspondante à vos critères est disponible',
    },
    {
      id: 'notifications2',
      titleAnnonce: 'Nouveau message  ',
      dateAnnonce: '30/04/2024',
      heureAnnonce: '8h10',
      contenuAnnonce:
        'Un nouveau message de Breton Ludovic est disponible',
    },
  ];
  return (
    <section className="fixed flex flex-col text-textColor dark:text-textColorDark top-0 justify-start items-center left-0 z-50 w-full h-full bg-background dark:bg-backgroundDark">
      <Image
        onClick={closeNotification}
        id="closeIcon"
        className="absolute top-1 right-1 h-8 w-8 bg-red-500/70 hover:border-black/50 hover:border-2 rounded-full p-1"
        src="/logo/close.svg"
        alt="Logo supprimer"
        title="Logo pour supprimer la notification"
        width={30}
        height={30}
      />
      <>
        <article className=" flex flex-col items-center w-full h-screen tablette:px-2">
          <h2 className="titleSectionPage">Notification</h2>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="card borderShadow flex flex-row justify-between items-center tablette:w-full border my-2"
            >
              <div>
                <h3>{notification.titleAnnonce}</h3>
                <p>{notification.contenuAnnonce}</p>
                <span>
                  {`${notification.dateAnnonce} à
                ${notification.heureAnnonce}`}
                </span>
              </div>
              <Image
                className="dark:shadow dark:bg-background dark:rounded-full dark:p-2 "
                id="closeIcon"
                src="/logo/close.svg"
                alt="Logo fermeture"
                title="Logo pour fermer le menu"
                width={26}
                height={26}
              />
            </div>
          ))}
        </article>
        ;
      </>
    </section>
  );
}
