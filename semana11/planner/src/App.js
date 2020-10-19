import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    GetTasks();
  }, []);
  /* pegar as tarefas*/

  console.log(tasks, "tarefas aqui");
  const GetTasks = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/:planner-turma-deborah"
      )
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log("Ih, não rolou");
      });
  };

  const activityDay = (day) => {
    const renderDays = tasks.map((tarefas) => {
      if (tarefas.day === day) {
        console.log(tarefas, "tasjs");
        return (
          <div>
            <p>
              {tarefas.text}
              <button>Excluir</button>
            </p>
          </div>
        );
      }
    });
    return renderDays;
  };

  /* Separar as tarefas vindas */
  return (
    <div className="App">
      <Header />
      <Home />

      <div>
        Segunda
        {activityDay("Segunda")}
      </div>

      <div>
        <p>Terça</p>
        {activityDay("Terca")}
      </div>
    </div>
  );
}

export default App;
