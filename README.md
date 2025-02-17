# 📌 Shouyo API - Documentação

## 📖 API para Integração com Bot (TypeScript)
Esta API foi desenvolvida para servir como um ponto de comunicação entre um bot e um serviço backend. Ela permite o armazenamento de dados e comandos recebidos do bot em banco de dados (mongodb), além de expor endpoints para acesso a essas informações.

---

## 🚀 Tecnologias Utilizadas
- **Node.js** - Plataforma de execução JavaScript
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Express** - Framework para criação de API REST
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para interação com o MongoDB
- **dotenv** - Gerenciamento de variáveis de ambiente

---

## 📂 Estrutura do Projeto

```
📦 Shouyo-API
┣ 📂 src
┃ ┣ 📂 controllers
┃ ┃ ┣ 📜 commands.controller.ts  # Lógica para gerenciar comandos
┃ ┃ ┗ 📜 data.controller.ts      # Lógica para gerenciar dados
┃ ┣ 📂 database
┃ ┃ ┣ 📂 schemas
┃ ┃ ┃ ┣ 📜 commands.ts  # Schema de comandos do bot
┃ ┃ ┃ ┗ 📜 data.ts      # Schema de dados genéricos do bot
┃ ┃ ┗ 📜 connection.ts   # Conexão com o MongoDB
┃ ┣ 📂 routes
┃ ┃ ┗ 📜 api.routes.ts    # Definição das rotas da API
┃ ┣ 📜 app.ts               # Configuração principal do Express
┃ ┗ 📜 server.ts            # Inicialização do servidor
┣ 📜 .env                 # Variáveis de ambiente
┣ 📜 package.json         # Dependências do projeto
┣ 📜 README.md            # Documentação do projeto
┗ 📜 tsconfig.json        # Configuração do projeto
```

---

## ⚙️ Configuração

### 1️⃣ Clonar o repositório
```sh
git clone https://github.com/mitsukiie/Shouyo-API.git
cd Shouyo-API
```

### 2️⃣ Instalar dependências
```sh
npm install
```

### 3️⃣ Configurar as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e adicione:
```env
MONGO_URL=mongodb+srv://usuario:senha@cluster.mongodb.net/meubanco
PORT=3000
```

### 4️⃣ Iniciar o servidor
```sh
npm start
```

---

## 📌 **Dados do Bot**

### 🔹 **Atualizar Dados do Bot**
```http
POST /api/data
```
*Este endpoint é usado para atualizar os dados enviados pelo bot.*

#### Requisição
- **Cabeçalho**: `Content-Type: application/json`
- **Corpo**:
```json
{
  "data": {
    "status": "online",
    "versao": "1.0.0"
  }
}
```

#### Respostas
- **200 OK**: Dados recebidos com sucesso.
  ```text
  〔API〕» Dados recebidos com sucesso!
  ```
- **400 Bad Request**: Dados inválidos ou ausentes.
  ```text
  〔API〕» Dados inválidos ou ausentes.
  ```
- **500 Internal Server Error**: Erro interno ao atualizar dados.
  ```text
  〔API〕» Erro interno ao atualizar dados.
  ```


### 🔹 **Obter Dados do Bot**
```http
GET /api/data
```
*Este endpoint retorna os dados atualmente armazenados.*

#### Respostas
- **200 OK**: Dados retornados com sucesso.
```json
{
  "status": "online",
  "versao": "1.0.0"
}
```
- **404 Not Found**: Nenhum dado disponível.
  ```json
  {
    "message": "Nenhum dado disponível."
  }
  ```

---

## 📌 **Comandos do Bot**

### 🔹 **Atualizar comandos do bot**
```http
POST /api/commands
```
*Este endpoint é usado para atualizar os comandos enviados pelo bot.*

#### Requisição
- **Cabeçalho**: `Content-Type: application/json`
- **Corpo**:
```json
{
  "commands": [
    {
      "utility": [
        {
          "name": "ping",
          "description": "Verifica a latência do bot.",
          "new": false,
          "usage": "/ping",
          "detail": "Retorna o tempo de resposta do bot."
        }
      ]
    }
  ]
}
```

#### Respostas
- **200 OK**: Comandos recebidos com sucesso.
  ```text
  〔API〕» Comandos recebidos com sucesso!
  ```
- **400 Bad Request**: Comandos inválidos ou ausentes.
  ```text
  〔API〕» Comandos inválidos ou ausentes.
  ```
- **500 Internal Server Error**: Erro interno ao atualizar os dados.
  ```text
  〔API〕» Erro interno ao atualizar comandos.
  ```


### 🔹 **Buscar comandos do bot**
```http
GET /api/commands
```
Este endpoint retorna os comandos atualmente armazenados.

#### Respostas
- **200 OK**: Comandos retornados com sucesso.
```json
{
  "commands": [
    {
      "utility": [
        {
          "name": "ping",
          "description": "Verifica a latência do bot.",
          "new": false,
          "usage": "/ping",
          "detail": "Retorna o tempo de resposta do bot."
        }
      ]
    }
  ]
}
```
- **404 Not Found**: Nenhum comandos disponível.
  ```json
  {
    "message": "Nenhum comando disponível."
  }
  ```

---

## 📌 **Logs**
- Todas as atualizações de dados e comandos são registradas no console com mensagens descritivas.

## 📌 **Comunicação com a API pelo Bot**
No lado do bot, utilizamos a biblioteca [Axios](https://axios-http.com/) para enviar informações para a API.

### Exemplo de Envio de Dados
```typescript
import axios from 'axios';

const data = {}; // tanto para dados como para comandos

axios.post('http://localhost:3000/api/data', data)
  .then(response => {
    console.log(response.data); // Mensagem de sucesso
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error.response?.data || error.message);
  });
```

---

## Manutenção e Contato
Caso encontre algum problema ou tenha sugestões de melhorias, entre em contato ou abra uma issue no repositório.

🔹 **Desenvolvedor:** @mitsukiie  

[![GitHub](https://img.shields.io/badge/GitHub-000?logo=github&logoColor=white)](https://github.com/mitsukiie)  [![Discord](https://img.shields.io/badge/Discord-5865F2?logo=discord&logoColor=white)](https://discord.com/users/1098021115571490947)  