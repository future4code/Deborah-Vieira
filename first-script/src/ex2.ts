

function obterEstatisticas(numeros: Array<number> ){

    const numerosOrdenados = numeros.sort(
        (a: number, b : number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}



type amostraDados = {
    Numeros : [2,3,6,8,5,20,10],
    obterEstatisticas :(numeros: number) => number
    
   }