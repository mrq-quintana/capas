import GenericQueries from "./GenericQueries.js";
import User from "../dao/user.js"

export default class UserService extends GenericQueries {
    constructor(dao){
        super(dao, User.model)
    }
}