import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../router/Coordinator";

//Bate na api de login
//verificar se funciona quando logar um usuário
export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      console.log(response);
      /* guardo o token para saber se o usuário está logado ou não,ele vem da  minha requisição quando logo  */
      localStorage.setItem("token", response.data.token);
      //verificar parte do darvas que direciona o login
      goToFeed(history);
    })
    .catch((error) => {
      alert("Login não realizado, por favor tente novamente");
    });
};

//Bate na api de criar usuário
//verificar se funciona quando logar um usuário
export const signUp = (body, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      console.log(response, "deu certo");
      localStorage.setItem("token", response.data.token);
      console.log(body, "body");
      //verificar parte do darvas que direciona o login
      goToFeed(history);
    })
    .catch((error) => {
      alert("User não criado, por favor tente novamente", error);
    });
};
