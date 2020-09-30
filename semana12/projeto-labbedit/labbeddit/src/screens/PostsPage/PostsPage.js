import React from "react";
import useProtectPage from "../../Hooks/useProtectPage";

// import { Container } from './styles';

const PostsPage = () => {
  useProtectPage();
  return <div>Posts Page</div>;
};

export default PostsPage;
