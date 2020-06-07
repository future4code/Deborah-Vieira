import React from "react";

import "./App.css";
import CreatePlaylist from "./Components/CreatePlaylist";
import ShowPlaylist from "./Components/ShowPlaylist";
import ShowMusics from "./Components/ShowMusics";
import AddMusic from "./Components/AddMusic";

function App() {
  return (
    <div>
      {" "}
      <CreatePlaylist />
      <ShowPlaylist />
      {/*  <ShowMusics />
      <AddMusic /> */}
    </div>
  );
}

export default App;
