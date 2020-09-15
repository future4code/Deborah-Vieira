import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./Components/HomePage";
import LoginPage from "./Components/LoginPage";
import FormPage from "./Components/FormPage";
import CreateTripPage from "./Components/CreateTripPage";
import ListTripPage from "./Components/ListTripPage";
import TripDetailsPage from "./Components/TripDetailsPage";

/* Arquivo de rotas importado no app, realiza o gerenciamento de rotas. */

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/application-form" exact>
          <FormPage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/trips/create" exact>
          <CreateTripPage />
        </Route>

        <Route path="/trips/list" exact>
          <ListTripPage />
        </Route>

        <Route path="/trips/details" exact>
          <TripDetailsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
