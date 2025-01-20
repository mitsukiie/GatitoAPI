const express = require('express');
const app = express();

app.use(express.json());

let Data = {}; // Armazenar dados temporariamente (em memória)
let Command = {}; // Armazenar comandos temporariamente (em memória)

app.post('/api/data', (req, res) => {
    Data = req.body; // Atualiza os dados com o que foi enviado pelo bot
    console.log('Dados recebidos do bot:', Data);
    res.status(200).send('〔API〕» Dados recebidos com sucesso!');
});

app.get('/api/data', (req, res) => {
    if (Object.keys(Data).length === 0) {
        return res.status(404).json({ message: 'Nenhum dado disponível' });
    }
    res.status(200).json(Data); // Retorna os dados armazenados
});

app.post('/api/commands', (req, res) => {
  const { commands } = req.body;

  if (!commands || !Array.isArray(commands)) {
    return res.status(404).send('〔API〕» Comandos inválidos ou ausentes.');
  }

  Command = {
    commands: commands,
  }
  console.log('Comandos recebidos');
  res.status(200).send('〔API〕» Comandos recebidos com sucesso!');
});

// Rota para acessar os dados armazenados
app.get('/api/commands', (req, res) => {
  if (Command.length === 0) {
    return res.status(404).json({ message: 'Nenhum comando disponível' });
  }
  res.status(200).json(Command); // Retorna os dados dos comandos
});

// Porta da API
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
