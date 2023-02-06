import { createGlobalStyle } from "styled-components";
import Link from "next/link";

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
  Image {
    justify-content: center;
  }
  
  p {
    font-size: 1.4em;
    text-align: center;
  }

  button {
    font-size: 1.2em;
    background-color:  #FBEAEB;
    color: #2F3C7E;
    border: none;
  }

  nav {
    border: 2px groove black;
    border-radius: 4px;
    text-align: center;
  }


  h3 {
    font-size: 1.3em;
    text-align: center;
  }

  ul {
    font-size: 1.3em;
  }
 
`;
