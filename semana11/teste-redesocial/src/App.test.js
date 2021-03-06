import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Post from "../src/components/Post";

test("Verifica se um novo post foi criado", () => {
  /* preparação */
  const { getByText, getByPlaceholderText } = render(<App />);

  const inputLabel = getByPlaceholderText(/Novo post/i);
  const buttonAdd = getByText(/Adicionar/i);

  /* Execução */
  fireEvent.change(inputLabel, { target: { value: "teste" } });
  fireEvent.click(buttonAdd);

  /* Verificação */
  let Post = getByText(/teste/i);
  expect(Post).toHaveTextContent("teste");
  /*  expect(inputLabel.value).toEqual("teste"); */
});
