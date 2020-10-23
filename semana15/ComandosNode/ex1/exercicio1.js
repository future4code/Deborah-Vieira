/*a) Como fazemos para acessar os parâmetros
 passados na linha de comando para o Node?*/
 //R: Utilizando o process.argv[posicao]

 /* Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console
  uma mensagem que siga a seguinte estrutura:
  "Olá, (Nome)! Você tem (sua idade) anos." */

  const nome = process.argv[2] 
  const idade = Number(process.argv[3])
  const novaIdade = Number(process.argv[4])

  if((nome !== "" && idade !== 0) || (novaIdade !== 0 && idade !== 0)){
    console.log("\x1b[35m Olá  " + nome +  "! Você tem " + idade + " anos. Em sete anos você terá  " + (idade + novaIdade)  )
  }else{
      console.log("Esperava 3 parâmetros.")
  }
 
