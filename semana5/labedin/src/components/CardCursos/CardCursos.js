import React from "react";
import "./CardCursos.css";

function CardCursos(props) {
  return (
    <div className="CardCursos-container">
      <img src={props.imagem} />
      <div>
        <h4>{props.nome}</h4>
      </div>
    </div>
  );
}

export default CardCursos;
