import React, { useState } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { ScreenContainer, SignUpContainer } from "./styles";
import { login } from "../../services/users";

const LoginPage = () => {
  /*nesse caso um um estado só recebe dois parametros como objeto dos campos de input ao inves 
  de criar um para cada input*/
  const [form, setForm] = useState({ email: "", password: "" });

  //usando desistruturação para função de alterar valores no input
  const handleInput = (event) => {
    /* desestruturação de variaveis recebendo o evento */
    const { value, name } = event.target;
    /* copia o estado do form, e altera apenas a propriedade name do input
    por isso coloco o name em cada input 
    o que foi digitado, o name recebe e passa para o email ou password*/
    setForm({ ...form, [name]: value });
  };

  /* Botão que envia os dados a api e loga na aplicação */
  const createLogin = (event) => {
    /* previne o comportamento padrao do form */
    event.preventDefault();
    /* validação do form, já que tiramos a comum pelo prevent */
    /* pegando o elemento form pelo dom */
    const element = document.getElementById("login_form");
    /* verificando a validação do elemento */
    const isValid = element.checkValidity();
    /* chamando a validação */
    element.reportValidity();
    /* só fará a requisição se passar na validação */
    if (isValid) {
      //requisição api,o body é a resposta do formulario
      login(form);
      console.log(form);
    }
  };

  return (
    <ScreenContainer>
      <Typography variant={"h2"} gutterBottom>
        Login
      </Typography>
      <form id={"login_form"}>
        <TextField
          /* Valor vindo do input = form estado*/
          value={form.email}
          /* vem da função handle, onde ele vai alterar somente o nome dos campos */
          name={"email"}
          onChange={handleInput}
          label={"Email"}
          type={"email"}
          /* variant={"outlined"}
            margin={"normal"} */
          fullWidth
          required
          autoFocus
        />
        <TextField
          /* Valor vindo do input = form estado*/
          value={form.password}
          name={"password"}
          onChange={handleInput}
          label={"Senha"}
          type={"password"}
          /* variant={"outlined"} */
          fullWidth
          required
        />

        <Button
          variant={"contained"}
          color={"primary"}
          type={"submit"}
          onClick={createLogin}
        >
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
