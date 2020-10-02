import axios from "axios";
import { BASE_URL } from "../constants/urls";

/* Criação de post */
export const PostCreated = (body) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response);
      /* guardo o token para saber se o usuário está logado ou não,ele vem da  minha requisição quando logo  */
    })
    .catch((error) => {
      alert("Post não criado, por favor tente novamente");
    });
};

/* Criar comentário */
export const comentCreated = (body) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response);
      /* guardo o token para saber se o usuário está logado ou não,ele vem da  minha requisição quando logo  */
    })
    .catch((error) => {
      alert("Post não criado, por favor tente novamente");
    });
};
