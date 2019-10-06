const express = require('express');
const mongoose = require('mongoose');
const routes  = require('./routes'); 
// tem o barra pq esse é um arquivo quq já tem

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-afykw.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);

//portquiz ? Testar portas 
//a barra server para seguir a rota 
//req receber as informações dos usuários 
//res server para devolver uma resposta 
//json anotação de objeto em java script

//req query = Acessar a query dos params (para filtros)
//req params = Acessar route params (para edição , delete )
//req body = Acessar o corpo da requisição (para criação e edição de registros)

/*
app.post('/users', (req,res) => {
    return res.json(req.body);
});
*/
//nodemon é só para desenvolvimento 
//express é um microframework 
//express vai ajudar a definição de rotas
