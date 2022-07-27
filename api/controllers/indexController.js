class IndexController{
    index(req,res){
        res.send('Parabens!')
    }
}

module.exports = new IndexController()