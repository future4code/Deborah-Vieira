/* Um hook para pegar requisições */

import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useRequiredData = (initialDate, endpoint) => {
  const [data, setData] = useState(initialDate);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [endpoint]);
  return data;
};

export default useRequiredData;
