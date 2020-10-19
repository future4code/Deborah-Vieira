import React, { useState } from "react";
import axios from "axios";

import { Container } from "./style";

export default function Home() {
  const [createTasks, setCreateTasks] = useState([]);

  const tasksCreate = () => {
    const body = {
      text: "Lavar a louça",
      day: "Segunda",
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-turma-deborah",
        body
      )
      .then((response) => {
        console.log("ok, as tarefas", response.data);
      })
      .catch((error) => {
        console.log("é, não deu certo");
      });
  };

  /* Função cria tarefa */
  return (
    <Container>
      <input placeholder="Digite sua tarefa" />
      <select>
        <option value="Segunda">Segunda</option>
        <option value="Terca">Terça</option>
        <option value="Quarta">Quarta</option>
        <option value="Quinta">Quarta</option>
        <option value="Sexta">Quarta</option>
        <option value="Sábado">Sábado</option>
        <option value="Domingo">Domingo</option>
      </select>

      <button onClick={tasksCreate}>Criar Tarefa</button>
    </Container>
  );
}
