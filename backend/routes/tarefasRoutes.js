const express = require("express");
const router = express.Router();

const verificarToken = require("../middleware/authMiddleware");

const {
  listarTarefas,
  criarTarefa,
  concluirTarefa,
  deletarTarefa,
} = require("../controllers/tarefasController");

router.get("/", verificarToken, listarTarefas);
router.post("/", verificarToken, criarTarefa);
router.patch("/:id/concluir", verificarToken, concluirTarefa);
router.delete("/:id", verificarToken, deletarTarefa);

module.exports = router;
