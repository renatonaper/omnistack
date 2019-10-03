const express = require('express');

const app = express();
//a barra server para seguir a rota 
//req receber as informações dos usuários 
//res server para devolver uma resposta 
//json anotação de objeto em java script
app.put('/users/:id',(req,res) => {

    //GET (pegar dados), POST (criar uma nova info no back)
    // PUT (Editar alguma info), DELETE (apagar)
    // req.params para edição e delete
    // req.query para filtrar 
    // req.body accessar o corpo da requisição

    app.use(express.json());
    return res.json(req.body);
    //return res.json({id: req.params.id,idade: req.query.idade });
    //return res.json({message: "teste" });
});

//nodemon é só para desenvolvimento 
//express é um microframework 
//express vai ajudar a definição de rotas

app.listen(3333);