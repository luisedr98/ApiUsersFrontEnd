import userStore from "../../store/user-store";
import { deleteUserById } from "../../uses-cases/delete-user-by-id";
import { initApp } from "../../uses-cases/init-app";
import { showModal } from "../render-modal/render-modal";



/**
 * @returns {HTMLTableElement} 
 */
const createTable = () => {
    
    const table = document.createElement('table');
    table.classList.add('mx-auto', 'font-body', 'text-md', 'shadow-xl');
    const tHead = document.createElement('thead');
    tHead.classList.add('bg-cyan-700', 'text-white', 'border', 'border-cyan-700');
    const tBody = document.createElement('tbody');
    tBody.classList.add("bg-white");
    tHead.innerHTML = `
        <tr>
            <th class="p-1 px-5">#ID</th>
            <th class="p-1 px-5">First name</th>
            <th class="p-1 px-5">Last name</th>
            <th class="p-1 px-5">Is active</th>
            <th class="p-1 px-5">Balance</th>
            <th class="p-1 px-5">Gender</th>
            <th class="p-1 px-5">Options</th>
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
        <td class="p-1 border border-cyan-700">${id}</td>
        <td class="p-1 border border-cyan-700">${firstName}</td>
        <td class="p-1 border border-cyan-700">${lastName}</td>
        <td class="p-1 border border-cyan-700">${isActive}</td>
        <td class="p-1 border border-cyan-700">${balance}</td>
        <td class="p-1 border border-cyan-700">${(gender) === 'F' ? 'Famale' : 'Male'}</td>
        <td class="p-1 border-r border-b border-cyan-700 flex justify-between gap-4">
        <a data-id=${id} class="select-user bg-lime-600 px-5 rounded text-white flex justify-center items-center" href="#">
        Edit</a>
        <a data-id=${id} class="delete-user bg-red-600 px-2 rounded text-white flex justify-center items-center" href="#">Delete
        </a></td>
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