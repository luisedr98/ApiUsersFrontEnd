import { serverToUser } from "../mappers/server-to-user-mapper";
import { userToServer } from "../mappers/user-to-server-mapper";
import { User } from "../models/User";

/**
 * 
 * @param {Like<User>} userLike
 * @returns {User}
 */
export const saveUser  = async(userLike) => {

    const user = new User(userLike);
    const userToSave = userToServer(user);

    let userUpdated = null;

    if(user.id){
        userUpdated = await updateUser(userToSave);
    }else{
        userUpdated = await createUser( userToSave );
    }

    return serverToUser(userUpdated);

    

}

/**
 * 
 * @param {User} user 
 * @returns {User} 
 */

const createUser = async( user ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users`;

    const response = await fetch (url , {
        method: 'POST',
        body: JSON.stringify(user),
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    const newUser = await response.json();
    return newUser;
}

/**
 * 
 * @param {User} user 
 * @returns {User}
 */

const updateUser = async( user ) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;

    const response = await fetch (url , {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    const newUser = await response.json();
    return newUser;

}