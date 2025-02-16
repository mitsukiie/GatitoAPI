import { Request, Response } from "express";
import Data from "../database/schemas/commands";

// Atualiza ou insere os comandos no banco de dados
export const updateCommands = async (req: Request, res: Response) => {
  try {
    const { commands } = req.body;

    // Verifica se os dados são válidos
    if (!commands || !Array.isArray(commands)) {
      res.status(400).send("〔API〕» Comandos inválidos ou ausentes.");
      return;
    }

    // Atualiza ou insere os novos dados sem remover os antigos
    const updatedCommands = await Data.findOneAndUpdate(
      {},
      { commands }, // Atualiza os comandos no banco de dados
      { new: true, upsert: true } // Retorna o documento atualizado e cria um se não existir
    );

    console.log("〔API〕» Comandos recebidos:", updatedCommands);
    res.status(200).send("〔API〕» Comandos recebidos com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar comandos:", error);
    res.status(500).send("〔API〕» Erro interno ao salvar comandos.");
  }
};

// Busca os dados do bot no banco de dados
export const fetchCommands = async (req: Request, res: Response) => {
  try {
    // Busca o primeiro documento e oculta os campos _id e __v
    const data = await Data.findOne().select('-_id -__v');

    // Retorna erro caso não haja dados armazenados
    if (!data || data.commands.length === 0) {
      res.status(404).json({ message: "Nenhum comando disponível." });
      return;
    }

    res.status(200).json(data); // Retorna os comandos armazenados
  } catch (error) {
    console.error("Erro ao buscar comandos:", error);
    res
      .status(500)
      .send("〔API〕» Erro interno ao buscar comandos.");
  }
};
