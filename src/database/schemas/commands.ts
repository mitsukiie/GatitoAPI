import { Schema, model, Document } from "mongoose";

// Interface para representar um comando
interface Command {
  name: string;
  description: string;
  new: boolean;
  usage: string;
  detail: string;
}

// Interface para representar uma categoria
interface Category {
  [category: string]: Command[];
}

// Interface do documento do banco de dados
export interface DataInterface extends Document {
  commands: Category[];
}

// Definição do esquema do banco de dados
const Data = new Schema<DataInterface>({
  commands: [
    {
      type: Object, // Armazena cada categoria como um objeto no array
      required: true,
    },
  ],
});

// Exporta o modelo do banco de dados
export default model<DataInterface>("bot/comandos", Data);