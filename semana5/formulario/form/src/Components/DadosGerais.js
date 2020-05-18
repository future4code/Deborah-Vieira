import React from "react";

import Index from "../App.css";

class DadosGerais extends React.Component {
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <form action="">
          <label htmlFor="">1. Qual o seu nome?</label>
          <input type="text" />
          <label htmlFor="">2. Qual sua idade?</label>
          <input type="text" />
          <label htmlFor="">3. Qual seu email?</label>
          <input type="text" />
          <label htmlFor="">4. Qual sua escolaridade?</label>
          <select name="select">
            <option value="valor1">Ensino médio incompleto</option>
            <option value="valor2">Ensino médio completo</option>
            <option value="valor3">Ensino superior incompleto</option>
            <option value="valor3">Ensino superior completo</option>
          </select>
          <button onClick={this.props.proximo}>Próxima Etapa</button>
        </form>
      </div>
    );
  }
}

export default DadosGerais;
