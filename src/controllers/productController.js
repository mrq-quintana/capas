import { productService } from "../services/Services.js";

const getProduct = async (req, res) => {
  let products = await productService.getAll();
  res.send(products);
};
const getProductById = async (req, res) => {
  const id = req.params.id;
  let product = await productService.getBy({ id });
  res.send(product);
};
const saveProduct = async (req, res) => {
  let productoAgregar = req.body;
  let thumbnail = req.protocol + "://" + req.hostname + ":8080" + "/images/" + req.file.filename;
  productoAgregar.thumbnail = thumbnail;
  productService.save(productoAgregar).then((result) => {
    res.send(result);
  });
};
const deleteProductById = async(req,res) =>{
    const _id = req.params.id;
    let product = await productService.delete({_id});
        res.send(product);
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
  getProduct,
  getProductById,
  saveProduct,
  deleteProductById,
  updateProductById,
  deleteAll
};

//HACER VALIDACIONES
