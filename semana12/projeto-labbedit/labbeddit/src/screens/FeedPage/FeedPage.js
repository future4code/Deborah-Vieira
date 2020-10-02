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
import { useHistory, useParams } from "react-router-dom";

const FeedPage = () => {
  const postFeed = useRequiredData([], "/posts");

  const [form, handleInput] = useForm({
    text: "",
    title: "",
  });

  const history = useHistory();
  const { id } = useParams();

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
    console.log(form, "form do Criar Post");
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
              /* Valor vindo do input = form estado*/
              value={form.title}
              /* vem da função handle, onde ele vai alterar somente o nome dos campos */
              name={"title"}
              onChange={handleInput}
              label={"Titulo do Post"}
              type={"text"}
              /*  variant={""} */

              margin={"normal"}
              fullWidth
              required
              autoFocus
            />
            <TextField
              /* Valor vindo do input = form estado*/
              value={form.text}
              /* vem da função handle, onde ele vai alterar somente o nome dos campos */
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
      {postFeed.length > 0 ? (
        <>
          {postFeed.map((post) => {
            return (
              <ContainerPost key={post.id}>
                <HeaderPost>{post.username}</HeaderPost>
                {/* Clicando para detalhes do post */}
                <TextPost onClick={() => goToPosts(history, post.id)}>
                  {" "}
                  {post.text}
                </TextPost>

                <FooterPost>
                  {" "}
                  <div>
                    <ArrowUpwardSharpIcon size={"small"} />
                    {post.votesCount}
                    <ArrowDownwardSharpIcon size={"small"} />
                  </div>{" "}
                  {post.commentsCount} comentários
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
