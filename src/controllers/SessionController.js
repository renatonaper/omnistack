//index (lista de sessoes), show (listar uma sessao), store (criar), update, destroy(deletar)
const User = require('../models/User');
module.exports= {
    async store(req,res)
    {
        //return res.json({message: "Hello World"});
        //quando {} na declaracao  da variavel  ele está falando que é eu usar a variavel para buscar dentro do body
        //colocando o await na frente da chamada ele vai entender que ele só prosseguir quando terminar a chamada 
        const {email} = req.body; 
        //const user = await User.create({email});
        // como o mesmo nome da variavel é da chave fica mais fácil
        let user = await User.findOne({email}); 
        if (!user){
            user = await User.create({email});
        }
        return res.json(user);
    }
};