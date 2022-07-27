class UpdateController{
    update(req,res){
        res.send({'Update':'OK'})
    }
}
module.exports = new UpdateController()