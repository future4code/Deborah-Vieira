import React from "react";
import "./Post.css";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import avatar from "../../img/avatar.jpg";
import avatar2 from "../../img/avatar2.jpg";
import praia from "../../img/praia.jpg";
import paisagem from "../../img/paisagem.jpeg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
  };

  onClickCurtida = () => {
    console.log("Curtiu!");
    this.setState({
      curtido: !this.state.curtido,
    });

    if (this.state.curtido === true) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 });
    } else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 });
    }
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando /* estado comentando aqui */,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios:
        this.state.numeroComentarios + 1 /* estado numerocomentario aqui */,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      /* estado comentando aqui */
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    return (
      <>
        <div className={"post-container"}>
          <div className={"post-header"}>
            <img
              className={"user-photo"}
              src={this.props.fotoUsuario}
              alt={"Imagem do usuario"}
            />
            <p>{this.props.nomeUsuario}</p>
          </div>

          <img
            className={"post-photo"}
            src={this.props.fotoPost}
            alt={"Imagem do post"}
          />

          <div className={"post-footer"}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={
                this.state.numeroComentarios
              } /* estado numerocomentario aqui */
            />
          </div>
          {componenteComentario}
        </div>

        {/*/* POST 2   */}
        <div className={"post-container"}>
          <div className={"post-header"}>
            <img
              className={"user-photo"}
              src={avatar}
              alt={"Imagem do usuario"}
            />
            <p>{"Déborah"}</p>
          </div>

          <img className={"post-photo"} src={praia} alt={"Imagem do post"} />

          <div className={"post-footer"}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={
                this.state.numeroComentariosPostDois
              } /* estado numerocomentario aqui */
            />
          </div>
          {componenteComentario}
        </div>

        {/*/* POST 3   */}
        <div className={"post-container"}>
          <div className={"post-header"}>
            <img
              className={"user-photo"}
              src={avatar2}
              alt={"Imagem do usuario"}
            />
            <p>{"Debe"}</p>
          </div>

          <img className={"post-photo"} src={paisagem} alt={"Imagem do post"} />

          <div className={"post-footer"}>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={
                this.onClickCurtida
              } /* é chamada quando clico no icone de coração */
              valorContador={
                this.state.numeroCurtidas
              } /* estado numerocurtidas aqui */
            />
            {/* Recebe o icone.  a função de clique de comentário que altera o estado da variavel
comentando e o valor contador vem da variavel da função ao comentar que é um contador*/}
            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={
                this.state.numeroComentarios
              } /* estado numerocomentario aqui */
            />
          </div>
          {componenteComentario}
        </div>
      </>
    );
  }
}

export default Post;
