/**
  
 */
let cartaUsuario1 = comprarCarta();
let cartaUsuario2 = comprarCarta();
let somaCartasUsuarios = cartaUsuario1.valor + cartaUsuario2.valor;

let cartaComputador1 = comprarCarta();
let cartaComputador2 = comprarCarta();
let somaCartasComputadores = cartaComputador1.valor + cartaComputador2.valor;

console.log("Bem vindo ao jogo de Blackjack!");

//Inicio de jogo
let confirma = confirm("Quer iniciar uma nova rodada?");
if (confirma === true) {
  console.log(
    " Usuário - cartas: " +
      cartaUsuario1.texto +
      " " +
      cartaUsuario2.texto +
      " - " +
      " Pontuação " +
      somaCartasUsuarios
  );
  /* /**Carta computador */
  console.log(
    "Computador - cartas: " +
      cartaComputador1.texto +
      " " +
      cartaComputador2.texto +
      " - " +
      " Pontuação " +
      somaCartasComputadores
  );
} else {
  console.log("O jogo acabou!!!");
}

//Ganhador
if (confirma === false) {
  console.log("");
} else if (somaCartasUsuarios > somaCartasComputadores) {
  console.log("o Usuário Ganhou!");
} else if (somaCartasUsuarios < somaCartasComputadores) {
  console.log("O computador Ganhou");
} else if (somaCartasUsuarios === somaCartasComputadores) {
  console.log("empate");
}
