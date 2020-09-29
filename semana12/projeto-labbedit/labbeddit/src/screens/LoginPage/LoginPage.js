import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { ScreenContainer, SignUpContainer } from "./styles";

const LoginPage = () => {
  return (
    <ScreenContainer>
      <Typography variant={"h2"} gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          label={"Email"}
          type={"email"}
          /* variant={"outlined"}
            margin={"normal"} */
          fullWidth
          required
          autoFocus
        />
        <TextField
          label={"Senha"}
          type={"password"}
          /* variant={"outlined"} */
          fullWidth
          required
        />

        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Entrar
        </Button>
      </form>
      <SignUpContainer>
        <Button color={"primary"} variant={"text"} type={"submit"} fullWidth>
          {/* fullWidth preenche o container  */}
          Ainda não tem conta? Cadastre-se
        </Button>
      </SignUpContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
