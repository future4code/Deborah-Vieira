import React from "react";

import axios from "axios";

import SignPage from "./Components/SignPage";
import UserlistPage from "./Components/UserListPage";

//Componente responsavel por troca de tela
class App extends React.Component {
  state = {
    currentePage: "sign",
  };

  //Função muda o estado
  changePage = () => {
    if (this.state.currentePage === "sign") {
      this.setState({ currentePage: "userlist" });
    } else {
      this.setState({ currentePage: "sign" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.changePage}>Voltar</button>
        {/* Condicional Ternária  */}
        {this.state.currentePage === "sign" ? <SignPage /> : <UserlistPage />}
      </div>
    );
  }
}

export default App;
