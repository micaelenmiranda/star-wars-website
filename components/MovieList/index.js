import Link from 'next/link'

import { variants } from './../../styles/styleVariables'
import TitleSection from './../TitleSection/index'

import {
  MovieContainer,
  MovieCardButton,
  MovieContent,
  MovieCard,
  MovieCardSubtitle,
  MovieCardTitle
} from './styles'

function MovieList({ movies }) {
  return(
    <MovieContainer>
      <TitleSection />

      <MovieContent
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
                <MovieCard>
                  <MovieCardSubtitle>
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
                  </MovieCardSubtitle>
                  
                  <MovieCardTitle>{movie.title}</MovieCardTitle>
                  <MovieCardButton>Movie Details</MovieCardButton>
                </MovieCard>
              </a>
            </Link>
          )
        })}
      </MovieContent>
    </MovieContainer>
  )
}

export default MovieList
