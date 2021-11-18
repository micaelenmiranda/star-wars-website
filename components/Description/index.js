import Image from 'next/image'

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
  const formattedDate = new Date(movie.release_date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return(
    <DescContainer>
      <DescImage>
        <Image 
          src={`/images/${movie.release_date}.jpg`}
          alt={movie.title}
          width={350}
          height={532}
        />
      </DescImage>

      <DescText>
        <DescTextSubtitle>Episode {movie.episode_id}</DescTextSubtitle>
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
