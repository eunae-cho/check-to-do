// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard-Medium';
    src: url(${process.env.PUBLIC_URL}/fonts/Pretendard.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url(${process.env.PUBLIC_URL}/fonts/Pretendard.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard-ExtraLight';
    src: url(${process.env.PUBLIC_URL}/fonts/Pretendard.woff2) format('woff2');
    font-weight: 200;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Pretendard-ExtraLight';
    background: ${theme.colors.background_gradient};
    color: ${theme.colors.black};
    font-size: ${theme.fontSizes.sm};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  
`;

export default GlobalStyle;
