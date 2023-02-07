import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: #2F3C7E;
    background-color: #FBEAEB;
    padding: 30px;
  }

  h2 {
  font-size: 1.4em;
  background-color: lightblue;
  border: 2px groove black;
  border-radius: 4px;
  text-align: center;
  
  }

  h1 {
    text-align: center;
    font-size: 3.5em;
  }

  
  p {
    font-size: 1.4em;
    text-align: center;
  }

  button {
    font-size: 1.2em;
    background-color:  #FBEAEB;
    color: #2F3C7E;
    border: 2px solid lightblue;
    border-radius: 3px;
  }




  h3 {
    font-size: 1.3em;
    text-align: center;
  }

  ul {
    font-size: 1.3em;
  }
 
`;
