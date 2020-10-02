import React from "react";
import { Typography } from "@material-ui/core";
import { ScreenContainer } from "./styles";
import useUnProtectPage from "../../Hooks/useUnProtectPage";

import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  useUnProtectPage();
  return (
    <ScreenContainer>
      <Typography variant={"h2"} gutterBottom>
        Logout
      </Typography>
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
