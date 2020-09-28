import React from "react";

import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";

import LoginPage from "./screens/LoginPage/LoginPage";
import FeedPage from "./screens/FeedPage/FeedPage";
import PostsPage from "./screens/PostsPage/PostsPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LoginPage />
        <FeedPage />
        <PostsPage />
        <RegisterPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
