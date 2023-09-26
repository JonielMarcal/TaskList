const input = document.querySelector(".textInput");
const button = document.querySelector(".btnInclud");
const ULs = document.querySelector(".listaCompleta");

let tarefas = [];

const addTarefa = () => {
  if (input.value.trim() === "") {
    alert("Favor, informe uma tarefa!");
  } else {
    tarefas.push({
      nome: input.value,
      concluida: false,
    });
    input.value = "";
    mostrarTarefa();
  }
};

const mostrarTarefa = () => {
  novaLista = "";

  tarefas.map((item, index) => {
    novaLista =
      novaLista +
      `
        <li class="lista ${item.concluida ? "none" : "lista"}">
            <button class="buttonConcluir" onclick="concluirTarefa(${index})">Concluir</button>
            <span>${item.nome}</span>
            <button class="buttonExcluir" onclick="excluirTarefa(${index})">Excluir</button>
        </li>
        
        `;
  });
  ULs.innerHTML = novaLista;
  localStorage.setItem("lista", JSON.stringify(tarefas));
};

const excluirTarefa = (index) => {
  tarefas.splice(index, 1);
  mostrarTarefa();
};

const concluirTarefa = (index) => {
  tarefas[index].concluida = !tarefas[index].concluida;
  mostrarTarefa();
};

const salvarLocalStorafe = () => {
  const tarefasLocalStorage = localStorage.getItem("lista");
  tarefas = JSON.parse(tarefasLocalStorage);
  mostrarTarefa();
};
salvarLocalStorafe();
