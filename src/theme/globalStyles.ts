import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";

const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  :root {
    ${colors}
  }

  html {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

`;

export default GlobalStyles;
