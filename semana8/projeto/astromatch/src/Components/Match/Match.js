import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import { baseUrlMatchs } from "../Constantes/Constantes";

const Container = styled.div`
  border: 5px solid #babaca;
  width: 400px;
  height: 650px;
  list-style: none;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const Button = styled.button`
  background: #ef5b5a;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: #fff;
  margin-top: 20px;
  padding: 10px 20px;
  margin-bottom: 10px;

  &:hover {
    background-color: #fcf;
    color: #ef5b5a;
  }
`;

const Li = styled.li`
  margin: 10px;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
`;

function Match(props) {
  const [matches, setMatchs] = useState([]);

  useEffect(() => {
    matchsList();
  }, []);

  /* Chamada da api */
  const matchsList = () => {
    axios
      .get(baseUrlMatchs)
      .then((response) => {
        setMatchs(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <Button onClick={props.home}>Voltar</Button> <hr />
        {matches.map((item) => {
          return (
            <Li key={item.id}>
              <Img src={item.photo} alt="Profile" /> <br />
              {item.name}
            </Li>
          );
        })}
      </Container>{" "}
    </>
  );
}

export default Match;
