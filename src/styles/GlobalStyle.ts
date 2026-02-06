// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Pretendard-ExtraLight';
  }

  body {
    margin: 0;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.sm};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
