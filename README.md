# 📌 Shouyo API - Documentação

## 📖 API para Integração com Bot (TypeScript)
Esta API foi desenvolvida para servir como um ponto de comunicação entre um bot e um serviço backend. Ela permite o armazenamento de dados e comandos recebidos do bot em banco de dados (mongodb), além de expor endpoints para acesso a essas informações.

---

## 🚀 Tecnologias Utilizadas
- **Node.js** - Plataforma de execução JavaScript
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

## 📌 Rotas da API

### 📌 **Dados do Bot**

#### 🔹 **Atualizar os dados do bot**
```http
POST /api/data/update
```
**Requisição:**
```json
{
  "data": {
    "status": "online",
    "versao": "1.0.0"
  }
}
```
**Resposta (200 OK):**
```json
"〔API〕» Dados do bot atualizados com sucesso!"
```

#### 🔹 **Buscar os dados do bot**
```http
GET /api/data
```
**Resposta (200 OK):**
```json
{
  "status": "online",
  "versao": "1.0.0"
}
```

---

### 📌 **Comandos do Bot**

#### 🔹 **Atualizar comandos do bot**
```http
POST /api/commands/update
```
**Requisição:**
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
**Resposta (200 OK):**
```json
"〔API〕» Comandos recebidos com sucesso!"
```

#### 🔹 **Buscar comandos do bot**
```http
GET /api/commands
```
**Resposta (200 OK):**
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

---

## 🛠️ Manutenção e Contato
Caso encontre algum problema ou tenha sugestões de melhorias, entre em contato ou abra uma issue no repositório.

🔹 **Desenvolvedor:** [Seu Nome](https://github.com/seu-usuario)  
🔹 **Repositório:** [projeto-bot-api](https://github.com/seu-usuario/projeto-bot-api)

🚀 **Happy Coding!**

