// src/styles/theme.ts
export const theme = {
    colors: {
      primary: '#432F68',
      secondary: '#6366F1',
      primary_20: 'rgba(67, 47, 104, 0.2)',
      primary_50: 'rgba(67, 47, 104, 0.5)',
      background_purple: '#F2EFFF',
      background_blue: '#DFFCFF',
      black: '#000000',
      gray: '#7A7A7A',
      white: '#FFFFFB',
      background_gradient: 'radial-gradient(circle at 50% 70%, #DFFCFF, #F2EFFF)'
    },
    fontSizes: {
      tn: '12px',
      sm: '14px',
      md: '16px',
      lg: '20px',
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '15px',
      lg: '24px',
    },
  };
  
  export type ThemeType = typeof theme;
  