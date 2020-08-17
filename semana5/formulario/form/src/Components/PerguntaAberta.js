import React from "react";

class PerguntaAberta extends React.Component{

    render(){
        return(
          <div>
            <form action="">
              <label htmlFor="nome">{this.props.pergunta}</label>
              <input  id = "nome"type="text" required="nome"/>
           </form>
          
          </div>
        )
    }
}
export default PerguntaAberta

