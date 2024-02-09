import { css } from "styled-components";

const rem = (size: string) => `${parseInt(size) / 16}rem`;

function getTextStyles(fontWeight: number, fontSize: string, style?: "italic") {
  return css`
    font-weight: ${fontWeight};
    font-size: ${rem(fontSize)};
    font-family: ${style
      ? "'Poppins',  sans-serif;"
      : "'Lexend',  sans-serif;"};
    font-style: ${style ? "italic" : "normal"};
    margin: 0;
  `;
}

const typography = {
  h1: getTextStyles(400, "48px"),
  accent: getTextStyles(700, "18px"),
  body: getTextStyles(300, "16px"),
  light: getTextStyles(200, "16px"),
  italic: getTextStyles(500, "16px", "italic"),
};

export default typography;
