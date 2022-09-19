import { Router } from 'express'; // importa express-node
import tokenController from '../controllers/TokenController'; // tokenController.js

const router = new Router(); // invoca router-express

router.post('/', tokenController.store); // raiz da página

export default router; // exporta tudo em router
