const tarefas = require("../data/tarefas");

function listarTarefas(req, res) {
    res.json({
        status: 200,
        dados: tarefas
    });
}

function criarTarefa(req, res) {
    const { titulo } = req.body;

    if (!titulo) {
        return res.status(400).json({
            mensagem: "Título é obrigatório"
        });
    }

    const novoId = tarefas.length > 0
        ? Math.max(...tarefas.map(t => t.id)) + 1
        : 1;

    const novaTarefa = {
        id: novoId,
        titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);

    res.status(201).json({
        mensagem: "Tarefa criada",
        dados: novaTarefa
    });
}

function concluirTarefa(req, res) {
    const id = parseInt(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({
            mensagem: "Tarefa não encontrada"
        });
    }

    tarefa.concluida = true;

    res.json({
        mensagem: "Tarefa concluída",
        dados: tarefa
    });
}

function deletarTarefa(req, res) {
    const id = parseInt(req.params.id);

    const index = tarefas.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({
            mensagem: "Tarefa não encontrada"
        });
    }

    const removida = tarefas.splice(index, 1);

    res.json({
        mensagem: "Tarefa removida",
        dados: removida[0]
    });
}

module.exports = {
    listarTarefas,
    criarTarefa,
    concluirTarefa,
    deletarTarefa
};