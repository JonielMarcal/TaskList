class IndexController{
    enviarResposta(req,res){
        res.send('Parabens!')
    }
}

module.exports = new IndexController()