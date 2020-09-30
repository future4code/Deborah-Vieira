import React from "react";
import { Typography } from "@material-ui/core";
import { ScreenContainer } from "./styles";

import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
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
