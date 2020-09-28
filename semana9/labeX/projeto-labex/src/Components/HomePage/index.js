import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: cadetblue;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  -webkit-box-shadow: 6px 5px 10px #999;

  p {
    font-size: 22px;
    color: #fff;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  cursor: pointer;

  li {
    color: #fff;
    font-size: 22px;
    margin-left: 80px;

    &:hover {
      color: #babaca;
    }
  }
`;

const HomePage = () => {
  const history = useHistory();

  const goToFormPage = () => {
    history.push("/application-form");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  /* Função goback volta a página */

  return (
    <div>
      <Container>
        {" "}
        <p>
          <a onClick={HomePage}>LOGO</a>
        </p>
        <Ul>
          <li>Home</li>
          <li>
            <a onClick={goToFormPage}> Inscreva-se</a>
          </li>
          <li onClick={goToLoginPage}>Login</li>
        </Ul>
      </Container>
    </div>
  );
};

export default HomePage;
