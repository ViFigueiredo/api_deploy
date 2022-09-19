const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'usuarios',
    [
      {
        nome: 'seed1',
        email: 'seed1@email.com',
        password_hash: await bcryptjs.hash('seed111', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'seed2',
        email: 'seed2@email.com',
        password_hash: await bcryptjs.hash('seed222', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'seed3',
        email: 'seed3@email.com',
        password_hash: await bcryptjs.hash('seed333', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  ),

  down: () => {},
};
