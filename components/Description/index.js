import Image from 'next/image'
import { useState } from 'react'

import { variants } from '../../styles/styleVariables'

import {
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
} from './styles'

function Description({ movie }) {
  const formattedDate = new Date(movie.release_date).toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  })

  const [imageLoading, setImageLoading] = useState(true);
  const imageLoaded = () => {
    setImageLoading(false);
  };

  return(
    <DescContainer
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <DescImage
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoading ? 0 : 1 }}
        transition={( { opacity: { delay: 0.5, duration: 0.4 } }) }
        onLoad={imageLoaded}
      >
        <Image 
          src={`/images/${movie.release_date}.jpg`}
          alt={movie.title}
          layout='fill'
          objectFit='cover'
        />
      </DescImage>

      <DescText>
        <DescTextSubtitle>
          Episode
          {(() => {
            switch(movie.episode_id) {
              case 1:
                return ' I'
              case 2:
                return ' II'
              case 3:
                return ' III'
              case 4:
                return ' IV'
              case 5:
                return ' V'
              case 6:
                return ' VI'
              default: (movie.episode_id)
            }
          })()}
        </DescTextSubtitle>
        <DescTextTitle>{movie.title}</DescTextTitle>
        
        <DescWrapper>
          <DescTextInfo>
            <DescTextLabel>Director: </DescTextLabel>
            <DescTextSpan>{movie.director}</DescTextSpan>
          </DescTextInfo>

          <DescTextInfo>
            <DescTextLabel>Producer: </DescTextLabel>
            <DescTextSpan>{movie.producer}</DescTextSpan>
          </DescTextInfo>

          <DescTextInfo>
            <DescTextLabel>Release Date: </DescTextLabel>
            <DescTextTime dateTime={movie.release_date}>
              {formattedDate}
            </DescTextTime>
          </DescTextInfo>
        </DescWrapper>

        <DescTextOpening>&#34;{movie.opening_crawl}&#34;</DescTextOpening>
      </DescText>
    </DescContainer>
  )
}

export default Description
