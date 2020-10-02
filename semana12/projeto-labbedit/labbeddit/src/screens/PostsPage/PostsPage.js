import React from "react";
import useProtectPage from "../../Hooks/useProtectPage";

/* import { Button, TextField, Typography } from "@material-ui/core";

import ArrowDownwardSharpIcon from "@material-ui/icons/ArrowDownwardSharp";
import ArrowUpwardSharpIcon from "@material-ui/icons/ArrowUpwardSharp";

import {
  ContainerPost,
  HeaderPost,
  FooterPost,
  TextPost,
  ContainerInput,
} from "./styles";
 */
import useRequiredData from "../../Hooks/useRequiredData";

import useForm from "../../Hooks/useForm";
import { comentCreated } from "../../services/posts";
import { useParams } from "react-router-dom";

const PostsPage = () => {
  const [form, handleInput] = useForm({ text: "" });

  /*  autorização de acesso */
  useProtectPage();
  const { id } = useParams();
  const post = useRequiredData({}, `/posts/${id}`);
  console.log(post, "post vindo pelo id da api");

  /* Criar comentário 
  const sendComented = (event) => {
    event.preventDefault();
    const element = document.getElementById("pagePost_form");
    const isValid = element.checkValidity();
    element.reportValidity();
    if (isValid) {
      //requisição api,o body é a resposta do formulario
      comentCreated(form);
    }
    console.log(form, "form do page Post");
  };
  */

  return <div>{id}</div>;
};

export default PostsPage;
