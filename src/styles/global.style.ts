import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  button, a {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-decoration: none;
  }
  
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Nunito', sans-serif;
  }

  #__next {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  

`;
