import React from "react";
import axios from "axios";

export default class Spacex extends React.Component {
  state = {
    missoes: [],
  };

  //função de requisição a API
  pegaSpacex = () => {
    axios
      .get("https://api.spacexdata.com/v3/missions")
      .then((resposta) => {
        this.setState({
          missoes: resposta.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Quando o componente é montado, ele executa a chamada a API
  componentDidMount() {
    this.pegaSpacex();
  }

  render() {
    return (
      <div className="App">
        {this.state.missoes.map((item) => {
          return (
            /* Retorna todos os dados que queremos da api. */
            <div>
              <h2 key={item.mission_id}>{item.mission_name}</h2>
              <a href={item.wikipedia}>Link</a>
              {/* Como os fabricantes são retornados dentro de um array, faço um map
               */}
              {item.manufacturers.map((fabricante) => {
                return (
                  <ul>
                    <li key={fabricante}>{fabricante}</li>
                  </ul>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
