import Head from 'next/head'
import Image from 'next/image'

import GlobalStyles from '../styles/globalStyles'
import Header from './../components/Header/index'
import Footer from './../components/Footer/index'

import {
  DescContainer,
  DescImage,
  DescText,
  DescWrapper,
  DescTextSubtitle,
  DescTextTitle,
  DescTextSpan,
  DescTextInfo,
  DescTextOpening
} from './../components/Description/styles'

export default function SinglePage( { movie } ) {
  return(
    <>
      <Head>
        <title>Star Wars - {movie.title}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <DescContainer>
        <DescImage>
          
        </DescImage>

        <DescText>
          <DescTextSubtitle>Episode {movie.episode_id}</DescTextSubtitle>
          <DescTextTitle>{movie.title}</DescTextTitle>
          
          <DescWrapper>
            <DescTextInfo>
              <DescTextSpan>Director: </DescTextSpan>
              {movie.director}
            </DescTextInfo>

            <DescTextInfo>
              <DescTextSpan>Producer: </DescTextSpan>
              {movie.producer}
            </DescTextInfo>

            <DescTextInfo>
              <DescTextSpan>Release Date: </DescTextSpan>
              {movie.release_date}
            </DescTextInfo>
          </DescWrapper>

          <DescTextOpening>&#34;{movie.opening_crawl}&#34;</DescTextOpening>
        </DescText>
      </DescContainer>

      <Footer />
      <GlobalStyles />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://swapi.dev/api/films/')
  const movies = await res.json()

  const paths = movies.results.map((movie) => ({
    params: { 
      slug: movie.episode_id.toString()
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps( { params } ) {
  const res = await fetch(`https://swapi.dev/api/films/${params.slug}`)
  const movie = await res.json()
  
  return { 
    props: { 
      movie
    } 
  }
}
