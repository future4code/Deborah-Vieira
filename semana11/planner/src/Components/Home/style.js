import styled from "styled-components";

export const Container = styled.div`
  input {
    padding: 5px;
    border: 1px solid #babaca;
    margin-right: 5px;
  }

  select {
    padding: 4px;
    margin-right: 5px;
    border: 1px solid #babaca;
    color: coral;
  }

  button {
    padding: 4px;
    color: coral;
    border: 1px solid #babaca;
    cursor: pointer;
    &:hover {
      background: coral;
      color: #fff;
    }
  }
`;
