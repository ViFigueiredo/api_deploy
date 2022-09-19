import { Router } from 'express'; // importa express-node

import userController from '../controllers/UserController'; // UserController.js
import loginRequired from '../middlewares/loginRequired'; // loginRequired.js

const router = new Router(); // invoca router-express

/* Não deve existir num sistema real */
// router.get('/', userController.index); // Lista usuários
// router.get('/:id', userController.show); // Lista usuário

// antes de seguir a rota, o id é passado via jwt e captura pelo middlewares
// dessa forma o usuário fica restrito somente a suas informações
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router; // exporta tudo em router

/*

SOMENTE UM TIPO DE REQUISIÇÃO POR TIPO DE ROTA

listar usuários -> index => GET
cria um novo usuário -> store/create => POST
apaga um usuário -> delete => DELETE
mostra um usuário -> show => GET
atualiza um usuário -> update => PATCH (somente um valor) / PUT (objeto inteiro)

*/
