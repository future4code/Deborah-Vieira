import React from "react";
import { Container, Form } from "./style";

const FormPage = () => {
  return (
    <Container>
      <Form>
        <label for="name">Nome</label>
        <input type="text" id="nome" name="name" />

        <label for="age">Idade</label>
        <input type="text" id="age" name="age" />

        <label for="applicationText">Descrição</label>
        <input
          type="text-area"
          id="applicationText"
          name="aapplicationTextge"
        />

        <label for="country">Cidade</label>
        <input type="text" id="country" name="country" />
        <button>Inscreva-se</button>
      </Form>
    </Container>
  );
};

export default FormPage;
