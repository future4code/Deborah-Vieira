import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { baseUrl, baseUrlChoosePerson } from "../Constantes/Constantes";

const Container = styled.div`
  border: 5px solid #babaca;
  width: 400px;
  height: 650px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.button`
  background-color: #ef5b5a;
  border: 0;
  padding: 0px 30px;
  border-radius: 10px;
  margin-top: 5px;
  color: #fff;
  &:hover {
    background-color: #fcf;
    color: #ef5b5a;
  }
`;

const Li = styled.li`
  margin-left: 15px;
`;

const TitleAstro = styled.p`
  color: #ef5b5a;
  font-size: 20px;
  font-weight: bold;
`;

const ButtonYes = styled.button`
  margin-right: 10%;
  padding: 5px 10px;
  margin: 10px;
  background-color: green;
  color: #fff;
  border: 0;
  margin-bottom: 10px;
  &:hover {
    background-color: green;
    color: #fff;
    padding: 10px 15px;
  }
`;

const ButtonNo = styled.button`
  padding: 5px 10px;
  margin: 10px;
  background-color: red;
  color: #fff;
  border: 0;
  &:hover {
    background-color: #ef5b5a;
    color: #fff;
    padding: 10px 15px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: #ef5b5a;
`;

const Image = styled.img`
  margin-right: 10px;
  width: 350px;
  height: 400px;
  border: 4px solid #ef5b5a;
`;

function Home(props) {
  //Hook: Guardando no estado os perfis de retorno da minha requisição.
  const [profileChoose, setProfileChoose] = useState([]);

  /* Esse hook, faz o papel de didmount, toda vez que a tela atualiza */
  useEffect(() => {
    getPeople();
  }, []);

  /* Essa função bate na requisição, solicitando os perfis cadastrados com todos seus dados pertinentes */
  const getPeople = () => {
    axios
      .get(baseUrl)
      .then((response) => {
        setProfileChoose([response.data.profile]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* Essa função bate na api, pegando o id de um perfil e mudando seu choise para true,
   toda vez que o usuário clica em Sim*/
  const choosePersonYes = () => {
    const body = {
      id: profileChoose[0].id,
      choice: true,
    };
    console.log(profileChoose, "ids ");

    axios
      .post(baseUrlChoosePerson, body)
      .then((response) => {
        getPeople();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* Função da match no perfil No*/
  const choosePersonNo = () => {
    const body = {
      id: profileChoose[0].id,
      choice: false,
    };

    axios
      .post(baseUrlChoosePerson, body)
      .then((response) => {
        getPeople();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(props.match, "match props aqui");
  return (
    <>
      <Container>
        <ContainerHeader>
          <TitleAstro>Astromatch</TitleAstro>
          <Button onClick={props.match}>Matchs</Button>
        </ContainerHeader>
        <hr />
        {profileChoose.map((item) => {
          return (
            <Li key={item.id}>
              <Image src={item.photo} center alt="Profile" />

              <br />
              <Text>
                {item.name} - {item.age} anos
                <br />
                {item.bio}
                <br />
              </Text>
              <ButtonYes class="material-icons" onClick={choosePersonYes}>
                Sim
              </ButtonYes>
              <ButtonNo onClick={choosePersonNo}>No</ButtonNo>
            </Li>
          );
        })}
      </Container>
    </>
  );
}

export default Home;
