import Head from 'next/head'
import Image from 'next/image'

import GlobalStyles from '../styles/globalStyles'
import Header from '../components/Header/index'
import Footer from '../components/Footer/index'

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
} from '../components/Description/styles'

export default function SinglePage( { movie } ) {
  const formattedDate = new Date(movie.release_date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  return(     
    <>
      <Head>
        <title>Star Wars - {movie.title}</title>
        <meta name="description" content={`A brief description of the classic film ${movie.title}`} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

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

      <Footer />
      <GlobalStyles />
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://swapi.dev/api/films/')
  const movies = await res.json()

  const paths = movies.results.map((movie, index) => ({
    params: { 
      slug: (index + 1).toString()
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps( { params } ) {
  const res = await fetch(`https://swapi.dev/api/films/${params.slug}/`)
  const movie = await res.json()
  
  return { 
    props: { 
      movie
    }
  }
}
