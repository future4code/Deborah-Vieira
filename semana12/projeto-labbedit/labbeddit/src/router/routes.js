import { Home } from "@material-ui/icons";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../screens/LoginPage/LoginPage";
import FeedPage from "../screens/FeedPage/FeedPage";
import PostsPage from "../screens/PostsPage/PostsPage";
import RegisterPage from "../screens/RegisterPage/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/login"} component={LoginPage} />
        <Route exact path={"/feed"} component={FeedPage} />
        <Route exact path={"/posts"} component={PostsPage} />
        <Route exact path={"/cadastro"} component={RegisterPage} />
        {/* páginadeerroaqui */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
