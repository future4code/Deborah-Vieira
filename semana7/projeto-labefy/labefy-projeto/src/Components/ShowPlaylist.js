import React from "react";

import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "Deborah-Vieira-mello",
  },
};

class ShowPlaylist extends React.Component {
  state = {
    playlistsList: [],
  };

  /*  componentDidMount() {
    this.fetchPlaylist();
  } */

  mostrarPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      )
      .then((response) => {
        this.setState({ playlistsList: response.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.mostrarPlaylist}>Mostrar Playlist</button>

        <ul>
          {this.state.playlistsList.length === 0 && (
            <div>Carregando Playlist...</div>
          )}
          {this.state.playlistsList.map((playlist) => {
            return <li>{playlist}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ShowPlaylist;
