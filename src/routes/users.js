import express from 'express';
// import upload from '../service/upload.js';
// import { authAdmin } from '../utils.js'
import userController from '../controllers/userController.js'

const router = express.Router();

//GET
router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
// //POST
// router.post('/',authAdmin,upload.single('image'), productController.saveProduct)
// //PUT
// router.put('/:pid',authAdmin, productController.updateProductById)
// //DELETE
// router.delete('/:id',authAdmin, productController.deleteProductById)
// router.delete('/', productController.deleteAll)

export default router;