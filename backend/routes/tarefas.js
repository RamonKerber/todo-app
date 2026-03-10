const express = require("express");
const router = express.Router();

const {
    listarTarefas,
    criarTarefa,
    concluirTarefa,
    deletarTarefa
} = require("../controllers/tarefasController");

router.get("/", listarTarefas);
router.post("/", criarTarefa);
router.patch("/:id/concluir", concluirTarefa);
router.delete("/:id", deletarTarefa);

module.exports = router;