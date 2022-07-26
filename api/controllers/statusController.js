class StatusController{
    enviarStatus(req,res){
        res.send({'Status':'OK'})
    }
}
module.exports = new StatusController()