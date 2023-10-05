import Link from 'next/link'

import { variants } from './../../styles/styleVariables'
import TitleSection from './../TitleSection/index'
import { formatIntergerToRoman } from './../../utils/helpers'

import * as S from './styles'

function MovieList({ movies }) {
  return(
    <S.MovieContainer>
      <TitleSection />

      <S.MovieContent
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: 'linear' }}
      >
        {movies.map((movie, index) =>
          <Link 
          href={ `/movie/${(index + 1)}` } 
          key={movie.title}
          passHref
        >
          <a>
            <S.MovieCard>
              <S.MovieCardSubtitle>
                Episode
                {formatIntergerToRoman(movie.episode_id)}
              </S.MovieCardSubtitle>
              
              <S.MovieCardTitle>{movie.title}</S.MovieCardTitle>
              <S.MovieCardButton>Movie Details</S.MovieCardButton>
            </S.MovieCard>
          </a>
        </Link>
        )}
      </S.MovieContent>
    </S.MovieContainer>
  )
}

export default MovieList
