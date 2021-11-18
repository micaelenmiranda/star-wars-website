import styled, {  } from 'styled-components'
import { colors, fontFamilies, medias } from '../../styles/styleVariables'

const MovieContainer = styled.main`
  color: ${colors.white};
  margin: 0 auto;
  max-width: 1200px;
  min-height: 440px;
  padding: 0 20px;
`

const MovieCardButton = styled.span `
  border: 1px solid ${colors.white};
  border-radius: 5px;
  color: ${colors.white};
  font-family: ${fontFamilies.primary};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  max-width: 154px;
  padding: 13px 0;
  text-align: center;
  transition: all 0.5s ease;
  width: 100%;
`

const MovieContent = styled.ul`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 100%;
  list-style: none;
  padding: 0;

  @media(min-width: ${medias.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: ${medias.desktopMedium}) { 
    grid-template-columns: repeat(3, 1fr);
  }
`

const MovieCard = styled.li` 
  background-color: ${colors.darkGray};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 220px;
  padding: 25px;
  transition: all 0.5s ease;
  width: 100%;

  &:hover {
    background-color: ${colors.blue};
    transition: all 0.4s ease;
    
    ${MovieCardButton} {
      background-color: ${colors.white};
      color: ${colors.blue};
      transition: all 0.4s ease;
    }
  }
`

const MovieCardSubtitle = styled.h3`
  color: ${colors.white};
  font-family: ${fontFamilies.primary};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
`

const MovieCardTitle = styled.h2` 
  color: ${colors.white};
  display: flex;
  align-items: center;
  font-family: ${fontFamilies.primary};
  font-size: 28px;
  font-weight: 700;
  height: 102px;
  line-height: 34px;
`

export {
  MovieContainer,
  MovieCardButton,
  MovieContent,
  MovieCard,
  MovieCardSubtitle,
  MovieCardTitle
}
