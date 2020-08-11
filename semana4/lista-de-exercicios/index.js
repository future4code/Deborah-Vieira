/*Exercícios de interpretação de código */

/*Exercicio 1-R: Transforma o valor digitado pelo usuário em dolar para o real.
 A variavel cotação recebe o valor digitado.
 A variavel meuDinheiro recebe a chamada da função com o argumento, 
 e o console.log() mostrará na tela
 o valor convertido para real nesse caso multiplicado por 100. 


/*Exercicio 2-R: A função investeDinheiro calcula o valor de tipos de investimentos
passando 02 parametros. Dependendo do investimento escolhido o valor será
alterado. A variavel novoMontante recebe a chamada da função e seu argumento, retornará
em tela o valor de 165.A variavel segundoMontante será um erro de 
"tipo de investimento", pois o tesouro direto não está listado como um tipo de 
investimento. Ele irá cair no default e irá informar que o tipo de investimento
não existe.  */


/*Exercicio 3-R: É uma lista de números que é iterada usando o (for of) 
e separando os multiplos de 2 em um array e os que não são em outro.
O for está iterando esse array para cada numero par, adcionar no array1, 
para os numeros impares adcionar no array2
Quantidade de numeros : 14, 
array1: 6
array2: 8


/*Exercicio 4-R:  
O código contem um array que é iterado e duas variaveis que são usadas para guardar
numeros de infinito e 0.
Se o numero for menor que o infinito será armazenado na variavel numero1
se for maior que 0, ele será armazenada na variavel numero 2. 
Ao final será impressso o maior numero 1590 e o menor -10


/*Lógica de programação*/ 

/*Exercicio 1-R: Cite 3 maneiras de se percorrer/iterar uma lista. 
 Usando o for, for of, while

const numeros = [18, 20, 6, 3, 12];

Exemplo 01
for (let numero of numeros) {
  console.log(numero);
}

Exemplo 02
const arrayNum = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayNum.length; i++) {
  console.log(arrayNum[i]);
} 

Exemplo 03
const mapeando = [1, 2, 3, 4, 5, 6];
let i =0;
while(i < mapeando.length){
  console.log(array[i])
  i++
}


/*Exercicio 2-R:
A = False
B = False
C = True
D = True
E = True

*/

/*Exercicio 3-R: E não existe o incremento para que satisfaça a condição, corre
 o risco de um loop infinito. E 

    function NumerosPares() {
     const quantidadeDeNumerosPares 
     let i = 0;
      while (i < quantidadeDeNumerosPares) {
      console.log(i * 2);
      i++;
    } 
   }
 */


/* Exercicio 4-R:
Função classificar triangulo
function classificarTriangulo(a, b, c) {
  if (a === b && b === c) {
    console.log("O Triangulo é Equilátero!");
  } else if (a === b || b === c || a === c) {
    console.log("O Triangulo é Isóceles!");
  } else {
    console.log("O Triangulo é Escaleno!");
  }
}
classificarTriangulo(2, 1, 1);
*/

/*Exercicio 5-R:
function classificarDoisNumeros(num1,num2) {
  let maiorNumero = 0
  let menorNumero = 0

  if(num1 > num2) {
    maiorNumero = num1
    menorNumero = num2
  } else {
    maiorNumero = num2
    menorNumero = num1
  }
  console.log("O maior é ", maiorNumero)

  //aqui é feita a comparação de quem é divisivel por quem.
  if(menorNumero % maiorNumero === 0) {
    console.log(menorNumero.toString(), " é divisível por ", maiorNumero.toString())
  } else {
    console.log(menorNumero.toString(), " não é divisível por ", maiorNumero.toString())
  }

  if(maiorNumero % menorNumero === 0) {
    console.log(maiorNumero.toString(), " é divisível por ", menorNumero.toString())
  } else {
    console.log(maiorNumero.toString(), " não é divisível por ", menorNumero.toString())
  }

  console.log("A diferença entre eles é ", maiorNumero - menorNumero)
}




/* FUNÇÕES ******
// Exercicio 1:R 
//resolução labenu

function imprimeMaiorEMenor(array) {
  arrayDeNumeros.sort(function(num1, num){
    return num1 > num2;
});

const segundoMenorNumero = arrayDeNumeros[1];

const segundoMaiorNumero = arrayDeNumeros[array.lenght - 2];

console.log(segundoMenorNumero);
console.log(segundoMaiorNumero);
}

Exercicio 2:R
const messageAlerta =  () => {
  alert("Hello Future4");
}

messageAlerta()
*/



