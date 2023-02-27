import { serverToUser } from "../mappers/server-to-user-mapper";
import { User } from "../models/User";

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUserByPages = async(page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?page=${page}`;
    const response = await fetch(url);
    const data = await response.json();
    const users = data.map( serverToUser );
    return users;
}