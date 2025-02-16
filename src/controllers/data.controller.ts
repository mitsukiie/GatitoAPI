import { Request, Response } from "express";
import Data from "../database/schemas/data";

// Atualiza ou insere os dados no banco de dados
export const updateData = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Verifica se os dados são válidos
    if (!data || typeof data !== "object") {
      res.status(400).send("〔API〕» Dados inválidos ou ausentes.");
      return;
    }

    // Atualiza ou insere os novos dados sem remover os antigos
    const updatedData = await Data.findOneAndUpdate(
      {},
      { $set: { data } }, // Atualiza os dados no banco
      { new: true, upsert: true } // Retorna o documento atualizado e cria um se não existir
    );

    console.log("〔API〕» Dados do bot adicionados:", updatedData);
    res.status(200).send("〔API〕» Dados recebidos com sucesso!");
  } catch (error) {
    console.error("Erro ao atualizar os dados do bot:", error);
    res.status(500).send("〔API〕» Erro interno ao atualizar os dados do bot.");
  }
};

// Busca os dados do bot no banco de dados
export const fetchData = async (req: Request, res: Response) => {
  try {
    // Busca o primeiro documento e oculta os campos _id e __v
    const data = await Data.findOne().select("-_id -__v");

    // Retorna erro caso não haja dados armazenados
    if (!data) {
      res.status(404).json({ message: "Nenhum dado disponível." });
      return;
    }

    res.status(200).json(data); // Retorna os dados armazenados
  } catch (error) {
    console.error("Erro ao buscar os dados do bot:", error);
    res.status(500).send("〔API〕» Erro interno ao buscar os dados do bot.");
  }
};
