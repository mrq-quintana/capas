import mongoose from 'mongoose';
import config from '../config.js';

export default class Dao{
    constructor(config){
        this.mongoose = mongoose.connect(config.mongo.url,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>{console.log("Mongodb esta conectado");})
        .catch(()=>{console.log("Mongodb se se ha podido conectar"),process.exit()});
    
        const timestamp = {timestamps:{createdAt:'created_at',updatedAt:'updated_at'}};
        const userSchema = mongoose.Schema(User.schema,timestamp);

        this.models ={
            [User.model]:mongoose.model(User.model,userSchema),
            [Cart.model]:mongoose.model(Cart.model,userSchema),
            [Product.model]:mongoose.model(Product.model,userSchema),
            [Message.model]:mongoose.model(Message.model,userSchema),
        }
    }
}