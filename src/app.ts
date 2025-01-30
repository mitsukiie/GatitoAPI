import express from 'express';
import apiRoutes from './routes/api.routes';

const app = express();

// Middleware para permitir parsing de JSON no corpo da requisição
app.use(express.json());

// Usar as rotas da API
app.use('/api', apiRoutes);

export default app;