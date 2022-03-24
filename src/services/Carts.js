import GenericQueries from "./GenericQueries.js";
import Cart from "../dao/cart.js"

export default class CartService extends GenericQueries {
    constructor(dao){
        super(dao, Cart.model)
    }
    
    deleteProductInCart = async(idCarrito,id_prod) =>{
        let doc = await this.dao[Cart.model].find({$and:[{_id:idCarrito},{productos:id_prod}]}).count();
        console.log(doc)
        return doc;
    }
}