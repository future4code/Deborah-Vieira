import React from "react";
import Index from "../App.css";

class Ensino extends React.Component {
  render() {
    return (
      <div>
        {/* Etapa 3 em outra tela */}
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
        <form action="">
          <label htmlFor="">
            5. Por que você não terminou um curso de graduação?
          </label>
          <input type="text" />
          <label htmlFor="">6. Você fez algum curso complementar?</label>
          <select name="select">
            <option value="valor1">Nenhum</option>
            <option value="valor2">Curso Técnico</option>
            <option value="valor3">Curso de inglês</option>
          </select>
          <button onClick={this.props.proximo}>Próxima Etapa</button>
        </form>{" "}
      </div>
    );
  }
}

export default Ensino;
