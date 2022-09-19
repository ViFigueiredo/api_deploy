import Usuario from '../models/User';

class UserController {

  // CREATE ou STORE
  async store(req, res) {
    try {
      const novoUser = await Usuario.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      // console.log(e);
      return res.status(400).json({ // retorna um array de erros
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // INDEX
  async index(req, res) {
    try {
      const users = await Usuario.findAll({ attributes: ['id', 'nome', 'email'] });
      // console.log('USER ID', req.userId);
      // console.log('USER EMAIL', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // SHOW
  async show(req, res) {
    try {
      const user = await Usuario.findByPk(req.params.id);
      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE
  async update(req, res) {
    try {

      /* Não precisa enviar o id via req uma vez que o middleware já faz isso */
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     errors: ['ID não enviado.'],
      //   });
      // }

      // const user = await Usuario.findByPk(req.params.id);
      const user = await Usuario.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ // retorna um array de erros
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE
  /* Em um sistema real, no geral (depende do tipo de sistema), o usuário nunca deve se autodeletar da base de dados. Para contornar isso, criamos devemos criar um flag que informa para o usuário se ele está ativo ou não, sem modificar a base de dados. */
  async delete(req, res) {
    try {
      /* Não precisa enviar o id via req uma vez que o middleware já faz isso */
      // if (!req.params.id) {
      //   return res.status(400).json({
      //     errors: ['ID não enviado.'],
      //   });
      // }

      // const user = await Usuario.findByPk(req.params.id);
      const user = await Usuario.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ // retorna um array de erros
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
