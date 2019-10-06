//index (lista de sessoes), show (listar uma sessao), store (criar), update, destroy(deletar)

module.exports= {
    store(req,res){
        return res.json({message: "Hello World"});
    }
};