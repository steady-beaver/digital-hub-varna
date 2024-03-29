import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  :root {
    ${colors}
    --toastify-color-success: ${colors.green.dark};
  }

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Lexend", sans-serif;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  a{
    color: inherit;
    text-decoration: none;
  }

  .error {
    color: ${colors.red.main};
  }

`;

export default GlobalStyles;
