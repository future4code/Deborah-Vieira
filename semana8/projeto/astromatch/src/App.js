import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Match from "./Components/Match/Match";
import Reset from "./Components/Reset/Reset";

function App() {
  const [trocaTela, setTrocaTela] = useState("HOME");

  const mudaEstadoMatch = () => {
    setTrocaTela("MATCH");
  };

  const mudaEstadoHome = () => {
    setTrocaTela("HOME");
  };

  const mostraTela = () => {
    switch (trocaTela) {
      case "MATCH":
        return <Match home={mudaEstadoHome} />;
      case "HOME":
        return <Home match={mudaEstadoMatch} />;

      default:
        return <Home proximatela={mudaEstadoMatch} />;
    }
  };
  return (
    <div className="App">
      {mostraTela()}

      <Reset />
    </div>
  );
}

export default App;
