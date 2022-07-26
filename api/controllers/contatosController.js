class ContatosController{
    enviarContatos(req,res){
        res.send({'Contatos':'OK'})
    }
}
module.exports = new ContatosController()