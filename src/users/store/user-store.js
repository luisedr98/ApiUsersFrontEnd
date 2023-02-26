import { User } from "../models/User";
import { loadUserByPages } from "../uses-cases/load-user-by-pages";

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
   const users = await loadUserByPages(state.currentPage + 1);
   if (users.length === 0) return;
   state.currentPage += 1;
   state.users = users;
}

const loadPreviousPage = async () => {
    if (state.currentPage === 1 || state.currentPage === 0) {
        state.currentPage = 1;
        return;
    }

    const users = await loadUserByPages(state.currentPage - 1);
    state.currentPage -= 1;
    state.users = users;
    }

/**
 * 
 * @param {User} userUpdated 
 */
const onUserChanged = (userUpdated) => {
    let wasFound = false;

    state.users = state.users.map( user => {
        if (user.id === userUpdated.id){
            wasFound = true;
            return userUpdated
        } else
            return user
    });

    if(state.users.length < 10 && !wasFound){
        state.users.push(userUpdated);
    }
}

const reloadPage = async () => {
    const users = await loadUserByPages(state.currentPage);
    await loadPreviousPage();
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage

}