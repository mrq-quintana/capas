export default class Product {
    constructor(data) {
        this.data = data;
    }
    static get model() {
        return 'products';
    }
    static get schema() {
        return {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String, required: true },
            codigo: { type: String, required: true },
            stock: { type: Number, required: true },
            thumbnail: { type: String },
        }
    }
}