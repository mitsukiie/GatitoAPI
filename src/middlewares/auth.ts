import { Request, Response, NextFunction } from 'express';
import dotenv from "dotenv";
dotenv.config();

// API Key segura armazenada em variáveis de ambiente
const key = process.env.API_KEY || '';

export const authenticate = (req: Request, res: Response, next: NextFunction): void => {
    const apiKey = req.headers['x-api-key']; // API Key vem no cabeçalho da requisição

    if (!apiKey || apiKey !== key) {
        res.status(403).send('〔API〕» Acesso negado! API Key inválida ou ausente.');
        return; // Certifica-se de que a função para aqui
    }

    next(); // Se a chave for válida, continua para o próximo middleware/rota
};
