import { cartService } from "../services/Services.js";

const getCartById = async (req, res) => {
  const _id = req.params.id;
  let cart = await cartService.getBy({ _id });
  res.send(cart);
};
const deleteCartById = async(req,res) =>{
    const _id = req.params.id;
    let cart = await cartService.delete({_id});
        res.send(cart);
};
const deleteProductInCart = async(req,res)=>{
    const idCarrito = req.params.id;
    const id_prod = req.params.id_prod
    let idProduct = await cartService.deleteProductInCart(idCarrito,id_prod)
        res.send(idProduct);  
    };



const saveProduct = async (req, res) => {
  let productoAgregar = req.body;
  let thumbnail = req.protocol + "://" + req.hostname + ":8080" + "/images/" + req.file.filename;
  productoAgregar.thumbnail = thumbnail;
  productService.save(productoAgregar).then((result) => {
    res.send(result);
  });
};

const updateProductById = async(req,res)=>{
    let id = req.params.pid;
    let body = req.body;
    let product = await productService.update(id,body)
        res.send(product);
};
const deleteAll = async(req,res)=>{
    let products = await productService.deleteAll();
    res.send(products);
}

export default {
  getCartById,
  deleteProductInCart,
  deleteCartById,
  saveProduct,
  updateProductById,
  deleteAll
};