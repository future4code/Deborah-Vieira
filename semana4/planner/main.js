function criarTarefa() {
  const input = document.querySelector("input");

  //nova tarefa recebe o valor do campo digitado.
  const novaTarefa = input.value;
  if (novaTarefa === "") {
    alert("Digite uma tarefa");
  }

  const listaSemana = document.querySelector("#diaDaSemana");
  const lista = listaSemana.value;
  console.log(lista);

  let listaTarefas = document.querySelector("#" + lista + " .ul-tarefas ");
  console.log(listaTarefas);
  listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>";

  //limpando o campo
  input.value = "";
}
