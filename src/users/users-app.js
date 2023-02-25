import { renderButtons } from "./presentations/render-buttons/render-buttons";
import { renderModal } from "./presentations/render-modal/render-modal";
import { renderTable } from "./presentations/render-table/render-table";
import { renderAddButton } from "./presentations/renderAddButton/renderAddButton";
import userStore from "./store/user-store"
import { saveUser } from "./uses-cases/save-user";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async (element) => {
    await userStore.loadNextPage();
    element.innerHTML = '';
    renderTable(element);
    renderButtons(element);
    renderModal(element, async(userLike)=>{
        const user = await saveUser(userLike);
        userStore.onUserChanged(user);
        renderTable(element);
    });
    renderAddButton(element);
}