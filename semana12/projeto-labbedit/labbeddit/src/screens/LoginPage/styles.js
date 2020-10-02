import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; /* indepentende da tela, ocupa 100% */

  form {
    display: flex;
    flex-direction: column;
    width: 43vw;
    /* Ele controla o tamanho máximo, para mobile está ok */
    max-width: 450px;
  }

  Button {
    margin-top: 18px;
  }
`;

export const SignUpContainer = styled.div`
  width: 70vw;
  /* Ele controla o tamanho máximo, para mobile está ok */
  max-width: 450px;
`;
