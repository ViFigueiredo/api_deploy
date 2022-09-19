import dotenv from 'dotenv'; // import dotenv

dotenv.config(); // carrega as informações do ".env"

import app from './app';

const port = process.env.APP_PORT;
app.listen(port);

console.log(`Executando em http://localhost:${port}`);
