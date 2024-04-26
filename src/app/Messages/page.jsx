'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Messages() {
  const conversations = [
    {
      id: 'conversation1',
      conversationUrl: '/images/img_profil.webp',
      titleImgConversation: 'conversation 1',
      utilisateurLastName: 'Brana',
      utilisateurFirstName: 'Benjamin',
      altImgConversation: 'Photo de la conversation 1',
      dateConversation: '25/04/2024 - 12h05',
    },
    {
      id: 'conversation2',
      conversationUrl: '/images/img_profil.webp',
      titleImgConversation: 'conversation 2',
      utilisateurLastName: 'Breton LudovicBreton',
      utilisateurFirstName: 'Ludovic',
      altImgConversation: 'Photo de la conversation 2',
      dateConversation: '25/04/2024 - 12h16',
    },
    {
      id: 'conversation3',
      conversationUrl: '/images/img_profil.webp',
      titleImgConversation: 'conversation 3',
      utilisateurLastName: 'Bra',
      utilisateurFirstName: 'Ben',
      altImgConversation: 'Photo de la conversation 3',
      dateConversation: '25/04/2024 - 12h05',
    },
    {
      id: 'conversation4',
      conversationUrl: '/images/img_profil.webp',
      titleImgConversation: 'conversation 4',
      utilisateurLastName: 'Breton',
      utilisateurFirstName: 'Ludovic',
      altImgConversation: 'Photo de la conversation 4',
      dateConversation: '25/04/2024 - 12h16',
    },
    {
      id: 'conversation5',
      conversationUrl: '/images/img_profil.webp',
      titleImgConversation: 'conversation 5',
      utilisateurLastName: 'Brana',
      utilisateurFirstName: 'Benjamin',
      altImgConversation: 'Photo de la conversation 5',
      dateConversation: '25/04/2024 - 12h05',
    },
    {
      id: 'conversation6',
      conversationUrl: '/images/img_profil.webp',
      titleImgConversation: 'conversation 6',
      utilisateurLastName: 'Breton',
      utilisateurFirstName: 'Ludovic',
      dateConversation: '25/04/2024 - 12h16',
    },
  ];
  const messages = [
    {
      id: 'message1',
      messageUrl: '/images/img_profil.webp',
      titleImg: 'photo de profil 1',
      altImg: "Photo de profil de l'utilisateur 1",
      dateMessage: 'Le 25/04/2024 à 14h38',
      class: 'items-start',
      descriptionMessage:
        "Bonjour Benjamin c'est Ludovic, je suis interessé par votre profil.",
    },
    {
      id: 'message2',
      messageUrl: '/images/img_profil.webp',
      titleImg: 'photo de profil 2',
      altImg: "Photo de profil de l'utilisateur 2",
      dateMessage: 'Le 25/04/2024 à 14h39',
      class: 'items-end',
      descriptionMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto? Laudantium fuga perspiciatis aperiam error rerum culpa architecto corporis sequi quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,architecto? Laudantium fuga perspiciatis aperiamerror rerum culpa architecto corporis sequi quasi! Mollitia non illo quaerat consequuntur unde, suscipit praesentium tempora. Iure quis numquam consequatur cum, voluptates hic distinctio ut voluptatum molestias, sequi eos excepturi quaerat quae vel ipsam harum nemo! Praesentium, dolor exercitationem accusamus quibusdam nam maiores perferendis odio illum? Sequi quos ea atque sint odio voluptates voluptatum ex unde doloremque labore possimus commodi totam inventore, rem minus mollitia. Nihil commodi vero facere perspiciatis nam unde a porro accusamus illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto? Laudantium fuga perspiciat aperiam error rerum culpa architecto corporis sequi quasi! Mollitia non illo quaerat consequuntur unde, suscipit praesentium tempora. Iure quis numquam consequatur cum, voluptates hic distinctio ut voluptatum molestias, sequi eos excepturi quaerat quae vel ipsam harum nemo! Praesentium, dolor exercitationem accusamus quibusdam nam maiores perferendis odio illum? Sequi quos ea atque sint odio voluptates voluptatum ex unde doloremque labore possimus commodi totam inventore, rem minus mollitia. Nihil commodi vero facere perspiciat nam unde a porro accusamus illo!',
    },
    {
      id: 'message3',
      messageUrl: '/images/img_profil.webp',
      titleImg: 'photo de profil 3',
      altImg: "Photo de profil de l'utilisateur 3",
      dateMessage: 'Le 25/04/2024 à 14h42',
      class: 'items-start',
      descriptionMessage:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto? Laudantium fuga perspiciatis aperiam error rerum culpa architecto corporis sequi quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,architecto? Laudantium fuga perspiciatis aperiamerror rerum culpa architecto corporis sequi quasi! Mollitia non illo quaerat consequuntur unde, suscipit praesentium tempora. Iure quis numquam consequatur cum, voluptates hic distinctio ut voluptatum molestias, sequi eos excepturi quaerat quae vel ipsam harum nemo! Praesentium, dolor exercitationem accusamus quibusdam nam maiores perferendis odio illum? Sequi quos ea atque sint odio voluptates voluptatum ex unde doloremque labore possimus commodi totam inventore, rem minus mollitia. Nihil commodi vero facere perspiciatis nam unde a porro accusamus illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto? Laudantium fuga perspiciat aperiam error rerum culpa architecto corporis sequi quasi! Mollitia non illo quaerat consequuntur unde, suscipit praesentium tempora. Iure quis numquam consequatur cum, voluptates hic distinctio ut voluptatum molestias, sequi eos excepturi quaerat quae vel ipsam harum nemo! Praesentium, dolor exercitationem accusamus quibusdam nam maiores perferendis odio illum? Sequi quos ea atque sint odio voluptates voluptatum ex unde doloremque labore possimus commodi totam inventore, rem minus mollitia. Nihil commodi vero facere perspiciat nam unde a porro accusamus illo!',
    },
    {
      id: 'message4',
      messageUrl: '/images/img_profil.webp',
      titleImg: 'photo de profil 4',
      altImg: "Photo de profil de l'utilisateur 4",
      dateMessage: 'Le 25/04/2024 à 14h42',
      class: 'items-end',
      descriptionMessage:
        "Bonjour Benjamin c'est Ludovic, je suis interessé par votre profil. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto? Laudantium fuga perspiciatis aperiam error rerum culpa architecto corporis sequi quasi!",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleTextareaClick = () => {
    setExpanded(true);
  };

  const handleTextareaBlur = () => {
    setExpanded(false);
  };
  return (
    <section className="sectionPage">
      <h1 className="titleSectionPage">Mes messages</h1>
      <div className="w-full tablette:h-1/6 h-full  flex flex-col tablette:items-center lg:flex-row items-start pt-4 px-4 tablette:px-0 gap-2">
        <aside className=" tablette:w-full w-2/12 border bg-secondary dark:bg-secondaryDark text-textColor dark:text-textColorDark borderShadow tablette:h-1/6 h-screen flex flex-col">
          <div className="tablette:px-1 px-4 py-2 flex flex-col gap-4 items-center text-center justify-center borderShadow">
            <label htmlFor="searchConversation">
              Rechercher une conversation
            </label>
            <input
              type="search"
              id="searchConversation"
              className="text-center tablette:p-1 p-2 tablette:w-1/2 mobile:w-3/4 w-3/4 borderShadow"
              placeholder="Recherche . . ."
            />
          </div>
          <div className="cards overflow-y-auto borderShadow flex flex-col tablette:flex-row gap-2 w-full tablette:h-1/6 h-screen p-2">
            {conversations.map((conversation, index) => (
              <div key={index} className="conversations borderShadow">
                <Image
                  className="rounded shadow shadow-backgroundDark xl:size-20 lg:size-16 dark:shadow-background border  border-borderColor dark:border-borderColorDark"
                  src={conversation.conversationUrl}
                  alt={conversation.altImgConversation}
                  title={conversation.titleImgConversation}
                  width={64}
                  height={64}
                />
                <div className="flex flex-col mx-auto tablette:px-2">
                  <span className="xl:text-base text-sm font-bold">
                    {`${
                      conversation.utilisateurLastName.length > 10
                        ? conversation.utilisateurLastName.substring(
                            0,
                            10
                          ) + '...'
                        : conversation.utilisateurLastName
                    } ${conversation.utilisateurFirstName}`}
                  </span>
                  <span className="tablette:hidden text-sm flex flex-col text-start h-full justify-center">
                    <span>Dernier message:</span>
                    <span className="lg:text-xs xl:text-sm">
                      {conversation.dateConversation}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
        <section className="relative tablette:w-full w-10/12 border borderShadow h-screen flex flex-col  px-4 pt-4 bg-secondary dark:bg-secondaryDark">
          <span className=" font-titleFont font-bold mb-4 border-b shadow-b shadow-backgroundDark dark:shadow-background border-borderColorDark dark:border-borderColor">
            Brana Benjamin
          </span>
          <div className="flex flex-col overflow-y-auto w-full font-textFont text-lg">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`my-4 flex flex-col h-auto w-full ${message.class} `}
              >
                <div className="message ">
                  <Image
                    className="rounded shadow size-20 shadow-backgroundDark dark:shadow-background border  border-borderColor dark:border-borderColorDark"
                    src={message.messageUrl}
                    alt={message.altImg}
                    title={message.titleImg}
                    width={64}
                    height={64}
                  />
                  <p className="p-4 flex-1">
                    {message.descriptionMessage}
                  </p>
                </div>
                <span className="mt-2"></span>
              </div>
            ))}
          </div>
          <div className="relative flex flex-row mb-1 border-t border-b-0 shadow shadow-backgroundDark dark:shadow-background  rounded border-borderColorDark dark:border-borderColor">
            <textarea
              className={`w-full  py-2 pl-2 ${
                expanded ? 'h-32' : 'h-16'
              }`}
              name="message"
              id="message"
              placeholder="Saisir votre message . . ."
              onClick={handleTextareaClick}
              onBlur={handleTextareaBlur}
            ></textarea>
            <Image
              className="z-10 bottom-1 right-1 absolute rounded shadow size-12 shadow-backgroundDark dark:shadow-background border bg-background  border-borderColor dark:border-borderColorDark"
              src="/logo/chevron_up.svg"
              alt="Logo facil'iti"
              title="Facil'iti"
              width={32}
              height={32}
            />
          </div>
        </section>
      </div>
    </section>
  );
}
