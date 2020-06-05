import React from "react";
import Index from "../App.css";

class EsinoSuperior extends React.Component {
  render() {
    return (
      <div>
        {/* Etapa 2 em outra tela */}
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <form action="">
          <label htmlFor="">5. Qual o curso?</label>
          <input type="text" />
          <label htmlFor="">6. Qual unidade de ensino?</label>
          <input type="text" />

          <button onClick={this.props.proximo}>Próxima Etapa</button>
        </form>
      </div>
    );
  }
}

export default EsinoSuperior;
