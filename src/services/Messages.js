import GenericQueries from "./GenericQueries.js";
import Message from "../dao/message.js"

export default class MessageService extends GenericQueries {
    constructor(dao){
        super(dao, Message.model)
    }
}