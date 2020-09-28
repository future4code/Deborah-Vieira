import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

html, body , #root{
    background:#ffefd5;
    -webkit-font-smoothing: antialiased !important;
    /* Deixa as fontes mais limpas */
}

body{
    
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

button{
    cursor: pointer;
}

`;
