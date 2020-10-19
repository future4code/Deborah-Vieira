import React from "react";
import { Typography, Button } from "@material-ui/core";
import { ScreenContainer, SignUpContainer } from "./styles";

import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../router/Coordinator";
import useUnProtectPage from "../../Hooks/useUnProtectPage";

const LoginPage = () => {
  const history = useHistory();
  useUnProtectPage();
  return (
    <ScreenContainer>
      <Typography variant={"h2"} gutterBottom>
        Login
      </Typography>
      {/* Lógica de formulário isolada aqui */}
      <LoginForm />

      <SignUpContainer>
        <Button
          //chamando a troca de tela com o hook history
          onClick={() => goToSignUp(history)}
          color={"primary"}
          variant={"text"}
          type={"submit"}
          fullWidth
        >
          {/* fullWidth preenche o container  */}
          Ainda não tem conta? Cadastre-se
        </Button>
      </SignUpContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
