const express = require("express");
const app = express();
const port = 3000;

// variavel com os dados
const alimentos = [
    {id: 1, nome: "Feijão", preco: 10},
    {id: 2, nome: "Carne", preco: 50},
    {id: 3, nome: "Frutas", preco: 70},
    {id: 4, nome: "sopas", preco: 40}
];

const tiposPratos = [
    {id: 1, nome: "Individual", tamanho: "Médio"},
    {id: 2, nome: "Kids", tamanho: "Pequeno"},
    {id: 3, nome: "Duas pessoas", tamanho: "Grande"},
    {id: 4, nome: "Três pessoas", tamanho: "Extra grande"},
];



// Criar uma função

// Rota principal                req = requesição (pergunta)      res = resposta
app.get('/', (req, res) => {
    res.send("Bem vindo ao meu projeto de alimentos do Kigut e Cia");
});

// produtos
app.get('/produtos', (req, res) => {
    res.send(alimentos);
});

// tipos de pratos
app.get('/tipos-de-pratos', (req, res) => {
    res.send(tiposPratos);
});

// Executando um servidor
app.listen(port, () => {

    console.log(`Servidor do projeto, rodando em http://localhost:${port}`);
});