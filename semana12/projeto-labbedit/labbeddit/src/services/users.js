import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../router/Coordinator";

//Bate na api de login
export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
    })
    .catch((error) => {
      alert("Login não realizado, por favor tente novamente");
    });
};

//Bate na api de criar usuário

export const signUp = (body, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      //envia token
      localStorage.setItem("token", response.data.token);

      goToFeed(history);
    })
    .catch((error) => {
      alert("User não criado, por favor tente novamente", error);
    });
};
