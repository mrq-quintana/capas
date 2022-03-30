import Repository from "./Repository.js";
import Product from "../dao/product.js"

export default class ProductService extends Repository {
    constructor(dao){
        super(dao, Product.model)
    }
}