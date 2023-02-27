export class User {

    /**
     * 
     * @param {Like<User>} dataUser
     */
    constructor ({id , isActive, balance, firstName, lastName, gender}){
        this.id = id;
        this.isActive = isActive;
        this.balance = balance;
        this.firstName =  firstName; 
        this.lastName = lastName;
        this.gender = gender;
    }
}