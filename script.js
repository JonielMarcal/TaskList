const input = document.querySelector(".textInput");
const button = document.querySelector(".btnInclud");
const ULs = document.querySelector(".listaCompleta");

let tarefas = [];

const addTarefa = () => {
  tarefas.push({
    tarefa: input.value,
    concluida: false,
  });
  input.value = "";
  mostrarTarefa();
};

const mostrarTarefa = () => {
  novaLista = "";

  tarefas.map((item, index) => {
    novaLista =
      novaLista +
      `
        <li class="lista">
            <button onclick="concluirTarefa(${index})">Concluir</button>
            <p>${item}</p>
            <button onclick="excluirTarefa(${index})">Excluir</button>
        </li>
        `;
  });
  ULs.innerHTML = novaLista;
};

const excluirTarefa = (index) => {
  tarefas.splice(index, 1);
  mostrarTarefa();
};

const concluirTarefa = (index) => {
  console.log("Posicao", index);
};
