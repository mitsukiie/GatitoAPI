const express = require('express');
const app = express();

app.use(express.json());

let Data = {}; // Armazenar dados temporariamente (em memória)

app.post('/api/bot-data', (req, res) => {
    Data = req.body; // Atualiza os dados com o que foi enviado pelo bot
    console.log('Dados recebidos do bot:', Data);
    res.status(200).json({ message: 'Dados recebidos com sucesso!' });
});

app.get('/api/bot-data', (req, res) => {
    if (Object.keys(Data).length === 0) {
        return res.status(404).json({ message: 'Nenhum dado disponível' });
    }
    res.status(200).json(Data); // Retorna os dados armazenados
});

// Porta da API
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
