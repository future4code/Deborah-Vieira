import React from "react";

import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";

import Router from "./router/routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
