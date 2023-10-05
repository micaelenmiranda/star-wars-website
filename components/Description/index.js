import Image from 'next/image'
import { useState } from 'react'

import { variants } from '../../styles/styleVariables'
import { formatIntergerToRoman, formatDateToEnGB }from './../../utils/helpers'

import * as S from './styles'

function Description({ movie }) {
  const [imageLoading, setImageLoading] = useState(true);
  const imageLoaded = () => {
    setImageLoading(false);
  };

  return(
    <S.DescContainer
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <S.DescImage
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoading ? 0 : 1 }}
        transition={( { opacity: { delay: 0.5, duration: 0.4 } }) }
        onLoad={imageLoaded}
      >
        <Image 
          src={`/images/${movie.release_date}.jpg`}
          alt={movie.title}
          height={532}
          width={350}
          objectFit='contain'
        />
      </S.DescImage>

      <S.DescText>
        <S.DescTextSubtitle>
          Episode
          {formatIntergerToRoman(movie.episode_id)}
        </S.DescTextSubtitle>
        <S.DescTextTitle>{movie.title}</S.DescTextTitle>
        
        <S.DescWrapper>
          <S.DescTextInfo>
            <S.DescTextLabel>Director: </S.DescTextLabel>
            <S.DescTextSpan>{movie.director}</S.DescTextSpan>
          </S.DescTextInfo>

          <S.DescTextInfo>
            <S.DescTextLabel>Producer: </S.DescTextLabel>
            <S.DescTextSpan>{movie.producer}</S.DescTextSpan>
          </S.DescTextInfo>

          <S.DescTextInfo>
            <S.DescTextLabel>Release Date: </S.DescTextLabel>
            <S.DescTextTime dateTime={movie.release_date}>
              {formatDateToEnGB(movie.release_date)}
            </S.DescTextTime>
          </S.DescTextInfo>
        </S.DescWrapper>

        <S.DescTextOpening>&#34;{movie.opening_crawl}&#34;</S.DescTextOpening>
      </S.DescText>
    </S.DescContainer>
  )
}

export default Description
