/*A- Acontece um erro, ao atribuir um numero
a uma variavel que só recebe string*/
//const minhaString: string = 20;

//B- Recebe número ou string usando o union type
const meuNumero: number | string = "amora";

//C-
enum arcoIris {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL  = "Azul",
  ANIL  = "Anil",
  VIOLETA = "Lilas",
  
}

type pessoa = {
 nome: string,
 idade: number,
 corFavorita: arcoIris,
}


const person : pessoa = {
    nome: "Deborah",
    idade: 30,
    corFavorita: arcoIris.AMARELO
}

const cadastro : pessoa = {
    nome: "joao",
    idade: 23,
    corFavorita: arcoIris.AZUL
}

const auxilioEmergencial : pessoa = {
    nome: "Carol",
    idade: 35,
    corFavorita: arcoIris.VIOLETA
}

const fgts : pessoa = {
    nome: "Carlos",
    idade: 25,
    corFavorita: arcoIris.VERMELHO
}