import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
${normalize}
@font-face {
font-family: "Inter";
src: url("/fonts/Inter.ttf");
font-style: swap;
}
body{
  font-family: Inter;
}
`;
