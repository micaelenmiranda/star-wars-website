import Link from 'next/link'

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

      <MovieContent>
        {movies.map((movie, index) => {
          return(
            <Link href={ `/${(index + 1)}` } key={movie.title} passHref>
              <a>
                <MovieCard>
                  <MovieCardSubtitle>Episode {movie.episode_id}</MovieCardSubtitle>
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
