# API de Dados do Gatito

Uma API simples construída com Express.js para armazenar e consultar dados enviados de um bot.

## Funcionalidades

- **POST /api/bot-data**: Recebe dados do bot e os armazena temporariamente.
- **GET /api/bot-data**: Retorna os dados armazenados do bot.

## Instalação

Para instalar e rodar a API, siga os passos abaixo:

### Pré-requisitos

- Node.js
- NPM (ou Yarn)
- **Axios** (necessário para o bot enviar dados à API)

### Passos

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute a API:

   ```bash
   node .
   ```
A API será executada na porta 3000 (ou a porta definida na variável de ambiente PORT).

# Enviando Dados para a API

Para que o bot envie informações para a API, você precisa usar o axios no lado do bot para fazer uma requisição POST para o endpoint **/api/bot-data**.

### Instalando o axios:
No lado do bot, você pode instalar o axios com o seguinte comando:
```bash
npm install axios
```
### Enviando dados do bot para a API:
Aqui está um exemplo de como o bot pode enviar dados para a API usando o axios:
```javascript
const axios = require('axios');

// Dados que o bot quer enviar
const dados = {
  user: "username",
  message: "Olá, GatitoBot!"
};

// Envia os dados para a API
axios.post('http://localhost:3000/api/bot-data', dados)
  .then(response => {
    console.log('Dados enviados com sucesso:', response.data);
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error);
  });
```
### Exemplo de corpo da requisição:
```json
{
  "user": "username",
  "message": "Olá, GatitoBot!"
}
```
