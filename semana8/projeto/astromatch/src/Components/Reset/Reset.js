import React from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  background: #ef5b5a;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin-top: 20px;
  padding: 10px 20px;

  &:hover {
    padding: 20px 30px;
    background-color: #babaca;
  }
`;

function Reset() {
  const baseUrlReset =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:deborah/clear";

  const reset = () => {
    axios
      .put(baseUrlReset)
      .then((response) => {
        alert("Resetados");
      })
      .catch((error) => {
        console.log(error);
        alert("nao resetou");
      });
  };

  return (
    <div>
      <Button onClick={reset}>Limpar</Button>
    </div>
  );
}
export default Reset;
