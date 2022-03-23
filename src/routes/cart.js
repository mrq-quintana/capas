import express from 'express';
import { cartService } from '../services/Services.js';

const router = express.Router();


//GET
router.get('/:id', (req,res)=>{
    const usuarioId = req.params.id;
    cartService.getBy({usuarioId}).then((result)=>{
        res.send(result);
        console.log(result);
    })
})
//DELETE
router.delete('/:id', (req,res)=>{
    const carritoId = req.params.id;
    cartService.delete(carritoId).then((result)=>{
        res.send(result);   
    })
})
router.delete('/:id/productos/:id_prod', (req,res)=>{
    const idCarrito = req.params.id;
    const id_prod = req.params.id_prod
    cartService.deleteProductById(idCarrito,id_prod).then((result)=>{
        res.send(result);  
    })
})
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