const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registrar(req, res) {
  const { nome, email, senha } = req.body;

  const senhaHash = await bcrypt.hash(senha, 10);

  const user = new User({
    nome,
    email,
    senha: senhaHash,
  });

  await user.save();

  res.json({ mensagem: "Usuário criado" });
}

async function login(req, res) {
  const { email, senha } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ erro: "Usuário não encontrado" });
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);

  if (!senhaValida) {
    return res.status(400).json({ erro: "Senha inválida" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token });
}

module.exports = { registrar, login };
