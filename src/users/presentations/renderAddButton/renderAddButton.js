import { showModal } from "../render-modal/render-modal";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element) => {
    const divAddButton = document.createElement('div');
    divAddButton.classList.add('flex', 'justify-end', 'max-w-5xl');
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.classList.add("bg-blue-900", "rounded-xl", "py-2", "px-4", "font-bold", "text-white");
    addButton.title = "Add user";
    divAddButton.append(addButton);

    divAddButton.addEventListener('click', ()=>{
        showModal();
    })

    element.append(divAddButton);
} 