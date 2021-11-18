import styled from 'styled-components'
import { colors, fontFamilies, medias } from '../../styles/styleVariables'

const HeaderContainer = styled.header`
  background-color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding: 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  @media(min-width: ${medias.tablet}) {
    position: relative;
    height: 100px;
  }
`

const HeaderLogo = styled.a` 
  max-height: 75px;
  max-width: 75px;

  @media(min-width: ${medias.tablet}) {
    max-height: 120px;
    max-width: 120px;
  }
`

export { HeaderContainer, HeaderLogo }
