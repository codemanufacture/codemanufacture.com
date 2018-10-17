import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  * {
    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  img {
    display: block;
    max-width: 100%;
    border: none;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-size: 21px;
    color: hsla(0, 0%, 0%, 0.8);
    line-height: 1.6;
  }
`

export default GlobalStyle
