class CreateController{
    enviarCreate(req,res){
        res.send({'Create':'OK'})
    }
}
module.exports = new CreateController()