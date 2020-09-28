import React from "react";
import { useHistory } from "react-router-dom";
import { Wrapper, Container } from "../LoginPage/Stylelogin";
import ListTripPage from "../ListTripPage/";

/* Usando o Hook history, que pertence ao router-dom */
const LoginPage = () => {
  const history = useHistory();

  //Usando para cada rota especifíca um hook.
  const goToTripsCreate = () => {
    history.push("/trips/create");
  };

  const goToTripsList = () => {
    history.push("/trips/list");
  };

  const goToTripsDetails = () => {
    history.push("/trips/details");
  };

  return (
    <>
      <Wrapper>
        <Container>
          <p> LABEX</p>

          <form>
            <input type="email" placeholder="Seu nome" />
            <input type="password" placeholder="Sua senha" />

            <button>Enviar</button>
          </form>
        </Container>
      </Wrapper>
      <ListTripPage />
    </>
  );
};

export default LoginPage;
