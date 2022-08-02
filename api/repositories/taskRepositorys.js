let tasklist = [
    {   
        id: 1234,
        nome:'Comprar Pão',
        horario:'15:00',
        data:'20/08/2022',
        local:'Citro 5',
        prioridade:'Baixa'
    },  
];

class TaskListRepository {
    findAll(){
        return new Promise((resolve) => resolve(tasklist));
    }
    findById(id){
        return new Promise((resolve) => resolve(
            tasklist.find((tasklist) => tasklist.id == id)
        ));
    };
    delete(id){
        return new Promise((resolve) => {
            tasklist = tasklist.filter((tasklist) => tasklist.id !== id);
            resolve();
        });
    }
};

module.exports = new TaskListRepository();