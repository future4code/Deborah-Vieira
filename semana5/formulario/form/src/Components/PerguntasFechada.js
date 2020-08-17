import React from "react";

class PerguntaFechada extends React.Component{
    
    render(){
        return <div>
          <form>
          <label htmlFor="">{this.props.pergunta}</label>
          {/* Renderiza cada opção para dentro do option */}
           <select >
             {this.props.opcoes.map(opcao => (
             <option value={opcao}>{opcao}</option>
             ))}
           </select>
           </form>
        </div>
    }
}
export default PerguntaFechada