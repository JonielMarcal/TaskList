class DeleteController{
  delete(req,res){
        res.send({'Delete':'OK'})
    }
}
module.exports = new DeleteController()