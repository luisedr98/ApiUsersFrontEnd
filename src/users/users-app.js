import userStore from "./store/user-store"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async( element ) => {
    element.classList.add("text-body", "text-2xl", "font-bold", "text-center" , "text-white");
    element.textContent = "Cargando...";
    await userStore.loadNextPage();
    
}