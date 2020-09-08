import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes/Constantes";

class AddPlaylist extends React.Component {
  state = {
    inputPlaylist: "",
  };

  /* Função do input */
  handleInputPlaylist = (e) => {
    this.setState({ inputPlaylist: e.target.value });
  };

  /* Enviar dados para a api do campo input */
  createPlaylyst = () => {
    const body = {
      name: this.state.inputPlaylist,
    };

    /* Requisição */
    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        alert("playlisty criada com sucesso");
      })
      .catch((error) => {
        alert("Playlist já criada, por favor digite outro nome");
      });
  };

  render() {
    return (
      <>
        <input
          value={this.state.inputPlaylist}
          type="text"
          onChange={this.handleInputPlaylist}
          placeholder="Crie sua playlist"
        />
        <button onClick={this.createPlaylyst}>Criar Playlist</button>
      </>
    );
  }
}
export default AddPlaylist;
