import { Request, Response } from 'express';
import { DataType } from '../types/types';

let Data: DataType; // Dados recebidos do bot

export const updateData = (req: Request, res: Response): void => {
    if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).send('〔API〕» Nenhum dado fornecido.');
        return;
    }

    Data = req.body; // Atualiza os dados armazenados
    console.log('〔API〕» Dados recebidos do bot:', Data);
    res.status(200).send('〔API〕» Dados recebidos com sucesso!');
};

export const getData = (req: Request, res: Response): void => {
    if (Object.keys(Data).length === 0) {
        res.status(404).json({ message: 'Nenhum dado disponível.' });
        return;
    }

    res.status(200).json(Data); // Retorna os dados armazenados
};