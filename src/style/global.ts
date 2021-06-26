import { createGlobalStyle  } from "styled-components";

export default createGlobalStyle`
  * {
    font-family: "Benne";
  }

  :root {
    --black: #000000;
    --blue: #14213D;
    --yellow: #FCA311;
    --grey: #E5E5E5;
    --white: #FFFFFF;
  }

  body {
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  button, a {
    curso: pointer;
  }
`;