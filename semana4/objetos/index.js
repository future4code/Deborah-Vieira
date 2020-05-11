/*Funçao para popular o objeto */
function popularPost() {
  //Pegando os valores do campo input
  let titulo = document.getElementById("titulo");
  console.log(titulo);
  let autor = document.getElementById("autor");
  let conteudo = document.getElementById("conteudo");

  //Setando o valor de cada propriedade
  const tituloValor = titulo.value;
  const autorValor = autor.value;
  const conteudoValor = conteudo.value;

  /*Objeto */
  const post = {
    titulo: "",
    autor: "",
    conteudo: "",
  };

  //Recebendo o valor dos campos inputs
  post.titulo = tituloValor;
  post.autor = autorValor;
  post.conteudo = conteudoValor;

  //Array
  let conteudoDoPost = [];
  conteudoDoPost.push(post);
  console.log(conteudoDoPost);

  for (let elemento of conteudoDoPost) {
    const listaDePost = document.querySelector("ul");
    listaDePost.innerHTML +=
      "<li>" +
      " Titúlo: " +
      elemento.titulo +
      " Autor: " +
      elemento.autor +
      " Conteúdo: " +
      elemento.conteudo +
      "</li>";
  }
}
