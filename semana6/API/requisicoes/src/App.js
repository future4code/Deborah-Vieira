import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    nomeInput: "",
    emailInput: "",
  };

  componentDidMount = () => {
    this.buscaUser();
  };

  /* LISTA USUÁRIOS */
  buscaUser = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Deborah-Viana-mello",
          },
        }
      )
      .then((resposta) => {
        /*  window.alert("Todos os usuários cadastrados"); */
        this.setState({ users: resposta.data });
        console.log(resposta);
      })
      .catch((erro) => {
        /*  window.alert("Não há usuários cadastrados"); */
        console.log(erro);
      });
  };

  criarUser = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    /* Requisição */
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Deborah-Viana-mello",
          },
        }
      )
      .then((resposta) => {
        // alert("Usuário criado com sucesso!");
        console.log(resposta);
        this.buscaUser();
      })
      .catch((erro) => {
        // alert("Falha ao criar um usuário.");
        console.log(erro);
      });
  };

  /* Eventos dos campos input */
  onChangeInputName = (event) => {
    this.setState({ nameInput: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ emailInput: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div>
          <input
            value={this.state.nameInput}
            placeholder={"Digite seu nome"}
            onChange={this.onChangeInputName}
          />

          <input
            value={this.state.emailInput}
            placeholder={"Digite seu email"}
            onChange={this.onChangeInputEmail}
          />

          <button onClick={this.criarUser}>Enviar</button>
        </div>
        {this.state.users.map((usuarios) => {
          return (
            <p key={usuarios.id}>
              {usuarios.name}
              <button>X</button>;
            </p>
          );
        })}
        <button>Voltar</button>
      </div>
    );
    console.Log(this.users);
  }
}

export default App;
