import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

// Função para conexão com o banco de dados
const ConnectDB = async () => {
  try {
    await mongoose.connect(url!);
    console.log("〔API〕» Conectado ao MongoDB!");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error); 
    process.exit(1);  // Encerra a aplicação em caso de falha
  }
};

// Exporta a função de conexão
export default ConnectDB;
