const input = document.querySelector(".textInput");
const button = document.querySelector(".btnInclud");

let tarefas = [];

const addTarefa = () => {
  tarefas.push(input.value);
  input.value = "";
};
