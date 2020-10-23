const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


if((operacao !== "" && num1 !== 0) || (num2 !== 0 && num1 !== 0) ){

switch(operacao){
     case "soma":
        console.log("\x1b[35m Resultado " + (num1 + num2))  
     break
     case "sub":
      console.log("\x1b[35m Resultado " + (num1 - num2))  
     break
     case "mult":
      console.log("\x1b[35m Resultado " + (num1 * num2))  
     break
     case "div":
      console.log("\x1b[35m Resultado " + (num1 / num2))  
     break
     
}
}else{
   console.log("Esperava 3 parâmetros")
}


