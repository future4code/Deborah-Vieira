import React, { useState, useEffect } from "react";
import axios from "axios";

const ListTripPage = () => {
  const [tripsList, setTripsList] = useState({});

  useEffect(() => {
    getTrip();
  }, []);

  /* Requisição funciona, mais ainda não foi criado nenhuma viagem. */
  const getTrip = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/deborah/trips"
      )
      .then((response) => {
        setTripsList(response.data);
        console.log(response.data, "deu certo as viagens gata");
      })
      .catch((error) => {
        console.log("é deu erro gata", error);
      });
  };

  return (
    <div>
      <br /> <br />
      <hr />
      <br /> <br /> <br /> <br /> <br />
      <h3>Viagens</h3>
      {tripsList.name}
    </div>
  );
};

export default ListTripPage;
