import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.primaryColor};
    font-family: 'Nunito', sans-serif;
    font-size: 30px;
  }

`;
