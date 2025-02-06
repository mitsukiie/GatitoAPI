import { Request, Response } from 'express';
import { CommandData } from '../interfaces/commands.interface'; // Importa a interface

let Command: CommandData = { commands: [] };  // Agora usa a interface tipada

export const updateCommands = (req: Request, res: Response): void => {
    const { commands } = req.body;

    if (!commands || !Array.isArray(commands)) {
      res.status(400).send('〔API〕» Comandos inválidos ou ausentes.');
      return;
    }

    Command = { commands }; // Atualiza os comandos armazenados
    console.log('〔API〕» Comandos recebidos:', Command);
    res.status(200).send('〔API〕» Comandos recebidos com sucesso!');
};

export const getCommands = (req: Request, res: Response): void => {
    if (!Command.commands || Command.commands.length === 0) {
      res.status(404).json({ message: 'Nenhum comando disponível.' });
      return
    }

    res.status(200).json(Command); // Retorna os comandos armazenados
};