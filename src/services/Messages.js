import Repository from "./Repository.js";
import Message from "../dao/message.js"

export default class MessageService extends Repository {
    constructor(dao){
        super(dao, Message.model)
    }
}