const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const tarefasRoutes = require("./routes/tarefasRoutes");

app.use("/tarefas", tarefasRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});