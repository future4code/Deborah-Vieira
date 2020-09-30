import React from "react";
import { Typography } from "@material-ui/core";
import useProtectPage from "../../Hooks/useProtectPage";

// import { Container } from './styles';

const FeedPage = () => {
  /* autorização de acesso */
  useProtectPage();

  return (
    <Typography color={"primary"} variant={"h5"} align={"center"}>
      {" "}
      Feed Page
    </Typography>
  );
};

export default FeedPage;
