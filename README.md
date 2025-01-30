# API para Integração com Gatito (TypeScript)

Esta API foi desenvolvida para servir como um ponto de comunicação entre um bot e um serviço backend. Ela permite o armazenamento temporário de dados e comandos recebidos do bot, além de expor endpoints para acesso a essas informações.

## Endpoints

### 1. Atualizar Dados do Bot
**POST /api/data**

Este endpoint é usado para atualizar os dados enviados pelo bot.

#### Requisição
- **Cabeçalho**: `Content-Type: application/json`
- **Corpo**:
  ```json
  {
    "key1": "value1",
    "key2": "value2"
  }
  ```

#### Respostas
- **200 OK**: Dados recebidos com sucesso.
  ```text
  〔API〕» Dados recebidos com sucesso!
  ```
- **400 Bad Request**: Nenhum dado fornecido.
  ```text
  〔API〕» Nenhum dado fornecido.
  ```

### 2. Obter Dados do Bot
**GET /api/data**

Este endpoint retorna os dados atualmente armazenados.

#### Respostas
- **200 OK**: Dados retornados com sucesso.
  ```json
  {
    "key1": "value1",
    "key2": "value2"
  }
  ```
- **404 Not Found**: Nenhum dado disponível.
  ```json
  {
    "message": "Nenhum dado disponível."
  }
  ```

### 3. Atualizar Comandos do Bot
**POST /api/commands**

Este endpoint é usado para atualizar os comandos enviados pelo bot.

#### Requisição
- **Cabeçalho**: `Content-Type: application/json`
- **Corpo**:
  ```json
  {
    "commands": ["comando1", "comando2"]
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

### 4. Obter Comandos do Bot
**GET /api/commands**

Este endpoint retorna os comandos atualmente armazenados.

#### Respostas
- **200 OK**: Comandos retornados com sucesso.
  ```json
  {
    "commands": ["comando1", "comando2"]
  }
  ```
- **404 Not Found**: Nenhum comando disponível.
  ```json
  {
    "message": "Nenhum comando disponível."
  }
  ```

## Configuração

### Instalação
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Compilação e Execução
1. Para compilar o TypeScript:
   ```bash
   npm run build
   ```
2. Para iniciar o servidor:
   ```bash
   npm start
   ```

Por padrão, a API será executada na porta `3000`. Você pode alterar a porta configurando a variável de ambiente `PORT`.

### Variáveis de Ambiente
- **PORT**: Porta na qual o servidor será executado. Valor padrão: `3000`.

## Estrutura do Código
- `Data`: Objeto em memória para armazenar dados recebidos do bot.
- `Command`: Objeto em memória para armazenar comandos recebidos do bot.
- Rotas:
  - `/api/data`: Para gerenciamento de dados.
  - `/api/commands`: Para gerenciamento de comandos.

## Logs
- Todas as atualizações de dados e comandos são registradas no console com mensagens descritivas.

## Comunicação com a API pelo Bot
No lado do bot, utilizamos a biblioteca [Axios](https://axios-http.com/) para enviar informações para a API.

### Exemplo de Envio de Dados
```typescript
import axios from 'axios';

const data = {
  key1: "value1",
  key2: "value2"
};

axios.post('http://localhost:3000/api/data', data)
  .then(response => {
    console.log(response.data); // Mensagem de sucesso
  })
  .catch(error => {
    console.error('Erro ao enviar dados:', error.response?.data || error.message);
  });
```

### Exemplo de Envio de Comandos
```typescript
const commands = ["comando1", "comando2"];

axios.post('http://localhost:3000/api/commands', { commands })
  .then(response => {
    console.log(response.data); // Mensagem de sucesso
  })
  .catch(error => {
    console.error('Erro ao enviar comandos:', error.response?.data || error.message);
  });
```