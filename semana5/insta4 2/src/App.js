import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

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

    valorInputNome: "",
    valorInputEmail: "",
    valorInputComentario: "",
  };

  adicionaPost = () => {
    // Colocamos em uma variavel o objeto que representa uma nova post
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputEmail,
      fotoPost: this.state.valorInputComentario,
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const novosPost = [...this.state.posts, novoPost];
    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ posts: novosPost });
  };

  //Acessando os botoes - é chamada toda vez que algo é digitado
  onChangeInputNome = (event) => {
    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };

  onChangeInputComentario = (event) => {
    this.setState({ valorInputComentario: event.target.value });
  };

  render() {
    const listaPost = this.state.posts.map((post) => {
      return (
        <div>
          {post.nomeUsuario}
          {post.fotoUsuario}
          {post.fotoUsuario}
        </div>
      );
    });

    return (
      <div className={"app-container"}>
        {listaPost}

        <div>
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

          <Botao onClick={this.adicionaPost}>Adicionar</Botao>
        </div>
      </div>
    );
  }
}

export default App;
