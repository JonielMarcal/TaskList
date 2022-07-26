class UpdateController{
    enviarUpdate(req,res){
        res.send({'Update':'OK'})
    }
}
module.exports = new UpdateController()