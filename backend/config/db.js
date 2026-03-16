require("dotenv").config();
const mongoose = require("mongoose");

async function conectarDB(){
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");
  }catch(err){
    console.log("Erro ao conectar:", err);
  }
}

module.exports = conectarDB;