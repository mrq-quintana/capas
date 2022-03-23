import express from 'express';
import upload from '../service/upload.js';
import { io } from '../app.js';
import { authAdmin } from '../utils.js'
import { productService } from '../services/Services.js';
const router = express.Router();


//GET
router.get('/', (req,res)=>{
    productService.getAll().then((result)=>{
        res.send(result);
        console.log(result);
    })
})
router.get('/:id', (req,res)=>{
    const usuarioId = req.params.id;
    productService.getBy({usuarioId}).then((result)=>{
        res.send(result);
        console.log(result);
    })
})
//DELETE
router.delete('/:id',authAdmin,(req,res)=>{
    const usuarioId = req.params.id;
    productService.delete({usuarioId}).then((result)=>{
        res.send(result);
        console.log(result);
    })
})
router.delete('/', (req,res)=>{
    productService.delete().then((result)=>{
        res.send(result);
        console.log(result);
    })
})
//POST
router.post('/',authAdmin,upload.single('image'),(req, res)=>{
    console.log(req.file)
    let productoAgregar = req.body;
    let thumbnail = req.protocol+"://"+req.hostname+":8080"+'/images/'+req.file.filename;
    productoAgregar.thumbnail = thumbnail;
    productService.save(productoAgregar).then(result=>{
        res.send(result);
        if(result){
            productService.getAll().then(result=>{
                io.emit('actualiza',result);
            })
        }
    })
})
//PUT
router.put('/:pid',authAdmin,(req,res)=>{
    let id = req.params.pid;
    let body = req.body;
    productService.updateProduct(id,body).then(result=>{
        res.send(result);
        console.log(result);
    })
})

export default router;