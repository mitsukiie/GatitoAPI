import express from 'express';
import Routes from './routes/api.routes';

const app = express();

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Define o prefixo das rotas da API
app.use('/api', Routes);

export default app;