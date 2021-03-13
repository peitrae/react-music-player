import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Lato, sans-serif
  }

  a {
    text-decoration: none;
  }

  body {
    margin: 0;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  button:focus {
    outline: none;
  }
`;

export default GlobalStyles;
