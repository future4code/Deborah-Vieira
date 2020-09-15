import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 25%;

  label {
    font-size: 20px;
    margin-bottom: 5px;
    /* escolher a cor da letra */
  }

  input {
    background: cadetblue;
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    margin: 10px 0 0;
    height: 44px;
    background: blueviolet;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    border: 0;
    font-size: 18px;
    transition: background 0.2s;

    &:hover {
      background: chocolate;
    }
  }
`;
