import express from 'express';
import viewsController from '../controllers/viewsController.js';

const router = express.Router();

router.get('/perfil',viewsController.perfilView)
router.get('/gestor',viewsController.gestorView)
router.get('/register',viewsController.registerView)
router.get('/login',viewsController.loginView)

export default router;
