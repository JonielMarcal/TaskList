
const taskRepositorys = require('../repositories/taskRepositorys');

class TaskController{
    create(req,res){
        const {Nome,Horario,Data,Local,Prioridade} = req.body
        console.log(Nome, Horario, Data, Local, Prioridade)
        res.send({'Create':'OK'})

    }

    async read(req,res){
        const tasklist = await taskRepositorys.findAll();
        res.json(tasklist);
    }

    update(req,res){
        res.send({'Update':'OK'})
    }

    delete(req,res){
        res.send({'Delete':'OK'})
    }
    async show(req,res){
        const {id} = req.params;
        console.log('id: ' + id);
        const tasklist = await taskRepositorys.findById(id);

        if(!tasklist) {

            return res.status(404).json({error: 'Tarefa nao encontrada'});
        }

        res.json(tasklist);      
    }
    local(req,res){

    }
    prioridade(req,res){

    }
}

module.exports = new TaskController();
