import { User } from "../models/User";

/**
 * 
 * @param {User} user 
 */
export const userToServer = (user) => {

    const {
        id,
        firstName : first_name,
        lastName : last_name,
        avatar,
        balance, 
        gender,
        isActive,
    } = user;

    return {
        id,
        first_name,
        last_name,
        avatar,
        balance, 
        gender,
        isActive
    }
} 