async function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const resposta = await fetch("https://todo-app-3pva.onrender.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  });

  const dados = await resposta.json();

  if (dados.token) {
    localStorage.setItem("token", dados.token);

    window.location.href = "index.html";
  } else {
    document.getElementById("erro").innerText = "Login inválido";
  }
}
