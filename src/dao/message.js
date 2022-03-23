import Schema from "mongoose";

export default class Message {
    constructor(data) {
        this.data = data;
    }
    static get model() {
        return 'mensajes';
    }
    static get schema() {
        return {
            user: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
            usuario: { type: String, required: true },
            message: { type: String, required: true }
        }
    }
}