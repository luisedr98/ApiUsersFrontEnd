import { User } from "../models/User";


/**
 * 
 * @param {String|Number} user 
 * @returns {Boolean}
 */
export const deleteUserById = async( id ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;

    const response = await fetch (url , {
        method: 'DELETE',
    });

    await response.json();

    return true;
}