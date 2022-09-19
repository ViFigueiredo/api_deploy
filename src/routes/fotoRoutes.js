import Router from 'express'; // importa express-node

import multerController from '../controllers/FotoController'; // multerController.js
import loginRequired from '../middlewares/loginRequired';

const router = new Router(); // invoca router-express

router.post('/', loginRequired, multerController.store); // middleware que captura o req.file da requisição da rota

export default router; // exporta tudo em router
