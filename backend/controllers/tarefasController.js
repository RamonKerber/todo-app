const Task = require("../models/Task");

async function listarTarefas(req,res){

try{

const tarefas = await Task.find({userId:req.userId});

res.json({dados:tarefas});

}catch(err){

res.status(500).json({erro:"Erro ao buscar tarefas"});

}

}

async function criarTarefa(req,res){

try{

const {titulo} = req.body;

const tarefa = new Task({
titulo,
userId:req.userId
});

await tarefa.save();

res.json(tarefa);

}catch(err){

res.status(500).json({erro:"Erro ao criar tarefa"});

}

}

async function concluirTarefa(req,res){

try{

const {id} = req.params;

const tarefa = await Task.findOne({_id:id,userId:req.userId});

if(!tarefa){
return res.status(404).json({erro:"Tarefa não encontrada"});
}

tarefa.concluida = !tarefa.concluida;

await tarefa.save();

res.json(tarefa);

}catch(err){

res.status(500).json({erro:"Erro ao concluir tarefa"});

}

}

async function deletarTarefa(req,res){

try{

const {id} = req.params;

await Task.deleteOne({_id:id,userId:req.userId});

res.json({mensagem:"Tarefa deletada"});

}catch(err){

res.status(500).json({erro:"Erro ao deletar tarefa"});

}

}

module.exports = {
listarTarefas,
criarTarefa,
concluirTarefa,
deletarTarefa
};