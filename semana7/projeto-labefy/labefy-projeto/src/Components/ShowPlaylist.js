import React from "react";
import axios from "axios";

class ShowPlaylist extends React.Component {
  state = {
    playlists: [],
  };

  componentDidMount() {
    this.pegaPlaylist();
  }

  pegaPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "Deborah-Vieira-mello",
          },
        }
      )
      .then((response) => {
        this.setState({ playlists: response.data.result.list });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  render() {
    return (
      <div>
        <h2>Suas playlist</h2>
        {this.state.playlists.map((playlist) => {
          return <li key={playlist.id}>{playlist.name}</li>;
        })}
      </div>
    );
  }
}

export default ShowPlaylist;
