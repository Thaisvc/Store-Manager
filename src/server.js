const app = require('./app');
require('dotenv').config();

// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto
// erro porta undefined resolvi com -> const port = process.env.PORT || 3000; // Usando a porta 3000 por padrão se a variável de ambiente não estiver definida
// app.listen(port, () => {
    // console.log(`Servidor está rodando na porta ${port}`);
// });

// codigo antigo

// app.listen(process.env.PORT || 3000, () => {
  // console.log(`Escutando na porta ${process.env.PORT}`);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
});
