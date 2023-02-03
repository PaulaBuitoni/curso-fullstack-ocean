const express = require("express");
const app = express();

// o que vier no bory da requisição, está em JSON
app.use(express.json());

// Endpoint / -> Hello Word
app.get("/", function (req, res) {
  res.send("Olha ai, é qumme");
});

// Endponint /oi -> Olá, mundo!

app.get("/oi", function (req, res){
   res.send("olá, mundoooo!");
});

//lista de informações
const itens = ["sabonete", "pasta de dente", "escova de dente", "creme pro corpo"];
// Endpoint Read All -> [GET]/item

app.get("/item", function(req, res){
  res.send(itens);
})
// Endpoint Read Single by ID -> [GET] /item/:id
app.get("/item/:id", function(req, res) {
  const id = req.params.id;
  const item = itens[id - 1]
res.send(item);
})

//Endpoint Create -> [POST] /item
app.post("/item", function(req, res){
  //console.log(req.body);
  const item = req.body;
  itens.push(item.nome);
  res.send("Create")
});

app.listen(3000);
