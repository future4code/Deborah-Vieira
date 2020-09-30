import axios from "axios";
import { BASE_URL } from "../constants/urls";

//Bate na api de login
export const login = (body) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      alert("Login não realizado, por favor tente novamente");
    });
};
