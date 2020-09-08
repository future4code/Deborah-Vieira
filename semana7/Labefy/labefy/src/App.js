import React from "react";
import AddPlaylist from "./components/AddPlaylist";
import ListPlaylist from "./components/ListPlaylist";
import AddMusic from "./components/AddMusic";

import "./App.css";

function App() {
  return (
    <div className="App">
      <AddPlaylist />
      <ListPlaylist />
      <AddMusic />
    </div>
  );
}

export default App;
