import { usersApp } from './src/users/users-app'
import './style.css'

const elementIDs = {
    container : "#app",
}

const container = document.querySelector(elementIDs.container);
usersApp(container);