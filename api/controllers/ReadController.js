class ReadController{
    enviarRead(req,res){
        res.send({'Read':'OK'})
    }
}
module.exports = new ReadController()