const express = require('express');
const app = express();

// Middleware para permitir parsing de JSON no corpo da requisição
app.use(express.json());

// Estruturas de dados em memória para armazenar informações temporárias
let Data = {}; // Dados recebidos do bot
let Command = {}; // Comandos recebidos do bot

/**
 * Rota POST: Atualiza os dados enviados pelo bot
 * Endpoint: /api/data
 */
app.post('/api/data', (req, res) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send('〔API〕» Nenhum dado fornecido.');
    }

    Data = req.body; // Atualiza os dados armazenados
    console.log('〔API〕» Dados recebidos do bot:', Data);
    res.status(200).send('〔API〕» Dados recebidos com sucesso!');
});

/**
 * Rota GET: Retorna os dados armazenados
 * Endpoint: /api/data
 */
app.get('/api/data', (req, res) => {
    if (Object.keys(Data).length === 0) {
        return res.status(404).json({ message: 'Nenhum dado disponível.' });
    }

    res.status(200).json(Data); // Retorna os dados armazenados
});

/**
 * Rota POST: Atualiza os comandos enviados pelo bot
 * Endpoint: /api/commands
 */
app.post('/api/commands', (req, res) => {
    const { commands } = req.body;

    if (!commands || !Array.isArray(commands)) {
        return res.status(400).send('〔API〕» Comandos inválidos ou ausentes.');
    }

    Command = { commands }; // Atualiza os comandos armazenados
    console.log('〔API〕» Comandos recebidos:', Command);
    res.status(200).send('〔API〕» Comandos recebidos com sucesso!');
});

/**
 * Rota GET: Retorna os comandos armazenados
 * Endpoint: /api/commands
 */
app.get('/api/commands', (req, res) => {
    if (!Command.commands || Command.commands.length === 0) {
        return res.status(404).json({ message: 'Nenhum comando disponível.' });
    }

    res.status(200).json(Command); // Retorna os comandos armazenados
});

// Configuração da porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`〔API〕» Servidor rodando na porta ${PORT}.`));
