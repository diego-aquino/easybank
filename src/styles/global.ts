import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Public Sans', sans-serif;
  }

  :root {
    font-size: 25%;
  }

  body {
    min-height: 100vh;
    font-size: 4rem;
  }

  input,
  textarea,
  button,
  select {
    font-family: 'Public Sans', sans-serif;
  }
`;

export default GlobalStyle;
