import React from "react";
import styled from "styled-components";
import axios from "axios";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  margin-left: 5px;
`;

const axiosConfig = {
  headers: {
    Authorization: "Deborah-Viana-mello",
  },
};

class UsersListPage extends React.Component {
  state = {
    usersList: [],
  };

  //Monta o componente e ja atualiza a tela com a nova lista
  componentDidMount() {
    this.fetchUsersList();
  }

  /* Requisição busca usuário */
  fetchUsersList = async () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      });
  };

  /* Deleta usuárioo */
  handleUserDeletion = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      )
      .then(() => {
        alert("Usuário apagado com sucesso!");
        this.fetchUsersList();
      })
      .catch((e) => {
        alert("ERRO AO APAGAR USUARIO");
      });
  };

  render() {
    return (
      <ul>
        {this.state.usersList.length === 0 && <div>Carregando...</div>}
        {this.state.usersList.map((user) => {
          return (
            <li>
              {user.name}
              <DeleteButton onClick={() => this.handleUserDeletion(user.id)}>
                {" "}
                X{" "}
              </DeleteButton>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default UsersListPage;
