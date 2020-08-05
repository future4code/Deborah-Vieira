/*Funçao para popular o objeto */
function popularPost() {
  //Pegando os valores do campo input
  let titulo = document.getElementById("titulo");  
  let autor = document.getElementById("autor");
  let conteudo = document.getElementById("conteudo");
  let imagem = document.getElementById("imagem")
  let container = document.getElementById('container')

  //Setando o valor de cada propriedade
  const tituloValor = titulo.value;
  const autorValor = autor.value;
  const conteudoValor = conteudo.value;
  const imagemValor = imagem.value ;
 

  /*Objeto */
  const post = {
    titulo: "",
    autor: "",
    conteudo: "",
    imagem: "",
  };

  //Recebendo o valor dos campos inputs
  post.titulo = tituloValor;
  post.autor = autorValor;
  post.conteudo = conteudoValor;
  post.imagem = imagemValor;
  

  //Array
  let conteudoDoPost = [];
  conteudoDoPost.push(post);
  //console.log(conteudoDoPost);

  for (let elemento of conteudoDoPost) {
    const listaDePost = document.querySelector("ul");
    listaDePost.innerHTML += 
      "<li>" +
      " Titúlo: " +
      elemento.titulo +
      " Autor: " +
      elemento.autor +
      " Conteúdo: " +
      elemento.conteudo   +
      "Imagem : "       + 
   
     elemento.imagem
      "</li>";

      container.innerHTML += `<img src=${imagem}>`
    
  }
}


function carregaPost(){
  let post = window.open("post.html","post")
}