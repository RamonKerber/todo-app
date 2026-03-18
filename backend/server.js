const express = require("express");
const cors = require("cors");

const conectarDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

conectarDB();

const tarefasRoutes = require("./routes/tarefasRoutes");

app.use("/tarefas", tarefasRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});