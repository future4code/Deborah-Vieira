import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";

import Router from "./router/routes";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
