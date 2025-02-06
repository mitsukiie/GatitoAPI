import { Request, Response } from 'express';
import { DataInterface } from '../interfaces/data.interface';

let Data: DataInterface = {}; // Agora usa a interface tipada

export const updateData = (req: Request, res: Response): void => {
    if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).send('〔API〕» Nenhum dado fornecido.');
        return;
    }

    Data = req.body as DataInterface; // Atualiza os dados armazenados
    console.log('〔API〕» Dados recebidos do bot:', Data);
};

export const getData = (req: Request, res: Response): void => {
    if (Object.keys(Data).length === 0) {
        res.status(404).json({ message: 'Nenhum dado disponível.' });
        return;
    }

    res.status(200).json(Data); // Retorna os dados armazenados
};