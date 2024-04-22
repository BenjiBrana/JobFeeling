'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    { id: 'Historiques', name: 'Historiques' },
    { id: 'Notifications', name: 'Notifications' },
    { id: 'Messages', name: 'Messages' },
    { id: 'Profil', name: 'Profil' },
  ];

  return (
    <header className="flex items-center px-16 shadow-xl shadow-backgroundDark w-full justify-between tablette:px-8 mobile:px-1 relative border-b border-borderColor dark:border-borderColorDark  font-textFont text-textColor dark:text-textColorDark bg-secondary dark:bg-secondaryDark">
      <div className=" cursor-pointer transition-all hover:scale-110">
        <Link href="/">
          <Image
            className="my-1"
            src="/images/jobfeeling_mini.webp"
            alt="Logo JobFeeling"
            title="Logo officiel de JobFeeling"
            width={84}
            height={84}
          />
        </Link>
      </div>
      <nav
        className={`flex justify-between  items-start ${
          menuOpen
            ? 'bg-primary/90 z-30 w-full'
            : 'bg-transparent z-10'
        }`}
      >
        <ul
          className={`flex  ${
            menuOpen
              ? 'h-screen flex flex-col'
              : 'auto flex-row tablette:hidden'
          } items-center gap-6 w-full justify-evenly tablette:justify-center`}
        >
          {items.map((item) => (
            <li
              className={`itemMenu  ${menuOpen ? 'fade-out' : ''}`}
              key={item.id}
            >
              <Link href={`/${item.id}`} onClick={toggleMenu}>
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
                className="h-8 w-8 hover:bg-red-500/70 hover:border-black/50 hover:border-2 rounded-full p-1"
                src="/logo/close.svg"
                alt="Logo fermeture"
                title="Logo pour fermer le menu"
                width={30}
                height={30}
              />
              <div className="btnGroup">
                <button
                  className="buttonMode bg-blue-500/50"
                  id="nightModeBtn"
                >
                  <Image
                    className="moon h-5 w-5"
                    src="/logo/moon.svg"
                    alt="Logo dark mode"
                    title="Logo pour activer le dark mode"
                    width={30}
                    height={30}
                  />
                </button>
                <button
                  className="buttonMode bg-yellow-500/50"
                  id="dayModeBtn"
                >
                  <Image
                    className="sun  h-5 w-5"
                    src="/logo/sun.svg"
                    alt="Logo light mode"
                    title="Logo pour activer le light mode"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
            </>
          ) : (
            <Image
              id="menuIcon"
              className=" h-10 w-10 z-10 bg-primary/70 hover:bg-tertinary/70 dark:hover:bg-tertinaryDark/70 rounded-full p-1 shadow-lg shadow-black dark:shadow-white"
              src="/logo/burger_menu.svg"
              alt="Logo burger menu"
              title="Logo pour ouvrir le menu"
              width={30}
              height={30}
            />
          )}
        </div>
      </nav>
    </header>
  );
}