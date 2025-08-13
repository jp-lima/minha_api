const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando no Render 🚀" });
});

app.get("/dados", (req, res) => {
  res.json([  {
    id: 1,
    nome: "Aveia",
    calorias: 389,
    proteinas: 16.9,
    gorduras: 6.9,
    carboidratos: 66.3,
    grama: 100,
    foto: 'url'
  },
  {
    id:2,
    nome: "Arroz (cozido)",
    calorias: 130,
    proteinas: 2.7,
    gorduras: 0.3,
    carboidratos: 28.2,
    grama:100,
    foto:'url'
  },
  {
    id:3,
    nome: "Macarrão (cozido)",
    calorias: 158,
    proteinas: 5.8,
    gorduras: 0.9,
    carboidratos:30.9,
    grama: 100,
    foto:'url'
  },
  {
    id:4,
    nome: "Feijão (cozido)",
    calorias: 76,
    proteinas: 4.8,
    gorduras: 0.5,
    carboidratos: 13.6,
    grama: 100,
    foto:'url'
  },
  {
    id:5, 
    nome: "Leite em pó integral",
    calorias: 496,
    proteinas: 26.0,
    gorduras: 27.0,
    carboidratos: 38.0,
    grama:100,
    foto:'url'

  }]);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
