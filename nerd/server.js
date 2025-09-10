const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Banco de dados SQLite
const db = new sqlite3.Database("./database.sqlite");

db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)"
  );
});

// Rota de cadastro
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  db.run(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, password],
    function (err) {
      if (err) {
        return res.status(400).json({ error: "E-mail já cadastrado." });
      }
      res.json({ message: "Usuário cadastrado com sucesso!" });
    }
  );
});

// Rota de login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Erro no servidor." });
      }
      if (!row) {
        return res.status(401).json({ error: "E-mail ou senha inválidos." });
      }
      res.json({ message: "Login bem-sucedido!", user: row });
    }
  );
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
