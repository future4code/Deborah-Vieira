import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import CardCursos from "./components/CardCursos/CardCursos";

import ImagemButton from "./components/ImagemButton/ImagemButton";
import Avatar from "./components/ImagemButton/img/avatar.jpg";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Avatar}
          nome="Déborah Viana Vieira"
          descricao="Olá, me chamo Déborah. Atualmente sou estudante do curso Web Full-Stack da Labenu.
          Graduada em Sistemas de Informação, trabalhei com Redes em Ti e Manutenção de computadores.     
          "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Avatar}
          nome="Empresas:"
          descricao="Eminente Hotel ; 
           Facimab ;  Mbrasil Contas Médicas ;    Casa do Sorveteiro ;  Lojas Jatobá"
        />

        <CardGrande
          imagem={Avatar}
          nome="Descrição"
          descricao=" Prestador de serviços de TI(Mei). Manutenção da rede interna. Manutenção de
          programas. Instalação de Softwares(da área Contábil e Administrativa). Treinamento
          de colaboradores. Manutenção de laboratórios de informática.
          Paralelamente a essas atividades, atendia diversos clientes, atuando diretamente com
          Montagem e Manutenção de Computadores."
        />
      </div>

      {/* Cursos */}
      <div className="page-section-container">
        <h2>Cursos </h2>
        <CardCursos
          imagem={Avatar}
          nome="CSS Flexbox ; Inglês Básico ; Gestão Básica de Pequenos Empreendimentos ; Auxiliar Administrativo
          "
        />
      </div>

      {/* Email e endereço */}

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem={Avatar}
          email="deborahanalistati@gmail.com"
          endereco="Rua das Acácias, 230 - Guará"
          telefone="61 9 8621-2292"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
