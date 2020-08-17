import React from "react";
import index from "../App.css";
import PerguntaAberta from '../Components/PerguntaAberta'
import PerguntaFechada from '../Components/PerguntasFechada'

class DadosGerais extends React.Component {
  
  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntaAberta pergunta = {"1. Qual o seu nome?"}/>
        <PerguntaAberta pergunta = {"2. Qual sua idade?"}/>
        <PerguntaAberta pergunta = {"3. Qual seu email?"}/>
      
        <PerguntaFechada pergunta = {"4. Qual sua escolaridade?"}
        opcoes = {[
           "Ensino médio incompleto",
           "Ensino médio completo",
           "Ensino superior incompleto",
           "Ensino superior completo"
          ]}
        />

         <form>
          <button onClick={this.props.proximo}>Próxima Etapa</button>
          </form>
      </div>
    );
  }
}

export default DadosGerais;
