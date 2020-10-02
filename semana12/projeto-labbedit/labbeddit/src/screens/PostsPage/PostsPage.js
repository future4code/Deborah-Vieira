import React from "react";
import useProtectPage from "../../Hooks/useProtectPage";

import { Button, TextField, Typography } from "@material-ui/core";

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

import useForm from "../../Hooks/useForm";

import { useParams } from "react-router-dom";

const PostsPage = () => {
  const [form, handleInput] = useForm({ text: "" });

  /*  autorização de acesso */
  useProtectPage();
  const { id } = useParams();
  const postDetails = useRequiredData({}, `/posts/${id}`);

  return (
    <ContainerPost>
      {" "}
      <HeaderPost>{postDetails.post && postDetails.post.username}</HeaderPost>
      <HeaderPost>{postDetails.post && postDetails.post.title}</HeaderPost>
      <TextPost>{postDetails.post && postDetails.post.text}</TextPost>
      <FooterPost>
        {" "}
        <div>
          <ArrowUpwardSharpIcon size={"small"} />
          {postDetails.post && postDetails.votesCount}
          <ArrowDownwardSharpIcon size={"small"} />
        </div>{" "}
        {postDetails.post && postDetails.commentsCount} comentários
      </FooterPost>
    </ContainerPost>
  );
};

export default PostsPage;
