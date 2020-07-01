import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToFormPage = () => {
    history.push("/application-form");
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <div>
      <p> Home</p>
      <button onClick={goToFormPage}>Inscreva-se</button> <br /> <br />
      <button onClick={goToLoginPage}>Login</button>
    </div>
  );
};

export default HomePage;
