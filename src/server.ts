import app from './app';

// Configuração da porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`〔API〕» Servidor rodando na porta ${PORT}.`));