import { createGlobalStyle } from 'styled-components'
import { colors, fontFamilies, medias } from './styleVariables'

const GlobalStyles = createGlobalStyle`
  html, body,
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${colors.white};
    background-color: ${colors.black};
    font-family: ${fontFamilies.primary}, sans-serif;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles
