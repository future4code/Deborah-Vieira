import styled from "styled-components";

export const ContainerPost = styled.div`
  border: 1px solid gray;
  width: 400px;
  height: 220px;
  margin-bottom: 20px;
  margin: 20px auto;
`;

export const HeaderPost = styled.div`
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextPost = styled.div`
  margin-top: 40px;
  height: 60px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const FooterPost = styled.div`
  margin-top: 50px;
  font-size: 14px;
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  width: 25vw; /* indepentende da tela, ocupa 100% */

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    /* Ele controla o tamanho máximo, para mobile está ok */
    max-width: 450px;
  }

  Button {
    margin-top: 18px;
  }
`;
