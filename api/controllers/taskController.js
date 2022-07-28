class TaskController{
    create(req,res){
        const {Nome,Horario,Data} = req.body
        console.log(Nome, Horario, Data)
        res.send({'Create':'OK'})

    }

    read(req,res){
        res.send({'Ler':'OK'})
    }

    update(req,res){
        res.send({'Update':'OK'})
    }

    delete(req,res){
        res.send({'Delete':'OK'})
    }
}

module.exports = new TaskController();
