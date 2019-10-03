const express = require('express');

const routes = express.Router();

routes.put('/users/',(req,res) => {

    //GET (pegar dados), POST (criar uma nova info no back)
    // PUT (Editar alguma info), DELETE (apagar)
    // req.params para edição e delete
    // req.query para filtrar 
    // req.body accessar o corpo da requisição

     //app.use(express.json());
    return res.json(req.body);
    //return res.json({id: req.params.id,idade: req.query.idade });
    //return res.json({message: "teste" });
});

module.exports = routes;