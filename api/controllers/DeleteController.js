class DeleteController{
    enviarDelete(req,res){
        res.send({'Delete':'OK'})
    }
}
module.exports = new DeleteController()