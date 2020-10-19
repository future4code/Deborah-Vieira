import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import useProtectPage from "../../Hooks/useProtectPage";
import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";

import {
  ContainerPost,
  HeaderPost,
  FooterPost,
  TextPost,
  ContainerInput,
} from "./styles";

import useRequiredData from "../../Hooks/useRequiredData";
import Loading from "../../components/Loading/Loading";
import useForm from "../../Hooks/useForm";
import { PostCreated } from "../../services/posts";
import { goToPosts } from "../../router/Coordinator";
import { useHistory } from "react-router-dom";

const FeedPage = () => {
  const postFeed = useRequiredData([], "/posts");

  const [form, handleInput] = useForm({
    text: "",
    title: "",
  });

  const history = useHistory();

  /* autorização de acesso */
  useProtectPage();

  /* Criar Post */
  const createHandlePost = (event) => {
    event.preventDefault();

    const element = document.getElementById("createPost_form");
    const isValid = element.checkValidity();
    element.reportValidity();
    if (isValid) {
      //requisição api,o body é a resposta do formulario
      PostCreated(form);
    }
  };

  return (
    <>
      <Typography color={"primary"} variant={"h5"} align={"center"}>
        {" "}
        Labeddit
      </Typography>

      <>
        <form id={"createPost_form"}>
          <ContainerInput>
            <TextField
              value={form.title}
              name={"title"}
              onChange={handleInput}
              label={"Titulo do Post"}
              type={"text"}
              margin={"normal"}
              fullWidth
              required
              autoFocus
            />
            <TextField
              value={form.text}
              name={"text"}
              onChange={handleInput}
              label={"Postar"}
              type={"text"}
              variant={"outlined"}
              margin={"normal"}
              fullWidth
              required
            />

            <Button
              onClick={createHandlePost}
              color={"primary"}
              size={"small"}
              variant={"contained"}
              type={"submit"}
            >
              Postar
            </Button>
          </ContainerInput>
        </form>
      </>
      {/* Criando o loading */}
      {postFeed.posts ? (
        <>
          {postFeed.posts.map((item) => {
            return (
              <ContainerPost key={item.id}>
                <HeaderPost>{item.username}</HeaderPost>
                {/* Clicando para page detalhes do post */}
                <TextPost onClick={() => goToPosts(history, item.id)}>
                  {" "}
                  {item.text}
                </TextPost>

                <FooterPost>
                  {" "}
                  <div>
                    <ArrowUpwardSharpIcon size={"small"} />
                    {item.votesCount}
                    <ArrowDownwardSharpIcon size={"small"} />
                  </div>{" "}
                  {item.commentsCount} comentários
                </FooterPost>
              </ContainerPost>
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default FeedPage;
