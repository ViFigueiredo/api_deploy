import dotenv from 'dotenv'; // import dotenv
import { resolve } from 'path'; // import dotenv

dotenv.config(); // carrega as informações do ".env"

import './src/database'; // importa /database/index.js

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Rotas
import homeRoutes from './src/routes/homeRoutes'; // pg. inicial
import userRoutes from './src/routes/userRoutes'; // usuários
import tokenRoutes from './src/routes/tokenRoutes'; // jwt
import alunoRoutes from './src/routes/alunoRoutes'; // alunos
import multerRoutes from './src/routes/fotoRoutes'; // upload de arquivos

// CORS
const whiteList = [
  'https://react1.vifigueiredo.tech',
  'http://localhost:3000',
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS!'));
    }
  },
};

// utilizando classes e construtores para criação de métodos do projeto
class App {
  constructor() {
    this.app = express(); // invoca express
    this.middlewares(); // invoca os middlewares
    this.routes(); // invoca as rotas
  }

  middlewares() { // configuração de middlewares
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true })); // permite leitura de cadeia de dados (JSON)
    this.app.use(express.json()); // permite o parse de requisições JSON
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() { // configuração de rotas
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/jwt/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/uploads/', multerRoutes);
  }
}

// exporta toda a classe App
export default new App().app;
