import { showModal } from "../render-modal/render-modal";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element) => {
    const divAddButton = document.createElement('div');
    divAddButton.classList.add('flex', 'justify-end', 'mt-3');

    const addButton = document.createElement('button');
    addButton.title = "Add an user";
    addButton.textContent = 'Add';
    addButton.classList.add("bg-cyan-700", "rounded-xl", "py-2", "px-4","font-body","font-bold", "text-white", "flex", "justify-center", "items-center", "gap-2");
    
    const iconAdd = document.createElement('img');
    iconAdd.src = '/add-user.svg';
    iconAdd.alt = 'add-user';
    
    addButton.append(iconAdd);
    divAddButton.append(addButton);

    addButton.addEventListener('click', ()=>{
        showModal();
    })

    element.append(divAddButton);
} 