const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

const api = "https://todo-app-3pva.onrender.com/tarefas";

async function carregarTarefas() {
  document.getElementById("loading").style.display = "block";
  const resposta = await fetch(api, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const dados = await resposta.json();

  document.getElementById("loading").style.display = "none";

  document.getElementById("contador").innerText =
    `${dados.dados.length} tarefas`;

  const lista = document.getElementById("listaTarefas");
  lista.innerHTML = "";

  dados.dados.forEach((tarefa) => {
    const li = document.createElement("li");

    if (tarefa.concluida) {
      li.classList.add("concluida");
    }

    li.innerHTML = `
<span>${tarefa.titulo}</span>

<div class="acoes">
<button class="btn-concluir" onclick="concluir('${tarefa._id}')">✔</button>
<button class="btn-delete" onclick="deletar('${tarefa._id}')">✖</button>
</div>
`;

    lista.appendChild(li);
  });
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

async function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");

  if (input.value.trim() === "") return;

  await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      titulo: input.value,
    }),
  });

  mostrarToast("Tarefa adicionada");

  input.value = "";
  input.focus();
  carregarTarefas();
}

async function concluir(id) {
  await fetch(`${api}/${id}/concluir`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  mostrarToast("Tarefa concluída");

  carregarTarefas();
}

async function deletar(id) {
  await fetch(`${api}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  mostrarToast("Tarefa removida");

  carregarTarefas();
}

carregarTarefas();

document.getElementById("novaTarefa").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});

function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");

  toast.innerText = mensagem;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
