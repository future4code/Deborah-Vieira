const tarefa = process.argv[2]
const tarefas = ["Estudar"]

const exibeTarefas = () => {
    tarefas.push(tarefa)
    return console.log(`Tarefas adicionadas com sucesso! \n Tarefas: ${tarefas}` 
    )
}

exibeTarefas()

