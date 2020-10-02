import React from "react";
import { CircularProgress } from "@material-ui/core";
import { LoadingContainer } from "./styles";

//chamado na tela de feed

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default Loading;
