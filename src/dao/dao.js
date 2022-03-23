import mongoose from 'mongoose';
import Cart from './cart.js';
import User from './user.js';
import Product from './product.js';
import Message from './message.js';

export default class Dao {
    constructor(config) {
        this.mongoose = mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => { console.log("Mongodb esta conectado"); })
            .catch(() => { console.log("Mongodb se se ha podido conectar"), process.exit() });

        const timestamp = { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } };
        const userSchema = mongoose.Schema(User.schema, timestamp);
        const cartSchema = mongoose.Schema(Cart.schema, timestamp);
        const productSchema = mongoose.Schema(Product.schema, timestamp);
        const messageSchema = mongoose.Schema(Message.schema, timestamp);

        this.models = {
            [User.model]: mongoose.model(User.model, userSchema),
            [Cart.model]: mongoose.model(Cart.model, cartSchema),
            [Product.model]: mongoose.model(Product.model, productSchema),
            [Message.model]: mongoose.model(Message.model, messageSchema),
        }
    }

    findOne = async(options,entity)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        let result  = await this.models[entity].findOne(options);
        return result?result.toObject():null;
    }
    getAll = async(options,entity)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        let results = await this.models[entity].find(options);
        return results.map(result=>result.toObject())
    }
    insert = async(document,entity)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        try{
            let instance = new this.models[entity](document);
            let result = await instance.save();
            return result?result.toObject():null;
        }catch(error){
            console.log(error);
            return null;
        }
    }
    update = async(document,entity)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        let id = document._id;
        delete document._id;
        let result = await this.models[entity].findByIdAndUpdate(id,{$set:document},{new:true})
        return result;
    }
    delete = async(id,entity)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        let result = await this.models[entity].findByIdAndDelete(id);
        return result?result.toObject():null;
    }
    deleteAll = async(entity)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        let result = await this.models[entity].deleteMany();
        return result?result:null;
    }
    exists = async(entity,options)=>{
        if(!this.models[entity]) throw new Error(`La entidad ${entity} no se encuentra en el dao`)
        return this.models[entity].exists(options)
    }
}