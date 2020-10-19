import { useLayoutEffect } from "react";

import { useHistory } from "react-router-dom";
import { goToLogin } from "../router/Coordinator";

const useProtectPage = () => {
  const history = useHistory();

  /* pegando o token e protegendo paginas e remove a "piscadinha da tela"*/
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
    }
  }, [history]);
};

export default useProtectPage;
