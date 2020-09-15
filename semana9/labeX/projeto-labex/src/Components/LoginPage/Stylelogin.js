import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin-top: 12%;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  p {
    color: cadetblue;
    font-size: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
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
    margin: 5px 0 0;
    height: 44px;
    background: cadetblue;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #cececd;
    }
  }
`;
