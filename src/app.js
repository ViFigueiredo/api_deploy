import dotenv from 'dotenv'; // import dotenv
import { resolve } from 'path'; // import dotenv

dotenv.config(); // carrega as informações do ".env"

import './database'; // importa /database/index.js

import express from 'express';

// Rotas
import homeRoutes from './routes/homeRoutes'; // pg. inicial
import userRoutes from './routes/userRoutes'; // usuários
import tokenRoutes from './routes/tokenRoutes'; // jwt
import alunoRoutes from './routes/alunoRoutes'; // alunos
import multerRoutes from './routes/fotoRoutes'; // upload de arquivos

// utilizando classes e construtores para criação de métodos do projeto
class App {
  constructor() {
    this.app = express(); // invoca express
    this.middlewares(); // invoca os middlewares
    this.routes(); // invoca as rotas
  }

  middlewares() { // configuração de middlewares
    this.app.use(express.urlencoded({ extended: true })); // permite leitura de cadeia de dados (JSON)
    this.app.use(express.json()); // permite o parse de requisições JSON
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
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
