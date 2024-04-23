'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
export default function Inscription() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <section className="sectionPage">
      <h1 className="titleSectionPage">Inscription</h1>
      <div className="containerSectionPage xl:scale-90">
        <form
          className="flex flex-col items-center mobile:w-full tablette:w-3/4 w-1/2  h-full justify-evenly border border-borderColor dark:border-borderColorDark bg-secondary dark:bg-secondaryDark rounded text-textColor dark:text-textColorDark shadow shadow-backgroundDark dark:shadow-background"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="groupForm ">
            <label
              className="font-bold text-base"
              htmlFor="firstname"
            >
              Saisissez votre prénom
            </label>
            <input
              className="inputForm"
              id="firstname"
              type="text"
              placeholder="Ex : John"
              {...register('Prenom', { required: true })}
            />
          </div>
          <div className="groupForm">
            <label className="font-bold text-base" htmlFor="lastname">
              Saisissez votre nom
            </label>
            <input
              className="inputForm"
              id="lastname"
              type="text"
              placeholder="Ex : Doe"
              {...register('Nom', { required: true })}
            />
          </div>
          <div className="groupForm">
            <label className="font-bold text-base" htmlFor="email">
              Saisissez votre email
            </label>
            <input
              className="inputForm"
              id="email"
              type="email"
              placeholder="Ex : johnDoe@gmail.com"
              {...register('Email', {
                required: true,
                pattern: '//^S+@S+$//i',
              })}
            />
          </div>
          <div className="groupForm">
            <label className="font-bold text-base" htmlFor="password">
              Saisissez votre mot de passe
            </label>
            <input
              className="inputForm"
              id="password"
              type="password"
              placeholder="Ex : Vo1ç1-Un_M0t-2pAsS"
              {...register('Password', {
                required: true,
                min: 8,
                pattern: '/^\x00-\x1F\x7F&$%(){}[]<>?=#///i',
              })}
            />
          </div>
          <div className="groupForm">
            <label className="font-bold text-base" htmlFor="tel">
              Saisissez votre numéro de téléphone
            </label>
            <input
              id="tel"
              className="inputForm"
              type="tel"
              placeholder="Ex : 0669134016"
              {...register('Numéro de mobile', {
                min: 10,
                maxLength: 12,
              })}
            />
          </div>
          <input
            type="submit"
            value="Connexion"
            className="bg-tertinary tablette:mb-8 mt-8 w-3/4 dark:bg-tertinaryDark text-background dark:text-textColor hover:text-lg hover:scale-100 scale-95 font-bold p-4 rounded  cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
}
