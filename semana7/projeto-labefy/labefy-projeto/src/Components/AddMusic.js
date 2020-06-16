import React from "react";

import axios from "axios";

class AddMusic extends React.Component {
  state = {
    musics: [],
    name: "",
    artist: "",
    url: "",
  };

  /*  componentDidMount() {
    this.fetchPlaylist();
  } */

  /* Métodos Input */
  handleNameinput = (event) => {
    this.setState({ name: event.target.value });
  };

  handleArtistinput = (event) => {
    this.setState({ artist: event.target.value });
  };

  handleUrlinput = (event) => {
    this.setState({ url: event.target.value });
  };

  //criando a musica
  addMusic = () => {
    const axiosConfig = {
      headers: {
        Authorization: "Deborah-Vieira-mello",
      },
    };

    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    const idPlaylist = {
      params: {
        playlistId: "9cc2ced4-cc48-4b18-843c-2371e9e942aa",
      },
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks",
        body,
        axiosConfig,
        idPlaylist
      )
      .then((resposta) => {
        alert("Usuário criado com sucesso!");
        //limpa campos
        this.setState({ name: "", artist: "", url: "" });
        //this.buscaUser();
      })
      .catch((erro) => {
        alert("Falha ao criar uma musica.");
        console.log(erro);
      });
  };

  render() {
    return (
      <div className="container">
        <input
          type="text"
          value={this.state.name}
          placeholder={"Digite o nome da música"}
          onChange={this.handleNameinput}
        />

        <input
          type="text"
          value={this.state.artist}
          placeholder={"Digite o artista"}
          onChange={this.handleArtistinput}
        />

        <input
          type="text"
          value={this.state.url}
          placeholder={"Digite a url da música"}
          onChange={this.handleUrlinput}
        />
        <button onClick={this.addMusic}>Adcionar musica</button>
      </div>
    );
  }
}

export default AddMusic;
