import Router from 'express'; // importa express-node
import homeController from '../controllers/HomeController'; // homeController.js

const router = new Router(); // invoca router-express

router.get('/', homeController.index); // raiz da página

export default router; // exporta tudo em router
