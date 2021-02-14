import { createGlobalStyle } from "styled-components";
import cursor from "../cursor.png";
const GlobalStyles = createGlobalStyle`
  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
  html{
    cursor: url(${cursor}), pointer;
  }
  body {
    font-family: "Roboto", sans-serif;
  }
  a {
    color: #000;
    text-decoration: none;
  }
`;

export default GlobalStyles;
