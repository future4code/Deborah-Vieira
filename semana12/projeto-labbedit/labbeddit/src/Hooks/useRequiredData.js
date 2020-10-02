/* Um hook para pegar requisições */

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useRequiredData = (initialDate, endpoint) => {
  const [data, setData] = useState(initialDate);

  //requisição usando autorização
  //funcionando com sucesso.
  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response, "posts da requisição");
        setData(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);
  return data;
};

export default useRequiredData;
