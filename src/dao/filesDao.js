import fs from 'fs';
import Cart from './cart.js';
import User from './user.js';
import Product from './product.js';
import Message from './message.js';

export default class fileDao {
    constructor(config) {
        this.path = `${config.url}`;
        this.models = {
            'users': `users.json`,
            'carritos': `carritos.json`,
            'products': `products.json`,
            'mensajes': `mensajes.json`,
        }
        this.init();
    } 
    init = async ()=>{
        if(!fs.existsSync(`${this.path}/${this.models['users']}`)) await fs.promises.writeFile(`${this.path}/${this.models['users']}`, JSON.stringify([ ]))
        if(!fs.existsSync(`${this.path}/${this.models['carritos']}`)) await fs.promises.writeFile(`${this.path}/${this.models['carritos']}`,JSON.stringify([]))
        if(!fs.existsSync(`${this.path}/${this.models['products']}`)) await fs.promises.writeFile(`${this.path}/${this.models['products']}`,JSON.stringify([]))
        if(!fs.existsSync(`${this.path}/${this.models['mensajes']}`)) await fs.promises.writeFile(`${this.path}/${this.models['mensajes']}`,JSON.stringify([]))
    }
    readFile = async(entity)=>{
        let data = await fs.promises.readFile(`${this.path}/${this.models[entity]}`,'utf-8');
        return JSON.parse(data)
    }
    getAll = async(options,entity)=>{
        return await this.readFile(entity);
    }
    insert = async(user,entity)=>{
        try{
            let users = await this.readFile(entity);
            if(users.length===0) user._id=1;
            else user.id = users[users.length-1]._id;
            users.push(user)
            await fs.promises.writeFile(`${this.path}/${this.models[entity]}`,JSON.stringify(users,null,2))
            return user;
        } catch(error){
            throw new Error('No se puede leer archivo')
        }
    } 
    findOne = async(options,entity)=>{
      try{
        let users = await this.readFile(entity);
          let user = users.find((i) => i.email === options);

          if (user) {
          return { product: user, message: "Id encontrado" };
          } else {
          return {
              message: "No se pudo encontrar Id ",
          };
          }
      } catch(error){
          return {
              message: "No se pudo realizar accion" + error,
          };
      }

    }
    
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