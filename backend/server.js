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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta", PORT);
});