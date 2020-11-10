import { createGlobalStyle } from 'styled-components';

const GlobalTheme = {
  textColor: '#000',
  fontSize: '16px'
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-size: ${GlobalTheme.fontSize};  
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: ${GlobalTheme.textColor};
    height: 100vh;
    background: #fff;
  }
  h1,h2,h3 {
    font-weight: 700;
  }

`;
 
export default GlobalStyle;