/*Exercícios de interpretação de código */

/*Exercicio 1-R: A função conversorDeMoeda transforma o valor 
digitado em dolar pelo usuário para o real. A variavel cotação recebe o valor
cotado, retorno o valor digitado multiplicado pela cotação. A variavel meuDinheiro
recebe a chamada da função com o argumento, e o console.log() mostrará na tela
o valor convertido para real nesse caso 573,00, cotação de hoje. 

/*Exercicio 2-R: A função investeDinheiro calcula o valor de tipos de investimentos
passando 02 parametros. Dependendo do investimento escolhido o valor será
alterado. A variavel novoMontate recebe a chamada da função e seu argumento, retornará
em tela o valor de 165,00 de ações.A variavel segundoMontante será um erro de 
tipo de investimento informado incorreto,pois o tesouro direto não está 
listado como um tipo de investimento.  */

/*Exercicio 3-R: O tamanho do array numeros é 13. O for está iterando esse array
para cada numero par, adcionar no array1, para os numeros impares adcionar no array2
Quantidade de numeros : 13, 
array1: 5 
array2: 7

/*Exercicio 4-R:  */

/*Lógica de programação*/ ///

/*1. Cite 3 maneiras de se percorrer/iterar uma lista. 
 Usando o for, for of, while
Faça um programa para exemplificar.
const numeros = [18, 20, 6, 3, 12];
for (let numero of numeros) {
  console.log(numero);
}

const arrayNum = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayNum.length; i++) {
  const valores = arrayNum[i + 1];
  console.log(valores);
} 

ERRADO CORRIGIR
const mapeando = [1, 2, 3, 4, 5, 6];
let mapeados = mapeando.map(Math.random);
console.log(mapeados);

/*2-R: 
A = False
B = False
C = True
D = True
E = False

*/

/*3-R: Não funciona porque a variavel quantidadeDeNumerosPares
e o console está multiplicado ao inves de usar o resto da divisao

TRAVEI AQUI
const quantidadeDeNumerosPares = 3;
let i = 0;
while (i <= quantidadeDeNumerosPares) {
  console.log(i % 2);
}
 */

/* let i = 0;
while (i < 10) {
  console.log(i);
  i++;
} */

/*4-R:
Função classificar triangulo

function classificarTriangulo(a, b, c) {
  if (a === b && b === c && c === a) {
    console.log("O Triangulo é Equilátero!");
  } else if (a === b || b === c || a === c) {
    console.log("O Triangulo é Isóceles!");
  } else {
    console.log("O Triangulo é Escaleno!");
  }
}

classificarTriangulo(2, 1, 1);*/

/*5-R:
 function classificarNumeros(num1, num2) {
  if (num1 > num2) {
    Console.log("O " + num1 + " é maior que o " + num2);
  } else {
    console.log("O " + num2 + " é maior que o " + num1);
  }

  if (num1 % num2 != 0) {
    console.log("O " + num1 + " não é divisivel por " + num2);
  } else {
    console.log("O " + num1 + " é divisivel por " + num2);
  }
}

classificarNumeros(40, 30);
*/

/* FUNÇÕES *******/
/* 1:R 
function imprimeMaiorEMenor(array) {
  listaArray = [];

}
*/

/* OBJETOS ******/
/* 1-R: Objeto é uma coleção de dados, dentro desses dados são armazenadas
propriedades, chave e valor de cada dado. Array é uma lista ordenada de vários
dados, que podemos acessar pelo indice.

 

/* Questão 3 -
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
*/

/* Questão 4 - 

const pessoa = {
  nome: "Deborah",
  idade: 30,
  email: "deborahvn19@gmail.com",
  endereco: "Rua das acácias, 363 - Brasília",
};
pessoa.nome = "Anônimo";

/* function anonimizarPessoa() {
  return pessoa.nome;
}
console.log(pessoa.nome);
*/

/****************Funções de array******************** */
/*Questão 1
const idades = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 },
];

const exercicioA = idades.filter((idade, index, array) => {
  return idade >= 20;
});

const exercicioA = idades.filter((idade, index, array) => {
  return idade < 20;
});
*/

/**QUESTÃO 2 

const array = [1, 2, 3, 4, 5, 6];
// A
/*function elementosMultiplicadosPorDois(elementos) {
  console.log(elementos * 2);
} 

array.forEach(elementosMultiplicadosPorDois);*/

/* B 
function multiplicaPorTres(valores) {
  console.log(valores * 3);
}
//array = array.toString();
array.forEach(multiplicaPorTres);
*/

/* Questão 3 
const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8 },
  { nome: "João", idade: 20, altura: 1.3 },
  { nome: "Pedro", idade: 15, altura: 1.9 },
  { nome: "Luciano", idade: 22, altura: 1.8 },
  { nome: "Artur", idade: 10, altura: 1.2 },
  { nome: "Soter", idade: 70, altura: 1.9 },
];

/* A 
const filtro = pessoas.filter((pessoa) => {
  return pessoa.idade > 14 && pessoa.idade <= 60 && pessoa.altura > 1.5;
});
console.log(filtro);*/

/* B não podem entrar no brinquedo.
const pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
  return (pessoas.idade < 14 && pessoas.altura > 1.0) || pessoas.idade > 60;
});
console.log(pessoasNaoAutorizadas);*/

/* Questão 4 

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

let consultasNaoCanceladas = consultas.map((consulta, index, array) => {
  if (consulta.cancelada === true) {
    return `Olá , ${consulta.nome} estamos enviando essa mensagem para lembra-lo(a)
  da sua consulta no dia ${consulta.dataDaConsulta} . Por favor, acuse
  o recebimento deste e-mail.`;
  }
});

let consultasCanceladas = consultas.map((consulta, index, array) => {
  if (consulta.cancelada === false) {
    return `Olá , ${consulta.nome} Infelizmente, sua consulta marcada
    para o dia ${consulta.dataDaConsulta} .foi cancelada. Se quiser, pode entrar em 
    contato conosco para remarcá-la.`;
  }
});

console.log(consultasNaoCanceladas);
console.log(consultasCanceladas);
/* const numeros = [10, 20, 25, 7, 30];

let strings = numeros.map((numero, index, array) => {
  return `O elemento ${index} é ${numero}`;
});

console.log(strings);
 */
