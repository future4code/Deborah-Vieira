import React from "react";
import { TextField, Button } from "@material-ui/core";
import { signUp } from "../../services/users";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";

const SignUpForm = () => {
  const history = useHistory;
  /*nesse caso um um estado só recebe dois parametros como objeto dos campos de input ao inves 
  de criar um para cada input*/
  const [form, handleInput] = useForm({ name: "", email: "", password: "" });

  /* Botão que envia os dados a api e loga na aplicação */
  const createLogin = (event) => {
    /* previne o comportamento padrao do form */
    event.preventDefault();
    /* validação do form, já que tiramos a comum pelo prevent */
    /* pegando o elemento form pelo dom */
    const element = document.getElementById("signup_form");
    /* verificando a validação do elemento */
    const isValid = element.checkValidity();
    /* chamando a validação */
    element.reportValidity();
    /* só fará a requisição se passar na validação */
    if (isValid) {
      //requisição api,o body é a resposta do formulario
      signUp(form, history);
    }
    console.log(form, "form do sinup aqui");
  };

  return (
    <form id={"signup_form"}>
      <TextField
        /* Valor vindo do input = form estado*/
        value={form.name}
        /* vem da função handle, onde ele vai alterar somente o nome dos campos */
        name={"name"}
        onChange={handleInput}
        label={"Nome"}
        type={"text"}
        /* variant={"outlined"}
            margin={"normal"} */
        fullWidth
        required
        autoFocus
      />
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
        Criar Conta
      </Button>
    </form>
  );
};

export default SignUpForm;
