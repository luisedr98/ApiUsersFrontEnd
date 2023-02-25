import { serverToUser } from "../mappers/server-to-user-mapper";
import { User } from "../models/User";

/**
 * 
 * @param {Number} id
 * @returns {Promise<User>}
 */
export const getUserById = async( id ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const user = serverToUser(data);
    return user;
}