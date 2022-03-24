import express from 'express';
import cartController from '../controllers/cartController.js';

const router = express.Router();


//GET
router.get('/:id', cartController.getCartById)
//DELETE
router.delete('/:id', cartController.deleteCartById)
// router.delete('/:id/productos/:id_prod', (req,res)=>{
//     const idCarrito = req.params.id;
//     const id_prod = req.params.id_prod
//     cartService.deleteProductById(idCarrito,id_prod).then((result)=>{
//         res.send(result);  
//     })
// })
router.delete('/:id/productos/:id_prod', cartController.deleteProductInCart)
//POST
router.post('/',(req, res)=>{
    cartService.save().then(result=>{
        res.send(result);
    })
})
router.post('/:id',(req, res)=>{
    const idCarrito = req.params.id;
    let idAgregar = req.body.id; 
    cartService.addToCart(idAgregar,idCarrito).then(result=>{
        res.send(result);
        console.log(result.message)
    })
})
export default router;