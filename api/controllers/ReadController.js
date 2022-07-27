class ReadController{
   read(req,res){
        res.send({'Ler':'OK'})
    }
}
module.exports = new ReadController()