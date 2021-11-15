import styled from 'styled-components'
import { colors, fontFamilies, medias } from '../../styles/styleVariables'

const ErrorContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 460px;
  position: relative;
  text-align: center;
  width: 100%;
`

const ErrorTitle = styled.h1`
  color: ${colors.white};
  font-family: ${fontFamilies.primary};
  font-size: 32px;
  padding: 40px;
  position: absolute;
  bottom: 0;
  text-transform: uppercase;
`

export { 
  ErrorContainer,
  ErrorTitle
 }
