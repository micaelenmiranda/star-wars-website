import styled from 'styled-components'
import { motion } from 'framer-motion';

import { colors, fontFamilies, medias } from '../../styles/styleVariables'

const DescContainer = styled(motion.article)`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 100%;
  margin: 40px 25px;
  max-width: 1120px;

  @media(min-width: ${medias.tablet}) { 
    grid-template-columns: 1fr 2fr;
  }

  @media(min-width: ${medias.desktopMedium}) { 
    margin: 40px auto;
  }
`

const DescImage = styled(motion.div)` 
  text-align: center;
`

const DescText = styled.div` 
  position: relative;
`

const DescWrapper = styled.div` 
  display: grid;
  grid-template-columns: 100%;
  max-width: 100%;

  @media(min-width: ${medias.mobileLandscape}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    text-align: center;
  }

  @media(min-width: ${medias.tablet}) { 
    max-width: 515px;
    text-align: left;
  }
`

const DescTextSubtitle = styled.h2`
  color: ${colors.white};
  font-family: ${fontFamilies.primary}, sans-serif;
  font-size: 22px;
  font-weight: 500;
  line-height: 29px;
  text-align: center;

  @media(min-width: ${medias.tablet}) { 
    font-size: 24px;
    text-align: left;
  }
`

const DescTextTitle = styled.h1` 
  color: ${colors.white};
  font-family: ${fontFamilies.primary}, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 52px;
  margin-bottom: 25px;
  text-align: center;
  text-transform: uppercase;

  @media(min-width: ${medias.tablet}) { 
    font-size: 48px;
    line-height: 72px;
    margin: 0;
    text-align: left;
  }
`

const DescTextLabel = styled.label`
  color: ${colors.lightGray};
  display: block;
  font-weight: 400;
`

const DescTextTime = styled.time` 
  color: ${colors.white};
  font-weight: 700;
`

const DescTextSpan = styled.span`
  color: ${colors.white};
  font-weight: 700;
`

const DescTextInfo = styled.p` 
  font-family: ${fontFamilies.primary}, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  @media(min-width: ${medias.tablet}) { 
    font-size: 16px;
  }
`

const DescTextOpening = styled.p`
  color: ${colors.lightGray};
  font-family: ${fontFamilies.primary}, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;

  @media(min-width: ${medias.tablet}) {
    font-size: 20px;
  }
`

export {
  DescContainer,
  DescImage,
  DescText,
  DescWrapper,
  DescTextSubtitle,
  DescTextTitle,
  DescTextLabel,
  DescTextTime,
  DescTextSpan,
  DescTextInfo,
  DescTextOpening
}
