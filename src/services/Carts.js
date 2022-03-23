import GenericQueries from "./GenericQueries.js";
import Cart from "../dao/cart.js"

export default class CartService extends GenericQueries {
    constructor(dao){
        super(dao, Cart.model)
    }
    
}