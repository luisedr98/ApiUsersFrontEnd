import { User } from "../models/User";

export const serverToUser = (likeUser) => {
    const {
        id,
        is_active: isActive,
        balance,
        first_name: firstName,
        last_name: lastName,
        gender,
    } = likeUser;

    return new User({id, isActive, balance, firstName, lastName, gender});
};
