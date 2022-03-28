import express from 'express';
import viewsController from '../controllers/viewsController.js';

const router = express.Router();

router.get('/perfil',viewsController.perfilView);
router.get('/gestor',viewsController.gestorView);
router.get('/register',viewsController.registerView);
router.get('/login',viewsController.loginView);
router.get('/logout',viewsController.logoutView);
router.get('/articulos',viewsController.artView);

export default router;
