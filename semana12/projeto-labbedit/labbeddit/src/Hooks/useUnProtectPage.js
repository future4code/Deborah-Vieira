import { useLayoutEffect } from "react";

import { useHistory } from "react-router-dom";
import { goToFeed } from "../router/Coordinator";

//se tiver logada,não acesso login e logout
const useUnProtectPage = () => {
  const history = useHistory();

  /* pegando o token e protegendo paginas e remove a "piscadinha da tela"*/
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeed(history);
    }
  }, [history]);
};

export default useUnProtectPage;
