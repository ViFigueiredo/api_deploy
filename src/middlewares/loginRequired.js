/* Checa se o usuário está logado e captura o id do header da requisição */

import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required!'],
    });
  }

  const [token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    // Verifica se o usuário existe
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    // Caso o usuário exista, verifica se o token é o mesmo
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido.'],
      });
    }

    // armazena o id e email do req.body
    req.userId = id;
    req.userEmail = email;
    return next();

  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }

};

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ2aWZpZ2NvZGVAZ21haWwuY29tIiwiaWF0IjoxNjU4ODM2NzkwLCJleHAiOjE2NTk0NDE1OTB9.xBTUNSCsCnw9QgTm_arz9uP0-eoTyCcn78exi7JDYr4
