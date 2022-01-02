import Link from 'next/link'

import { variants } from './../../styles/styleVariables'
import TitleSection from './../TitleSection/index'

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
        {movies.map((movie, index) => {
          return(
            <Link 
              href={ `/movie/${(index + 1)}` } 
              key={movie.title}
              passHref
            >
              <a>
                <S.MovieCard>
                  <S.MovieCardSubtitle>
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
                  </S.MovieCardSubtitle>
                  
                  <S.MovieCardTitle>{movie.title}</S.MovieCardTitle>
                  <S.MovieCardButton>Movie Details</S.MovieCardButton>
                </S.MovieCard>
              </a>
            </Link>
          )
        })}
      </S.MovieContent>
    </S.MovieContainer>
  )
}

export default MovieList
