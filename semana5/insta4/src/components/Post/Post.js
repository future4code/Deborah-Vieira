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

/*Função que altera o numero de curtidas usando true ou false da variavel curtido, 
  Se ela tiver false ele recebe -1 senão +1 */
  onClickCurtida = () => {
    console.log("Curtiu!");
    this.setState({
      curtido: !this.state.curtido,
    });


   /*aqui ele verifica o status da variavel curtido e nega seu estado atual e altera o numero de curtidas
    com a variavel novoNumeroCurtidas. 
    */
    if (this.state.curtido === true) {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas - 1 });
    } else {
      this.setState({ numeroCurtidas: this.state.numeroCurtidas + 1 });
    }
  };

  //muda o estado de comentando sempre que for clicado
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
         {/*  Esse componente recebe essas propriedades icone, onClickIcone  e valorContador do pai,
         que é o Post. esses valores são acessados no componente iconecontador, 
         por props por exemplo props.onClickIcone cada propriedade recebe valor diferente.
        Aqui um é o icone e o outro são os comentários */ }       
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
