import { injectGlobal } from 'styled-components'
import { colors } from './colors'

/* tslint:disable no-unused-expression */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  
  html {
    font-family: 'Montserrat', sans-serif;
  }
  
  body {
    font-size: 21px;
    color: hsla(0, 0%, 0%, 0.8);
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }
  
  img {
    max-width: 100%;
  }
  
  a {
    color: ${colors.brand};
  }
  
  h1 {
    font-size: 2.0rem;
    text-rendering: optimizeLegibility;
    letter-spacing: 2px;
  }
  
  h2 {
    font-size: 1.45rem;
  }
  
  p {
    padding: 0;
  }
  
  h1,
  h2,
  img,
  p {
    margin: 0 0 1.45rem;
  }
  
  @media only screen and (max-width: 480px) {
    html {
      font-size: 18px;
    }
  }
`
