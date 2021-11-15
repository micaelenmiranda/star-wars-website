import styled from 'styled-components'
import { colors, fontFamilies, medias } from '../../styles/styleVariables'

const Title = styled.h1` 
  color: ${colors.white};
  font-family: ${fontFamilies.primary};
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 50px;
  margin-top: 20px;
  text-align: center;
  text-transform: uppercase;

  @media(min-width: ${medias.tabletSmall}) { 
    font-size: 32px;
  }
`
const TitleSpan = styled.span`
  font-weight: 700;
`

export { Title, TitleSpan }
