import express from 'express';
import upload from '../service/upload.js';
import passport from 'passport'
import userController from '../controllers/userController.js'

const router = express.Router();

//GET
router.get('/', userController.getUsers)
router.get('/:id', userController.getUserById)
router.post('/register',upload.single('image'),passport.authenticate('register',{ failureRedirect:'/api/failedRegister', successRedirect:'/api/views/login', passReqToCallback: true}),userController.registerUser)
router.post('/login',passport.authenticate('login',{failureRedirect:'/api/views/login',successRedirect:'/api/views/perfil',passReqToCallback: true}),userController.loginUser)

// //POST
// router.post('/',authAdmin,upload.single('image'), productController.saveProduct)
// //PUT
// router.put('/:pid',authAdmin, productController.updateProductById)
// //DELETE
// router.delete('/:id',authAdmin, productController.deleteProductById)
// router.delete('/', productController.deleteAll)

export default router;