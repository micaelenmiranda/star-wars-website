import Head from 'next/head'
import MovieList from './../components/MovieList/index'

export default function IndexPage( { movies } ) {
  return (
    <>   
      <Head>
        <title>Star Wars | Classic Movies Collection</title>
        <meta name="description" content="A website dedicated to the Star Wars classic franchise" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <MovieList movies={ movies }/>
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
