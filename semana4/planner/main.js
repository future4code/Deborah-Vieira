function criarTarefa() {
  let input = document.querySelector("input");

  //nova tarefa recebe o valor do campo digitado.
  let novaTarefa = input.value

  if (novaTarefa === "") {
    alert("Insira uma tarefa");

  } 
  let listaSemana = document.querySelector("#diaDaSemana");
  let lista = listaSemana.value;
  console.log(lista);

  let listaTarefas = document.querySelector("#" + lista + " .ul-tarefas ");
  console.log(listaTarefas);
  listaTarefas.innerHTML += "<li>" + novaTarefa + "</li>";

  //limpando o campo
  input.value = "";

  
  
}

 