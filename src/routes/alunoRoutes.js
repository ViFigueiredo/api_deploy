import { Router } from 'express'; // importa express-node
import alunoController from '../controllers/AlunoController'; // alunoController.js
import loginRequired from '../middlewares/loginRequired';

const router = new Router(); // invoca router-express

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router; // exporta tudo em router
