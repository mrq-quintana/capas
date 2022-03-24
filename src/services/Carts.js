import GenericQueries from "./GenericQueries.js";
import Cart from "../dao/cart.js"

export default class CartService extends GenericQueries {
    constructor(dao){
        super(dao, Cart.model)
    }
    
    deleteProductInCart = async(id,id_prod) =>{
        console.log(id),
        console.log(id_prod)
        let doc = await this.dao.models["carritos"].find({$and:[{_id:id.id},{productos:id_prod.id_prod}]}).count();
        // let doc = await this.dao.models["carritos"].find({_id:id.id});
        console.log(doc)
        // return doc;
    }
}