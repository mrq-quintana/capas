import fs from 'fs';
import Cart from './cart.js';
import User from './user.js';
import Product from './product.js';
import Message from './message.js';

export default class fileDao {
    constructor(config) {
        this.path = `${config.url}`;
        this.models = {
            [User.model]: `users.txt`,
            [Cart.model]: `carts.json`,
            [Product.model]: `products.json`,
            [Message.model]: `messages.json`,
        }
        this.init();
    }
    init = async ()=>{
        if(!fs.existsSync(this.path)) await fs.promises.writeFile(this.path,JSON.stringify([]))
    }
    getAll = async(options,entity)=>{
        let data = await fs.promises.readFile(`${this.path}/${this.models[entity]}`,'utf-8');
        return JSON.parse(data)
    }
    // findOne = async(options,entity)=>{
    //     if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
    //     let result  = await this.models[entity].findOne(options);
    //     return result?result.toObject():null;
    // }
    // insert = async(document,entity)=>{
    //     if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
    //     try{
    //         let instance = new this.models[entity](document);
    //         let result = await instance.save();
    //         return result?result.toObject():null;
    //     }catch(error){
    //         console.log(error);
    //         return null;
    //     }
    // }
    // update = async(document,entity)=>{
    //     if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
    //     let id = document._id;
    //     delete document._id;
    //     let result = await this.models[entity].findByIdAndUpdate(id,{$set:document},{new:true})
    //     return result;
    // }
    // delete = async(id,entity)=>{
    //     if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
    //     let result = await this.models[entity].findByIdAndDelete(id);
    //     return result?result.toObject():null;
    // }
    // deleteAll = async(entity)=>{
    //     if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
    //     let result = await this.models[entity].deleteMany();
    //     return result?result:null;
    // }
    // exists = async(entity,options)=>{
    //     if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
    //     return this.models[entity].exists(options)
    // }
}