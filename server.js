const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando no Render 🚀" });
});

app.get("/dados", (req, res) => {
  res.json([
    { id: 1, nome: "João" },
    { id: 2, nome: "Maria" }
  ]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
