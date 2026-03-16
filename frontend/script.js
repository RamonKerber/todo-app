const api = "http://localhost:3000/tarefas";

async function carregarTarefas(){

const resposta = await fetch(api);
const dados = await resposta.json();

document.getElementById("contador").innerText =
`${dados.dados.length} tarefas`;

const lista = document.getElementById("listaTarefas");
lista.innerHTML="";

dados.dados.forEach(tarefa=>{

const li = document.createElement("li");

if(tarefa.concluida){
li.classList.add("concluida");
}

li.innerHTML=`
<span>${tarefa.titulo}</span>

<div class="acoes">
<button class="btn-concluir" onclick="concluir(${tarefa.id})">✔</button>
<button class="btn-delete" onclick="deletar(${tarefa.id})">✖</button>
</div>
`;

lista.appendChild(li);

});

}

async function adicionarTarefa(){

const input=document.getElementById("novaTarefa");

if(input.value.trim()==="") return;

await fetch(api,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
titulo:input.value
})
});

input.value="";
input.focus();
carregarTarefas();

}

async function concluir(id){

await fetch(`${api}/${id}/concluir`,{
method:"PATCH"
});

carregarTarefas();

}

async function deletar(id){

await fetch(`${api}/${id}`,{
method:"DELETE"
});

carregarTarefas();

}

carregarTarefas();