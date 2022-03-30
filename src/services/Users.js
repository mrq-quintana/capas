import Repository from "./Repository.js";
import User from "../dao/user.js"

export default class UserService extends Repository {
    constructor(dao){
        super(dao, User.model)
    }
}