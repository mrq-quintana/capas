import express from 'express';
import upload from '../service/upload.js';
import { authAdmin } from '../utils.js'
import productController from '../controllers/productController.js'

const router = express.Router();

//GET
router.get('/', productController.getProduct)
router.get('/:id', productController.getProductById)
//POST
router.post('/',authAdmin,upload.single('image'), productController.saveProduct)
//PUT
router.put('/:pid',authAdmin, productController.updateProductById)
//DELETE
router.delete('/:id',authAdmin, productController.deleteProductById)
router.delete('/', productController.deleteAll)

export default router;