/* OBJETOS ******/
/* Exercicio 1-R: Objeto é uma coleção de dados relacionados, dentro desses dados são armazenadas
propriedades, chave e valor de cada dado. Array é uma lista ordenada de vários
dados, que podemos acessar pelo indice começando pelo 0.

Exercicio 2-R:
function criarRetangulo(lado1, lado2){
  return {
    largura: lado1,
    altura: lado2,
    perimetro: (2 * (lado1 + lado2) ) ,
    area: (lado1 * lado2)

  }
}
 

/* Exercicio 3 -
const filmeFavorito = {
  Titulo: "Comer, rezar e amar",
  Ano: 2010,
  Diretor: "Ryan Murphy",
  Atores: ["Julia Roberts", "James Franco", "Viola Davis", "Javier Bardem"],
};

console.log(
  "Venha assistir ao filme " +
    filmeFavorito.Titulo +
    " de " +
    filmeFavorito.Ano +
    "," +
    " dirigido por " +
    filmeFavorito.Diretor +
    " e estrelado por " +
    filmeFavorito.Atores[0] +
    " " +
    filmeFavorito.Atores[1] +
    "," +
    filmeFavorito.Atores[2] +
    " e " +
    filmeFavorito.Atores[3]
);

Outra forma iterando o array
let listaAtores = ""

for(let i = 0; i < filme.atores.length; i++) {
	if (i !== filme.atores.length - 1) {
		listaAtores += ator + ", "
	} else {
		listaAtores += ator + "."
	}
}

*/

/* Exercicio 4 - 

const pessoa = {
  nome: "Deborah",
  idade: 30,
  email: "deborahvn19@gmail.com",
  endereco: "Rua das acácias, 363 - Brasília",
};

/* function anonimizarPessoa(pessoa) {
  return {
    ...pessoa,
    nome:"ANONIMO"

  }
}

outra forma
function anonimizarPessoa(pessoa) {
	return {
		nome: "ANONIMO",
		idade: pessoa.idade,
		email: pessoa.email,
		endereco: pessoa.endereco
	}
}
*/

/****************Funções de array******************** */
/*Exercicio 1
const idades = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

const adultos = idades.filter((idade, index, array) => {
  return idade >= 20;
});

const crianças = idades.filter((idade, index, array) => {
  return idade < 20;
});
*/

/**Exercicio 2 

const array = [1, 2, 3, 4, 5, 6];
// A
/*const arrayDobro = array.map(numeros => {
  return numeros * 2

}) 

/* B 
const arrayTriplo = array.map(triplos => {
  const multiplicaPorTres = triplos * 3
  return triplo.toString()
})

/*C
const parOuImpar = array.map(numeros => ){
  if(numeros % 2 === 0){
    return numeros + " é par"
  }else{
     return numeros + " é impar"
  }

}

console.log(arrayDobro)
console.log(arrayTriplo)
console.log(parOuImpar)


/* Exercicio 3 
const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

/* A 
const pessoasAutorizadas = pessoas.filter((pessoa) => {
  return pessoa.idade > 14 && pessoa.idade <= 60 && pessoa.altura > 1.5;
});
console.log(pessoasAutorizadas);*/

/* B não podem entrar no brinquedo.
const pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
  return (pessoas.idade < 14 && pessoas.altura > 1.0) || pessoas.idade > 60;
});
console.log(pessoasNaoAutorizadas);*/

/* Exercicio 4 
**essa resolução foi da labenu
const consultas = [
  {
    nome: "João",
    genero: "masculino",
    cancelada: true,
    dataDaConsulta: "01/10/2019",
  },
  {
    nome: "Pedro",
    genero: "masculino",
    cancelada: false,
    dataDaConsulta: "02/10/2019",
  },
  {
    nome: "Paula",
    genero: "feminino",
    cancelada: true,
    dataDaConsulta: "03/11/2019",
  },
  {
    nome: "Márcia",
    genero: "feminino",
    cancelada: false,
    dataDaConsulta: "04/11/2019",
  },
];

const emails = consultas.map((consulta) => {
  let emailFinal = "Olá, "

  if(consulta.cancelada) {
    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Estamos enviando esta mensagem para "

    if(consulta.genero === "feminino") {
      emailFinal += "lembrá-la "
    } else {
      emailFinal += "lembrá-lo "
    }

    emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
    emailFinal += "Por favor, acuse o recebimento deste-email."
  } else {

    if(consulta.genero === "feminino") {
      emailFinal += "Sra. "
    } else {
      emailFinal += "Sr. "
    }

    emailFinal += consulta.nome + ". "

    emailFinal += "Infelizmente sua consulta marcada para o dia "

    emailFinal += consulta.dataDaConsulta + " foi cancelada. "
    emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
  }
  return emailFinal
})



//* Exercicio 5
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

 contas.forEach((contas) => {

  let todasCompras = 0
  conta.compras.forEach((valor) => {
    totalDeCompras += valor
  })

  conta.saldoTotal -= totalDeCompras
}) 

*/