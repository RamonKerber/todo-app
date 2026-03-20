# Task Manager

Aplicação full stack para gerenciamento de tarefas com autenticação de usuários.

O projeto permite criar uma conta, fazer login e gerenciar tarefas individuais, garantindo que cada usuário visualize apenas seus próprios dados.

---

## 🚀 Funcionalidades

- Registro e login de usuários  
- Autenticação com JWT  
- CRUD de tarefas (criar, listar, concluir e deletar)  
- Tarefas vinculadas ao usuário logado  
- Interface com feedback visual (loading, notificações e animações)  

---

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js  
- Express  
- MongoDB Atlas  
- Mongoose  
- JSON Web Token (JWT)  
- Bcrypt  

### Frontend
- HTML  
- CSS  
- JavaScript (Vanilla)  

### Deploy
- Frontend: Vercel  
- Backend: Render  

---

## ▶️ Como Rodar o Projeto Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/RamonKerber/todo-app.git
cd todo-app 
```

### 2. Backend
```bash
cd backend
npm install
```

## Crie um arquivo `.env`:

```env
MONGO_URI=seu_link_do_mongodb
JWT_SECRET=seu_segredo
```

Rodar o servidor:
```bash
node server.js
```

### 3. Frontend

Abra o arquivo:

```bash
frontend/index.html
```
Ou utilize uma extensão como Live Server.

---

📁 Estrutura do Projeto

```text
todo-app
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── config
│   └── server.js
│
└── frontend
    ├── index.html
    ├── login.html
    ├── style.css
    └── script.js
```

---

## 🌐 Deploy

A aplicação está disponível online:

- Frontend: https://todo-app-pi-gules.vercel.app
- Backend: https://todo-app-3pva.onrender.com

---

## ⚠️ Observações

- O backend está hospedado no plano gratuito do Render, então a primeira requisição pode demorar alguns segundos.
- O banco de dados é hospedado no MongoDB Atlas.

---

## 👨‍💻 Autor

Ramon Lins Kerber