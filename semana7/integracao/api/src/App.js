import React from "react";
import PageForm from "./components/PageForm";
import ListUser from "./components/ListUser";
import styled from "styled-components";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin-top: 2%;
`;

const Button = styled.button`
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

class App extends React.Component {
  state = {
    pageCurrent: "PageForm",
  };

  /* usando um ternário para alterar o estado e renderizar a página */
  onChangePage = () => {
    this.state.pageCurrent === "PageForm"
      ? this.setState({ pageCurrent: "ListUser" })
      : this.setState({ pageCurrent: "PageForm" });
  };

  render() {
    const changePage = () => {
      if (this.state.pageCurrent === "PageForm") {
        return <PageForm />;
      } else if (this.state.pageCurrent === "ListUser") {
        return <ListUser />;
      }
    };

    return (
      <AppContainer>
        {changePage()}
        <Button onClick={this.onChangePage}> Trocar Tela</Button>
      </AppContainer>
    );
  }
}

export default App;
