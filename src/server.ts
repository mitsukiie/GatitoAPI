import app from './app';
import ConnectDB from './database/connection';

// Configuração da porta do servidor
const PORT = process.env.PORT || 3000;

// Conecta ao banco antes de iniciar o servidor
ConnectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`〔API〕» Servidor rodando na porta ${PORT}.`);
    });
})