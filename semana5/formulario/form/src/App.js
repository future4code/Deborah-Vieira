import React from "react";
import "./App.css";
import DadosGerais from "./Components/DadosGerais";
import EnsinoSuperior from "./Components/EnsinoSuperior";
import Ensino from "./Components/Ensino";
import FimForm from "./Components/FinalForm";
import FinalForm from "./Components/FinalForm";

class App extends React.Component {
  state = {
    trocaTela: "",
  };

  /* etapaUm = () => {
    this.setState({ trocaTela: "GERAIS" });
  }; */

  etapaDois = () => {
    this.setState({ trocaTela: "SUPERIOR" });
  };

  etapaTres = () => {
    this.setState({ trocaTela: "ENSINO" });
  };

  etapaQuatro = () => {
    this.setState({ trocaTela: "FIM" });
  };

  render() {
    const mostraTela = () => {
      switch (this.state.trocaTela) {
        case "":
          return <DadosGerais proximo={this.etapaDois} />;
        case "SUPERIOR":
          return <EnsinoSuperior proximo={this.etapaTres} />;
        case "ENSINO":
          return <Ensino proximo={this.etapaQuatro} />;
        case "FIM":
          return <FinalForm />;
        default:
          return;
      }
    };

    return <div>{mostraTela()}</div>;
  }
}
export default App;
