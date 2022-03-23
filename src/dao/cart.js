import Schema from "mongoose";


export default class Cart {
  constructor(data) {
    this.data = data;
  }
  static get model() {
    return 'carritos';
  }
  static get schema() {
    return {
      productos: {
        type: [{
          type: Schema.Types.ObjectId,
          ref: 'products',
        }],
        default: [],
      }
    }
  }
  
}