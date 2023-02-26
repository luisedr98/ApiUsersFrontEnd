import { saveUser } from "../uses-cases/save-user";
import { renderButtons } from "../presentations/render-buttons/render-buttons";
import { renderModal } from "../presentations/render-modal/render-modal";
import { renderTable } from "../presentations/render-table/render-table";
import { renderAddButton } from "../presentations/renderAddButton/renderAddButton";
import userStore from "../store/user-store";


export const initApp = async(element, callback = null) => {
    
    if(!callback)
        throw new Error(`callback is required`);
    
    await callback();

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