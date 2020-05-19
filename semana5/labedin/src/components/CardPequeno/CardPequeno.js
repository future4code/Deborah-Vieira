import React from "react";
import "./CardPequeno.css";

function CardPequeno(props) {
  return (
    <>
      <div className="smallcard-container">
        <img src={props.imagem} />

        <div>
          <h3>{props.email}</h3>
          <h3>{props.endereco}</h3>
          <h3>{props.telefone}</h3>
        </div>
      </div>
    </>
  );
}

export default CardPequeno;
