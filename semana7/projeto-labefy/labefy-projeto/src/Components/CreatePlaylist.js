import React from "react";
import axios from "axios";

/* Falta a verificação de nome igual */

class CreatePlaylist extends React.Component {
  state = {
    playlists: [],
    inputPlaylist: "",
  };

  //Método estado atual input
  handlePlaylistChange = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  //Método Criar Playlist
  createPlaylist = () => {
    const axiosConfig = {
      headers: {
        Authorization: "Deborah-Vieira-mello",
      },
    };

    const body = {
      name: this.state.inputPlaylist,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        axiosConfig
      )
      .then((response) => {
        alert("Musica criada com sucesso");
        this.setState({ inputPlaylist: "" });
      })
      .catch((erro) => {
        alert("Falha ao criar a playlist");
      });
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          placeholder="Nome da playlist"
          value={this.state.inputPlaylist}
          onChange={this.handlePlaylistChange}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </div>
    );
  }
}

export default CreatePlaylist;
