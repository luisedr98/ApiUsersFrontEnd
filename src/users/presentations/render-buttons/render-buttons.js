import userStore from "../../store/user-store";
import { renderTable } from "../render-table/render-table";
import { renderAddButton } from "../renderAddButton/renderAddButton";
import { renderModal } from "../render-modal/render-modal";

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
    labelCurrentPage.textContent = userStore.getCurrentPage();
    labelCurrentPage.classList.add('font-title', 'text-3xl', 'px-4');
    

    nextButton.addEventListener('click', async()=> {
        await userStore.loadNextPage();
        labelCurrentPage.textContent = userStore.getCurrentPage();
        element.innerHTML = '';
        renderTable(element); 
        renderButtons(element);
        renderAddButton(element);
    });

    previusButton.addEventListener('click', async()=>{
        await userStore.loadPreviousPage();
        labelCurrentPage.textContent = userStore.getCurrentPage();
        element.innerHTML = '';
        renderTable(element); 
        renderButtons(element);
        renderAddButton(element);
    });

    containerButton.append(previusButton, labelCurrentPage, nextButton);
    element.appendChild(containerButton);
}