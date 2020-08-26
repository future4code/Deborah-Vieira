import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes/apiConstants";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 2px;
  box-shadow: 1px 1px 2px #333333;
  padding: 3px;
  border: 1px solid #000000;
  margin-left: 5px;
`;

const Button = styled.button`
  margin-left: 5px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: palevioletred;
  border-radius: 3px;
  color: #fff;
  border: none;

  &:hover {
    color: palevioletred;
    background-color: #fdf;
  }
`;

class PageForm extends React.Component {
  state = {
    nameInput: "",
    emailInput: "",
  };

  onChangeName = (e) => {
    this.setState({ nameInput: e.target.value });
  };

  onChangeEmail = (e) => {
    this.setState({ emailInput: e.target.value });
  };

  /* Função para enviar para a api os dados no formulário */
  userCreate = () => {
    const body = {
      name: this.state.nameInput,
      email: this.state.emailInput,
    };

    /* requisição a api*/
    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        alert("Usuário criado com sucesso!");
        console.log("deu certo");
        this.setState({ nameInput: "", emailInput: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div>
        <Input
          placeholder="name"
          value={this.state.nameInput}
          onChange={this.onChangeName}
        />
        <Input
          placeholder="email"
          value={this.state.emailInput}
          onChange={this.onChangeEmail}
        />
        <Button onClick={this.userCreate}>Criar usuário</Button>
      </div>
    );
  }
}

export default PageForm;
