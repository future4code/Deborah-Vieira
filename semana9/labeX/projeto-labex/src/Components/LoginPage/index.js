import React from "react";
import { useHistory } from "react-router-dom";

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
    <div>
      <p> Login</p>
      <button onClick={goToTripsCreate}>Criar Viagem</button> <br /> <br />
      <button onClick={goToTripsList}>Listar Viagem</button> <br /> <br />
      <button onClick={goToTripsDetails}>Detalhe</button>
    </div>
  );
};

export default LoginPage;
