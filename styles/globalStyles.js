import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './styleVariables'

const GlobalStyles = createGlobalStyle`
  html, body,
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.black};
    font-family: ${fontFamilies.primary}, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles
