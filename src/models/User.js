import Sequelize, { Model } from 'sequelize'; // importa sequelize e módulo de model
import bcryptjs from 'bcryptjs'; // importa bcryptjs

// como os dados da migration são inseridos no banco
export default class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // valor padrão caso o campo não seja enviado
        validate: {
          // validator integrado
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '', // valor padrão caso o campo não seja enviado
        unique: {
          msg: 'E-mail já existe!',
        },
        validate: {
          // validator integrado
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },
      password_hash: { // senha em hash que será salva na base de dados
        type: Sequelize.STRING,
        defaultValue: '', // valor padrão caso o campo não seja enviado
      },
      password: { // não existe na base de dados
        type: Sequelize.VIRTUAL,
        defaultValue: '', // valor padrão caso o campo não seja enviado
        validate: {
          // validator integrado
          len: {
            args: [6, 50],
            // msg: `Senha precisa ter entre ${args[0]} e ${args[1]} caracteres.`,
            msg: 'Senha precisa ter entre 6 e 50 caracteres.',
          },
        },
      },
    }, { sequelize });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
