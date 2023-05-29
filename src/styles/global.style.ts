import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Nunito', sans-serif;
  }

  #__next {
    background: blue;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

`;
