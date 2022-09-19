// configuração de execução do model(migration)
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('arquivos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { // faz relação com o id do aluno na tabela de alunos
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'CASCADE', // se o registro pai for deletado, o filho também será
        onUpdate: 'CASCADE', // se a primary key do registro pai for alterada, isso será refletido no registro filho
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('arquivos'),
};
