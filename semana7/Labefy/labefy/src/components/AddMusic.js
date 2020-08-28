/* lista todas as playlists e exclui */
import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes/Constantes";

class AddMusic extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
  };

  /* Funções inputs controlados */
  handleInputName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleInputArtist = (e) => {
    this.setState({ artist: e.target.value });
  };

  handleInputUrl = (e) => {
    this.setState({ url: e.target.value });
  };

  /* Função adiciona musica */
  listPlaylist = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlists: response.data.result.list });
      console.log(response.data);
    } catch (error) {
      console.log("Error");
    }
  };

  render() {
    return (
      <>
        <h3>Adcione Musica a sua playlist Favorita</h3>
        <input
          value={this.state.name}
          type="text"
          onChange={this.handleInputName}
          placeholder="Nome"
        />

        <input
          value={this.state.artist}
          type="text"
          onChange={this.handleInputArtist}
          placeholder="Artista ou Banda"
        />

        <input
          value={this.state.url}
          type="text"
          onChange={this.handleInputUrl}
          placeholder="Url"
        />

        <button>Adicionar Musica</button>
      </>
    );
  }
}
export default AddMusic;
