import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "Deborah-Vieira-mello",
  },
};

class ShowMusics extends React.Component {
  state = {
    showplaylists: [],
  };

  SearchPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks",
        axiosConfig
      )
      .then((response) => {
        alert("Musicas na faixa");
        this.setState({ showplaylists: response.data });
      });
  };

  render() {
    return (
      <div className="container">
        {this.state.showplaylists.length === 0 && <div>Carregando...</div>}
        {this.state.showplaylists.map((musicas) => {
          return <li>{musicas.name}</li>;
        })}
      </div>
    );
  }
}

export default ShowMusics;
