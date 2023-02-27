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
        balance, 
        gender,
        isActive : is_active,
    } = user;

    return {
        id,
        first_name,
        last_name,
        balance, 
        gender,
        is_active
    }
} 