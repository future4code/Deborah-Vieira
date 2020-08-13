import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

//usando styled components para estilização dos campos.
const Formulario = styled.form`
  padding-top: 60px;
  display: block;
`;

const Campos = styled.input`
  display: block;
  width: 50%;
  border: 4px solid #7c7c7c;
  background: none;
  padding: 7px 10px;
  font-size: 14px;
`;

const Botao = styled.button`
  background-color: coral;
  font-size: 14px;
  color: #fff;
  height: 100%;
  width: 30%;
`;

class App extends React.Component {
  //no estado há uma lista de posts (um array de objetos) mocada.
  state = {
    posts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        nomeUsuario: "Deborah",
        fotoUsuario: "https://pichghgjgjhsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },

      {
        nomeUsuario: "Debe",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
    ],

    //aqui as variaveis para os inputs controlado
    valorInputNome: "",
    valorInputEmail: "",
    valorInputComentario: "",
  };

  //Função adiciona post.
  adicionaPost = () => {
    // Colocamos na variavel novoPost o objeto que representa uma nova post
    //acessamos os valores das variaveis do estado para serem o estado do novo post adicionado
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputEmail,
      fotoPost: this.state.valorInputComentario,
    };

    //Copia array de posts e adiciona um post no final
    const novosPost = [...this.state.posts, novoPost];
    // Define o estado "posts" como a variavel "novoPost"
    this.setState({ posts: novosPost });
  };

  //Essa função é chamada toda vez que algo é digitado no valorInputNome
 // e define o estado "valorInputNome" como o valor atual do input, que vem do event
  onChangeInputNome = (event) => {    
    this.setState({ valorInputNome: event.target.value });
  };

//Essa função é chamada toda vez que algo é digitado no valorInputEmail
 // e define o estado "valorInputEmail" como o valor atual do input, que vem do event
  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };

//Essa função é chamada toda vez que algo é digitado no valorInputComentario
 // e define o estado "valorInputComentario" como o valor atual do input, que vem do event
  onChangeInputComentario = (event) => {
    this.setState({ valorInputComentario: event.target.value });
  };

  //Tudo o que aparece na tela está no render
  render() {
    /*Aqui é passado para a variavel listaPost o estado da aplicação do array post,
    dessa forma uma nova lista criada com a função map que retorna um array de mesmo tamanho.
    */
    const listaPost = this.state.posts.map((post) => {
      return (
        //Aqui pego o argumento do map (post) e acesso as propriedades de cada objeto post, pois o que
        //vem dentro do argumento é um objeto de post inteiro.
        <div>
          {post.nomeUsuario}
          {post.fotoUsuario}
          {post.fotoUsuario}
        </div>
      );
    });

    return (
      <div className={"app-container"}>
        {/* Aqui renderiza a lista de posts com a variavel acima */}
        {listaPost}

        <div>
          {/* Aqui é o formulário estilizado e seus inputs recebem a funcão e variavel para serem controlados. */}
          <Formulario>
            <input
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />
          </Formulario>
          <input
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"Email"}
          />

          <input
            value={this.state.valorInputComentario}
            onChange={this.onChangeInputComentario}
            placeholder={"Comentario"}
          />
          {/* Recebe a função para adcionarmos outro post */}
          <Botao onClick={this.adicionaPost}>Adicionar</Botao>
        </div>
      </div>
    );
  }
}

export default App;
