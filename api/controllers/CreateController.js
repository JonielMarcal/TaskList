class CreateController{
    index(req,res){
        console.log("teste: ",req.body)
        res.send({'Create':'OK'})
    }
}
module.exports = new CreateController()