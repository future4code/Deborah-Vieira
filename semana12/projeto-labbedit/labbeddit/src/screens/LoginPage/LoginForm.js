import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { login } from "../../services/users";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  const handleInput = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  /* Botão que envia os dados a api e loga na aplicação */
  const acessLogin = (event) => {
    /* previne o comportamento padrao do form */
    event.preventDefault();
    const element = document.getElementById("login_form");
    const isValid = element.checkValidity();
    element.reportValidity();
    /* só fará a requisição se passar na validação */
    if (isValid) {
      //enviando para requisição api,o body é a resposta do formulario
      login(form, history);
    }
  };

  return (
    <form id={"login_form"}>
      <TextField
        value={form.email}
        name={"email"}
        onChange={handleInput}
        label={"Email"}
        type={"email"}
        fullWidth
        required
        autoFocus
      />
      <TextField
        value={form.password}
        name={"password"}
        onChange={handleInput}
        label={"Senha"}
        type={"password"}
        fullWidth
        required
      />
      <Button
        variant={"contained"}
        color={"primary"}
        type={"submit"}
        onClick={acessLogin}
      >
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;
