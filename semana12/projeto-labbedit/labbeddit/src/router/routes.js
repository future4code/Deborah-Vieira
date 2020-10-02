import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "../screens/LoginPage/LoginPage";
import SignUpPage from "../screens/SignUpPage/SignUpPage";
import FeedPage from "../screens/FeedPage/FeedPage";
import PostsPage from "../screens/PostsPage/PostsPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={LoginPage} />
      <Route exact path={"/login"} component={LoginPage} />
      <Route exact path={"/signup"} component={SignUpPage} />
      <Route exact path={"/feed"} component={FeedPage} />
      <Route exact path={"/posts/:id"} component={PostsPage} />
    </Switch>
  );
};

export default Router;
