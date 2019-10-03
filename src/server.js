const express = require('express');
const routes  = require('./route');

const app = express();
//a barra server para seguir a rota 
//req receber as informações dos usuários 
//res server para devolver uma resposta 
//json anotação de objeto em java script


//nodemon é só para desenvolvimento 
//express é um microframework 
//express vai ajudar a definição de rotas
app.use(express.json());
app.use(routes);

app.listen(3333);