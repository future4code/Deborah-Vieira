/* lista todas as playlists e exclui */
import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes/Constantes";

class ListPlaylist extends React.Component {
  state = {
    playlists: [],
  };

  /* Quando a página carregar, já vai aparecer em tela */
  componentDidMount() {
    this.listPlaylist();
  }

  listPlaylist = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({ playlists: response.data.result.list });
      console.log(response.data);
    } catch (error) {
      console.log("Error");
    }
  };

  //Deleta a playlist
  deletePlaylist = (Id) => {
    axios
      .delete(`${baseUrl}/${Id}`, axiosConfig)
      .then((response) => {
        alert("Playlist deletada com sucesso!");
        this.listPlaylist();
      })
      .catch((error) => {
        alert("Playlist não excluida");
      });
  };

  /* FALTA OS DETALHES DA PLAYLIST */
  render() {
    return (
      <>
        <h3>Suas playlists</h3>
        {this.state.playlists.map((playlist) => {
          return (
            <li key={playlist.id}>
              {playlist.name}
              <button onClick={() => this.deletePlaylist(playlist.id)}>
                X
              </button>
              <button>Detalhes</button>
            </li>
          );
        })}
      </>
    );
  }
}
export default ListPlaylist;
