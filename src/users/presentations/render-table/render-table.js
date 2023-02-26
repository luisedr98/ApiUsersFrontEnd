import userStore from "../../store/user-store";
import { deleteUserById } from "../../uses-cases/delete-user-by-id";
import { initApp } from "../../uses-cases/init-app";
import { showModal } from "../render-modal/render-modal";



/**
 * @returns {HTMLTableElement} 
 */
const createTable = () => {
    
    const table = document.createElement('table');
    table.classList.add('mx-auto', 'font-body', 'text-md', 'text-white', 'border-separate', 'shadow-xl', 'border', 'border-gray-900', 'table-fixed');
    const tHead = document.createElement('thead');
    tHead.classList.add('bg-gray-900');
    const tBody = document.createElement('tbody');
    tBody.classList.add("bg-gray-800");
    tHead.innerHTML = `
        <tr>
            <th class="py-1">#ID</th>
            <th class="py-1">First name</th>
            <th class="py-1">Last name</th>
            <th class="py-1">Is active</th>
            <th class="py-1">Balance</th>
            <th class="py-1">Gender</th>
            <th class="py-1">Options</th>
        </tr>
    `;
    tBody.innerHTML = '';
    table.append(tHead, tBody);
    return table;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    
    const table = createTable();
    
    
    const users = userStore.getUsers();
    const tableBody = table.querySelector('tbody');
    let contentBody = '';
    
    users.forEach( ({id, isActive, balance, firstName, lastName, gender}) => {
        contentBody += `
        <tr class="text-center">
        <td class="py-1">${id}</td>
        <td class="py-1 border-gray-900 border">${firstName}</td>
        <td class="py-1 border-gray-900 border">${lastName}</td>
        <td class="py-1 border-gray-900 border">${isActive}</td>
        <td class="py-1 border-gray-900 border">${balance}</td>
        <td class="py-1 border-gray-900 border">${gender}</td>
        <td class="py-1 border-gray-900 border">
        <a data-id=${id} class="select-user" href="#">Selected</a> | 
        <a data-id=${id} class="delete-user" href="#">Delete</a></td>
        </tr>
        `
    });
    
    tableBody.innerHTML = contentBody;
    table.addEventListener('click', tableSelectListener);
    table.addEventListener('click', tableDeleteListener)
    element.appendChild(table);
    
}


/**
 * 
 * @param {MouseEvent} e 
 */
const tableSelectListener = (e) => {
    const element = e.target.closest('.select-user');
    if (!element) return;
    
    const id = element.dataset.id;
    showModal(id);
}

const tableDeleteListener = async(e) => {
    const element = e.target.closest('.delete-user');
    if (!element) return;
    
    const id = element.dataset.id;
    try {
        await deleteUserById(id);
        initApp(document.querySelector('#app'), async()=>{
            await userStore.reloadPage();
        })
        document.querySelector('#current-page').textContent = userStore.getCurrentPage();
    
    } catch (error) {
        alert('Error al eliminar');
        console.log(error)
    }
}