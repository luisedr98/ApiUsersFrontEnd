import userStore from "../../store/user-store";
import { renderTable } from "../render-table/render-table";
import { renderAddButton } from "../renderAddButton/renderAddButton";
import { renderModal } from "../render-modal/render-modal";
import { initApp } from "../../uses-cases/init-app";

/**
 * 
 * @param {HTMLDivElement} element 
*/
export const renderButtons = (element) => {
    const containerButton = document.createElement('div');
    containerButton.classList.add("flex", "justify-center", "font-bold", "font-body", "text-white", "mt-5", "gap-3", "text-xl", "items-center");
    
    const previusButton = document.createElement('button');
    previusButton.classList.add('bg-gray-900', 'py-1', 'rounded', 'px-4', 'flex', 'justify-center', 'items-center', 'hover:bg-black');
    previusButton.textContent = '< Prev';

    const nextButton = document.createElement('button');
    nextButton.classList.add('bg-gray-900', 'py-1', 'rounded', 'px-4', 'flex', 'justify-center', 'items-center', 'hover:bg-black');
    nextButton.textContent = 'Next >';
    
    const labelCurrentPage = document.createElement('p');
    labelCurrentPage.id = 'current-page';
    labelCurrentPage.classList.add('font-title', 'text-3xl', 'px-4');
    labelCurrentPage.textContent = (userStore.getCurrentPage() === 0) ? '1' : userStore.getCurrentPage();
    
    
    nextButton.addEventListener('click', async()=> {
        await initApp(element, async()=> {
            await userStore.loadNextPage();
        });
        labelCurrentPage.textContent = userStore.getCurrentPage();
    });
    
    previusButton.addEventListener('click', async()=>{
        await initApp(element, async()=> {
            await userStore.loadPreviousPage();
        });
        labelCurrentPage.textContent = userStore.getCurrentPage();
    });
    
    containerButton.append(previusButton, labelCurrentPage, nextButton);
    element.appendChild(containerButton);
}