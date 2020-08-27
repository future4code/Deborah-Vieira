import React from "react";
import { baseUrl, axiosConfig } from "../constantes/apiConstants";
import axios from "axios";
import styled from "styled-components";

const Lista = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  margin-left: 5px;
  font-size: 1em;
  margin: 1em;
  padding: 0.1em 1em;
  background-color: palevioletred;
  border-radius: 3px;
  color: #fff;
  border: none;

  &:hover {
    color: palevioletred;
    background-color: #fdf;
  }
`;
class ListUser extends React.Component {
  state = {
    users: [],
  };

  //chamando a função
  componentDidMount = () => {
    this.getUsers();
  };

  /* Pega users cadastrados da api */
  getUsers = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ users: response.data });
    } catch (error) {
      console.log("Error");
    }
  };

  /* Função deletar usuário */
  userDelete = (userId) => {
    axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.getUsers();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    console.log(this.users);
    return (
      <div>
        {this.state.users.map((user) => {
          return (
            <Lista key={user.id}>
              {user.name}
              <Button onClick={() => this.userDelete(user.id)}>
                {" "}
                Deletar{" "}
              </Button>
            </Lista>
          );
        })}
      </div>
    );
  }
}

export default ListUser;
