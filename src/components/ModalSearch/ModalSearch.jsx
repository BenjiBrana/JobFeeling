export default function ModalSearch(
  { closeModal },
  { handleSubmit }
) {
  return (
    <div className="fixed flex flex-col text-textColor dark:text-textColorDark top-0 justify-start items-center left-0 z-50 w-full h-full bg-background dark:bg-backgroundDark">
      <button
        className="w-full py-2  bg-background hover:bg-backgroundDark dark:bg-backgroundDark dark:hover:bg-background text-textColor hover:text-textColorDark dark:text-textColorDark dark:hover:text-textColor font-bold border-b border-borderColor dark:border-borderColorDark"
        onClick={closeModal}
      >
        Fermer
      </button>

      <div className="flex flex-col justify-start w-full h-screen">
        <form
          action="/submit_search"
          method="post"
          onSubmit={handleSubmit}
          className="flex flex-col  w-full justify-between items-center bg-secondary dark:bg-secondaryDark"
        >
          <div className="flex w-full">
            <div className="groupModal ">
              <label className="pl-2" for="metier">
                Métier :{' '}
              </label>

              <input
                className="inputStyle"
                type="search"
                id="metier"
                name="metier"
                aria-label="Métier"
                placeholder="Ex : Développeur web"
                required
              />
            </div>
            <div className="groupModal ">
              <label className="pl-2" for="lieu">
                Lieu :{' '}
              </label>

              <input
                className="inputStyle"
                type="search"
                id="lieu"
                name="lieu"
                aria-label="Lieu"
                placeholder="Ex : Angoulême"
                required
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 w-full bg-background dark:bg-backgroundDark">
            <h2 className="text-center border-b py-2 text-xs">
              Résultat de votre recherche :
            </h2>
          </div>
          <div className="flex absolute bottom-0  w-full ">
            <input
              className="border cursor-pointer text-center font-bold text-textColor border-borderColor dark:border-borderColorDark mt-2 h-12 w-full rounded-t-md hover:border-borderColorDark dark:hover:border-borderColor active:border-borderColorDark bg-orange hover:text-lg"
              type="button"
              id="afficher"
              name="afficher"
              aria-label="afficher"
              value="Afficher"
              required
              onSubmit={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
