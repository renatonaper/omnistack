const express = require('express');
const routes  = require('./routes'); 
// tem o barra pq esse é um arquivo quq já tem

const app = express();
//a barra server para seguir a rota 
//req receber as informações dos usuários 
//res server para devolver uma resposta 
//json anotação de objeto em java script

//req query = Acessar a query dos params (para filtros)
//req params = Acessar route params (para edição , delete )


app.put('/users/:id', (req,res) => {
    return res.json({id: req.params.id});
});

//nodemon é só para desenvolvimento 
//express é um microframework 
//express vai ajudar a definição de rotas
app.use(express.json());
app.use(routes);

app.listen(3333);