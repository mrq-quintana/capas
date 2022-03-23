import GenericQueries from "./GenericQueries.js";
import Product from "../dao/product.js"

export default class ProductService extends GenericQueries {
    constructor(dao){
        super(dao, Product.model)
    }
}