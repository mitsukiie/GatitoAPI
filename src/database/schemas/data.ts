import { Schema, model } from "mongoose";

// Definição do esquema do banco de dados
const Data = new Schema({
  data: [
    {
      type: Object, // Aceita qualquer estrutura de objeto
      required: true,
    },
  ],
});

// Exporta o modelo do banco de dados
export default model("bot/dados", Data);
