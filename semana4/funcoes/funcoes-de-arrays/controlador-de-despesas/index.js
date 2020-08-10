let arrayDespesas = []

function addDespesas(){
    //pegando o valor dos campos
    const valorDespesa = document.getElementById('valor-despesa')
    const tipoDespesa = document.getElementById("casa", 'viagem', 'escritorio')
    const descricaoDespesa = document.getElementById('descricao')

    //objeto de despesa
    const novaDespesa = {
        valor = valorDespesa.value,
        tipo = tipoDespesa.value,
        descricao = descricaoDespesa.value
    }

    arrayPosts.push(novaDespesa)
    //limpando os campos
    valorDespesa.value =""
    tipoDespesa.value =""
    descricaoDespesa.value =""
    console.log(arrayDespesas)
    
}

//inserindo a despesa no html
