import React, { useEffect, useState } from "react";
import axios from "axios";

const TripDetailsPage = () => {
  const [tripDetais, setTripDetails] = useState();

  useEffect(() => {
    getTripDetails();
  }, []);

  const getTripDetails = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trip/:id"
      )
      .then((response) => {
        setTripDetails(response.data);
        console.log("deu certo gata", response.data);
      })
      .catch((error) => {
        console.log(error, "vacilou");
      });
  };

  return <div>Trip Details</div>;
};

export default TripDetailsPage;
