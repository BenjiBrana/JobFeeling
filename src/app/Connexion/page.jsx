'use client';
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Connexion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="sectionPage">
      <h1 className="titleSectionPage">Connexion</h1>
      <div className="containerSectionPage">
        <form
          className="flex flex-col items-center mobile:w-full tablette:w-3/4 w-1/2 xl:w-1/3 tablette:h-full  lg:h-1/2 justify-evenly border border-borderColor dark:border-borderColorDark bg-secondary dark:bg-secondaryDark rounded text-textColor dark:text-textColorDark shadow shadow-backgroundDark dark:shadow-background"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="groupForm ">
            <label className="font-bold text-base" htmlFor="email">
              Saisissez votre email
            </label>
            <input
              className="inputForm"
              type="email"
              id="email"
              placeholder="Ex : johnDoe@gmail.com"
              name="Email"
              aria-label="Email"
              {...register('Email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
          </div>
          <div className="groupForm ">
            <label className="font-bold text-base" htmlFor="password">
              Saisissez votre mot de passe
            </label>
            <input
              className="inputForm"
              type="password"
              id="email"
              placeholder="Ex : Vo1ç1-Un_M0t-2pAsS"
              name="Password"
              aria-label="Password"
              {...register('Password', {
                required: true,
                pattern: '^[^\x00-\x1F\x7F&$%(){}[]<>?=#//]*$',
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
