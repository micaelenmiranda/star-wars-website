import Head from 'next/head'
import Link from 'next/link'

import GlobalStyles from '../styles/globalStyles'
import Header from './../components/Header/index'
import TitleSection from './../components/TitleSection/index'
import Footer from './../components/Footer/index'

import {
  MovieContainer,
  MovieCardButton,
  MovieList,
  MovieCard,
  MovieCardSubtitle,
  MovieCardTitle
} from './../components/MovieList/styles'

export default function IndexPage( { movies } ) {
  return (
    <>   
      <Head>
        <title>Star Wars | Classic Movies Collection</title>
        <meta name="description" content="A website dedicated to the Star Wars franchise" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <MovieContainer>
        <TitleSection />

        <MovieList>
          {movies.map(movie => {
            return(
              <Link href={movie.episode_id.toString()} key={movie.title} passHref>
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
        </MovieList>
      </MovieContainer>

      <Footer />
      <GlobalStyles />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/films/')
  const data = await res.json()

  return {
    props: { 
      movies: data.results
    },
  }
}
