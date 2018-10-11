import { injectGlobal } from 'styled-components'
import { colors } from './colors'

/* tslint:disable no-unused-expression */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  img {
    max-width: 100%;
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
