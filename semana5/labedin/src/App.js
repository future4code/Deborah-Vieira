import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import CardCursos from "./components/CardCursos/CardCursos";
import Header from './components/Home/Header'

import ImagemButton from "./components/ImagemButton/ImagemButton";
import Avatar from "./components/ImagemButton/img/avatar.jpg";
import Email from '../src/img/enviar.png'
import Endereco from '../src/img/endereco.png'

function App() {
  return (
    <div>
    <Header/>
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Avatar}
          nome="Déborah Viana Vieira"
          descricao="Olá, me chamo Déborah. Atualmente sou estudante do curso Web Full-Stack da Labenu.
          Graduada em Sistemas de Informação, trabalhei com Redes em Ti e Manutenção de computadores.
          Já trabalhei com Rotinas Administrativas e Gerência de Hotelaria.    
          "
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

       {/* Email e endereço */}

       <div className="page-section-container">
        <CardPequeno
         imagem= {Email}
          email="Email: deborahanalistati@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
         imagem ={Endereco}
          endereco="Ruas das acácias, 214 - Aguas Claras- DF"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Avatar}
          nome="Descrição"
          descricao=" Psiu informática : Prestador de serviços de TI(Mei). Manutenção da rede interna. Manutenção de
          programas. Instalação de Softwares(da área Contábil e Administrativa). Atuando diretamente com
          Montagem e Manutenção de Computadores. Periodo: 3 anos"
        />

        <CardGrande
          imagem={Avatar}
          nome="Descrição"
          descricao=" Facimab : Treinamento de colaboradores. Manutenção de laboratórios de informática.
          Paralelamente a essas atividades, Coordenadora de atendimento. Período: 2 anos"
        />

        <CardGrande
          imagem={Avatar}
          nome="Descrição"
          descricao=" Mbrasil Contas Médicas : Faturista de convênios de saúde(Unimed, Cassi, Capesaude, Fassincra, Bradesco, Geap entre outros regionais),
           regidos pela tabela AMB e CBHPM.
            Período: 1 ano e 09 meses" 
            />    

       <CardGrande
          imagem={Avatar}
          nome="Descrição"
          descricao=" Eminente Hotel : Gerente(Rh, Financeiro, Treinamento de Colaboradores, Logística)
            Período: 2 anos" 
            />    

        <CardGrande
          imagem={Avatar}
          nome="Descrição"
          descricao="  Casa do Sorveteiro : Menor Aprendiz (Rh, Financeiro, Vendas e Telefonia). 
            Período: 1 ano" 
            />  
      </div>


      {/* Cursos */}
      <div className="page-section-container">
        <h2>Cursos </h2>
        <CardCursos
          imagem={Avatar}
          nome="CSS Flexbox 
          "
        />

        <CardCursos
          imagem={Avatar}
          nome=" Inglês Básico 
          "
        />

       <CardCursos
          imagem={Avatar}
          nome=" Gestão Básica de Pequenos Empreendimentos
          "
        />

       <CardCursos
          imagem={Avatar}
          nome=" Auxiliar Administrativo
          "
        />

         <CardCursos
          imagem={Avatar}
          nome=" Telefonista, Recepcionista e Operadora de Telemarketing
          "
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
    </div>
  );
}

export default App;
