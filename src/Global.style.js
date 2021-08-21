import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --yellow: #FFE459;
    --pink: #F43B86;
    --purple: #3D087B;
    --black: #11052C;
    --white: #ffffff;

    --fontSmall: 0.8rem;
    --fontMed: 1.2rem;
    --fontBig: 1.5rem;
    --fontSuperBig: 1.8rem;

    --maxWidth: 1280px;
  }
`

export default GlobalStyle;