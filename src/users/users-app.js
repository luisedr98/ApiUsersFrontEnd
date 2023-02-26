import userStore from "./store/user-store"
import { initApp } from "./uses-cases/init-app"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async (element) => {
    await initApp(element, async()=>{
        await userStore.loadNextPage();
    });
   
}