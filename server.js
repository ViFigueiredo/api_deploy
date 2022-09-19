import app from './app'; // importa a classe App

// Executa o servidor nodeJS
const port = 3001;
const address = 'localhost';
app.listen(port, () => {
  console.log(`Executando em http://${address}:${port}`);
});
