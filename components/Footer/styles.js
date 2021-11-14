import styled from 'styled-components'
import { colors, fontFamilies, medias } from '../../styles/styleVariables'

const FooterContainer = styled.footer`
  background-color: ${colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 20px;
  text-align: center;

  @media(min-width: ${medias.tabletSmall}) {
    flex-direction: row;
  }
`

const FooterInfo = styled.span`
  color: ${colors.alto};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamilies.primary}, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin: 5px;

  @media(min-width: ${medias.tabletSmall}) {
    margin:0 40px;
  }
`
const FooterLink = styled.a`
  color: ${colors.alto};
  cursor: pointer;

  &:after {
    border-bottom: 1px solid transparent;
    content: "";
    display: block;
    margin: 0 auto;
    transition: border-color 200ms, width 250ms;
    width: 40%;
  }

  &:hover:after {
    width: 100%;
    border-bottom-color: ${colors.alto};
  }
`

export { 
  FooterContainer, 
  FooterInfo,
  FooterLink
}
