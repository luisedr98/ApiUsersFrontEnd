import { User } from "../models/User";

export const serverToUser = (likeUser) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender,
    } = likeUser;

    return new User({id, isActive, balance, avatar, firstName, lastName, gender});
};
