'use client';
import React, { useEffect } from 'react';
import SectionPrincipal from '@/components/SectionPrincipal/SectionPrincipal';
import ArticleAccueil from '@/components/ArticleAccueil/ArticleAccueil';
import Footer from '@/components/Footer/Footer';

export default function Page({ children }) {
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget
        .querySelector('a')
        .getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const btnTop = document.querySelector('.arrowTop');
    if (btnTop) {
      btnTop.addEventListener('click', handleClick);
    }

    return () => {
      if (btnTop) {
        btnTop.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <>
      <main className="w-full flex flex-col min-h-screen justify-between">
        <SectionPrincipal />
        <ArticleAccueil />
        {children}
      </main>
      <Footer />
    </>
  );
}
