'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Notifications from '@/components/Notifications/Notifications';

export default function Header() {
  /* indique si menu ouvert (fermer par defaut)*/
  const [menuOpen, setMenuOpen] = useState(false);
  /* Si élément cliquer, défilement jusqu'à l'encre cible */
  function handleMenuItemClick(targetId) {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      toggleMenu();
    }
  }
  /* Empeche le défilement si le menu est ouvert */
  function toggleMenu() {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
  /* Gestionnaire d'évenement au clique sur un élément du menu */
  useEffect(() => {
    const itemMenus = document.querySelectorAll('.itemMenu');

    function handleClick(event) {
      const targetId = event.currentTarget
        .querySelector('a')
        .getAttribute('href');
      handleMenuItemClick(targetId);
      toggleMenu();
    }

    itemMenus.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      itemMenus.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const items = [
    { id: 'Annonces', name: 'Annonces' },
    { id: 'Messages', name: 'Messages' },
    { id: 'Profil', name: 'Profil' },
  ];
  /* Gestion ouverture/fermeture notification*/
  const [showNotifications, setShowNotifications] = useState(false);
  function toggleNotification() {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }
  const closeNotification = () => {
    setShowNotifications(false);
    document.body.classList.remove('overflow-hidden');
  };
  return (
    <header
      className={`flex items-center px-16  shadow shadow-backgroundDark w-full justify-between tablette:px-8 mobile:px-1 relative border-b border-borderColor dark:border-borderColorDark  font-textFont text-textColor dark:text-textColorDark bg-secondary dark:bg-secondaryDark ${
        menuOpen
          ? ' flex-col items-center justify-center mobile:pt-4'
          : 'flex-row '
      }`}
    >
      <div className="flex gap-4 ">
        <Link
          className="cursor-pointer transition-all hover:scale-105"
          href="/"
        >
          <Image
            className={`my-1 ${menuOpen ? 'auto ' : 'h-16 w-16 '}`}
            src="/images/jobfeeling_mini.webp"
            alt="Logo JobFeeling"
            title="Logo officiel de JobFeeling"
            width={84}
            height={84}
          />
        </Link>
        <button
          onClick={toggleNotification}
          className="cursor-pointer transition-all hover:scale-105"
          type="button"
        >
          <Image
            id="menuIcon"
            className=" h-10 w-10 dark:bg-textColorDark hover:bg-background rounded-full p-1 shadow-md shadow-black dark:shadow-white"
            src="/logo/notification.svg"
            alt="Notification"
            title="Logo pour les notifications"
            width={30}
            height={30}
          />
        </button>
      </div>
      <nav
        className={`flex justify-between  items-start ${
          menuOpen
            ? 'bg-primary/90 z-30 w-full flex-wrap'
            : 'bg-transparent z-10'
        }`}
      >
        <ul
          className={`flex  ${
            menuOpen
              ? 'h-screen w-full  flex flex-col'
              : 'auto flex-row tablette:hidden'
          } items-center gap-6 w-full justify-evenly tablette:justify-center`}
        >
          {items.map((item) => (
            <li
              className={`itemMenu  ${menuOpen ? 'fade-out' : ''}`}
              key={item.id}
            >
              <Link
                className="p-4"
                href={`/${item.id}`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="h-12 w-12 cursor-pointer justify-center items-center hidden tablette:flex mr-2 mobile:mr-1"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <>
              <Image
                id="closeIcon"
                className="absolute top-1 right-1 h-8 w-8 bg-red-500/70 hover:border-black/50 hover:border-2 rounded-full p-1"
                src="/logo/close.svg"
                alt="Logo fermeture"
                title="Logo pour fermer le menu"
                width={30}
                height={30}
              />
            </>
          ) : (
            <svg
              id="menuIcon"
              className=" h-10 w-10 z-10 bg-background/70  hover:bg-tertinary/70 dark:hover:bg-tertinaryDark/70 rounded-full p-1 shadow-md shadow-black dark:shadow-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          )}
        </div>
      </nav>
      {showNotifications && (
        <Notifications closeNotification={closeNotification} />
      )}
    </header>
  );
}
