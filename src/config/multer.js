import multer from 'multer';
import { extname, resolve } from 'path'; // permite utilizar o própio nome do módulo

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); // composição de nomes

export default {
  fileFilter: (req, file, cb) => {
    // impede entrada de qualquer tipo de arquivo
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG.'));
    }
    return cb(null, true); // segue a rotina do código
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // (erro, path)
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      // (erro, filename{data_atual.extsão_do_arquivo})
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
