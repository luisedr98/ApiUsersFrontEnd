import { User } from "../../models/User";
import userStore from "../../store/user-store";
import { getUserById } from "../../uses-cases/get-user-by-id";
import { initApp } from "../../uses-cases/init-app";
import modalHTML from "./modal.html?raw";


let modal = null,
    form = null, 
    loadUser = {};
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void> } callback
 */
export const renderModal = (element, callback = null) => {
    
    modal = document.querySelector('#modal');
    if (modal) return;
    modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'fixed top-0 left-0 w-screen h-screen hidden justify-center items-center';
    modal.innerHTML = modalHTML;

    modal.addEventListener('click', e => {
        if (e.target.id === 'modal' || e.target.id === 'close-modal') {
            hideModal();
        }
    });

    form = modal.querySelector('form');

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const formData = new FormData(form);

        const userLike = {...loadUser};
        delete userLike.isActive;

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value;
                continue
            }

            if (key === 'isActive'){
                userLike[key] = true;
                continue;
            }

            userLike[key] = value;
        }

        if(!Object.keys(userLike).includes('isActive'))
            userLike.isActive = false;

        if(Object.values(userLike).some(field => field === ''))
            throw Error('All fields are requered');

        if (callback){
            await callback(userLike);
        }

        hideModal();
        await initApp(element, async()=> {
            await userStore.reloadPage();
        });
    });

    element.append(modal);
}

export const hideModal = () => {
    modal?.classList.remove('flex');
    modal?.classList.add('hidden');
    form?.reset();
}

/**
 * 
 * @param {String|Number} id 
 */
export const showModal = async(id) => {
    modal?.classList.remove('hidden');
    modal?.classList.add('flex');
    loadUser = {};
    
    if (!id) return;
    const user = await getUserById (id);
    setFormValues(user);
}


/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector("[name=firstName]").value = user.firstName;
    form.querySelector("[name=lastName]").value = user.lastName;
    form.querySelector("[name=balance]").value = user.balance;
    form.querySelector("[name=isActive]").checked = user.isActive;
    form.querySelector("[name=gender]").value = user.gender;
    loadUser = user;
}
