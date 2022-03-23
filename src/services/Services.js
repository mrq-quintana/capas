import Dao from "../dao/dao.js";
import UserService from "./Users.js";
import ProductService from "./Products.js";
import MessageService from "./Messages.js";
import CartService from "./Carts.js";
import config from "../config.js";

const dao = new Dao(config.mongo);

export const userService = new UserService(dao);
export const productService = new ProductService(dao);
export const messageService = new MessageService(dao);
export const cartService = new CartService(dao);