import Dao from "../dao/dao.js";
import fileDao from "../dao/filesDao.js";
import UserService from "./Users.js";
import ProductService from "./Products.js";
import MessageService from "./Messages.js";
import CartService from "./Carts.js";
import config from "../config.js";


let dao;

switch(config.app.persistence){
    case "MONGO":
        dao = new Dao(config.mongo);
        break;
    case "FILE":
        dao = new fileDao(config.file);
        break;
    }



export const userService = new UserService(dao);
export const productService = new ProductService(dao);
export const messageService = new MessageService(dao);
export const cartService = new CartService(dao);

