import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  margin: 5px;
  width: 20%;
  justify-content: center;
`;

const BackButton = styled.button`
  margin-left: 5px;
  margin-top: 5px;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

class SignPage extends React.Component {
  state = {
    name: "",
    email: "",
  };

  /* Metodos input controlados */
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  /* Criando usuário com requisição a API */
  createUser = () => {
    //abstraindo em variáveis
    const axiosConfig = {
      headers: {
        Authorization: "Deborah-Viana-mello",
      },
    };

    const body = {
      name: this.state.name,
      email: this.state.email,
    };

    /* Requisição */
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then((resposta) => {
        alert("Usuário criado com sucesso!");
        //limpa campos
        this.setState({ name: "", email: "" });
        //this.buscaUser();
      })
      .catch((erro) => {
        alert("Falha ao criar um usuário.");
        console.log(erro);
      });
  };

  render() {
    return (
      <Container>
        <Input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <Input
          placeholder="Email"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <BackButton onClick={this.createUser}>Enviar</BackButton>
      </Container>
    );
  }
}
export default SignPage;
