import { usersApp } from './src/users/users-app'


const elementIDs = {
    container : "#app",
}

const container = document.querySelector(elementIDs.container);

document.addEventListener('DOMContentLoaded', () => {
    usersApp(container);
    document.querySelector("#spinner").classList.add('hidden');
});
